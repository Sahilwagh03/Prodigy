"use client"

import { useEffect, useRef } from "react"

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const gl = canvas.getContext("webgl")!
    if (!gl) return

    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `

    const fragmentShaderSource = `
    precision highp float;

    uniform vec2 iResolution;
    uniform float iTime;
    uniform vec2 iMouse;

    vec3 gradient(float t) {
        // Keep richness but smooth transitions
        vec3 c1 = vec3(0.654, 0.545, 0.980);
        vec3 c2 = vec3(0.486, 0.227, 0.929);
        vec3 c3 = vec3(0.309, 0.275, 0.898);
        vec3 c4 = vec3(0.024, 0.714, 0.831);

        t = smoothstep(0.0, 1.0, t); // smoother blend

        if (t < 0.33) return mix(c1, c2, t / 0.33);
        if (t < 0.66) return mix(c2, c3, (t - 0.33) / 0.33);
        return mix(c3, c4, (t - 0.66) / 0.34);
    }

    void main() {
        float mr = min(iResolution.x, iResolution.y);
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / mr;

        vec2 mouse = (iMouse * 2.0 - iResolution.xy) / mr;
        uv += mouse * 0.35; // slightly reduced but not dead

        float d = -iTime * 0.45;
        float a = 0.0;

        for (float i = 0.0; i < 8.0; ++i) {
            a += cos(i - d - a * uv.x);
            d += sin(uv.y * i + a);
        }

        d += iTime * 0.45;

        float pattern = sin(d + a) * 0.5 + 0.5;

        // 🔥 this is the key change:
        // reduce highlight sharpness without killing depth
        pattern = mix(pattern, 0.5, 0.15);

        vec3 col = gradient(pattern);

        // very subtle tone down (not flat)
        col *= 0.96;

        gl_FragColor = vec4(col, 1.0);
    }
    `

    function createShader(type: number, source: string) {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

    const program = gl.createProgram()!
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    gl.useProgram(program)

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    )

    const positionLocation = gl.getAttribLocation(program, "aPosition")
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const resolutionUniform = gl.getUniformLocation(program, "iResolution")
    const timeUniform = gl.getUniformLocation(program, "iTime")

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener("resize", resize)
    resize()

    let start = performance.now()

    function render() {
      let time = (performance.now() - start) * 0.001

      gl.uniform2f(resolutionUniform, canvas.width, canvas.height)
      gl.uniform1f(timeUniform, time)


      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      requestAnimationFrame(render)
    }

    render()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="-z-10 w-full h-full"
    />
  )
}
