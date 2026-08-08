import { CONTACT_WHATSAPP_URL } from "@/constant/links";

export default function WhatsAppButton() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes whatsapp-breath {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .whatsapp-breath-btn {
          animation: whatsapp-breath 2s ease-in-out infinite;
        }
      `}} />

      <div className="fixed bottom-6 right-6 z-[999] flex items-center select-none">
        <a
          href={CONTACT_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-breath-btn flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.3)] transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.022-.079-.186-.23-.414-.341c-.228-.112-1.349-.667-1.555-.744c-.207-.076-.356-.112-.506.113c-.15.225-.578.728-.709.879c-.13.15-.259.168-.487.056c-.228-.112-.964-.356-1.837-1.134c-.679-.605-1.138-1.352-1.271-1.579c-.13-.225-.014-.347.099-.46c.102-.102.228-.266.342-.397c.114-.131.152-.225.228-.375c.076-.15.038-.282-.019-.395c-.056-.113-.506-1.217-.693-1.666c-.182-.438-.364-.378-.506-.385c-.131-.006-.28-.006-.429-.006c-.15 0-.394.056-.601.282c-.207.225-.79.773-.79 1.884c0 1.111.808 2.186.919 2.337c.111.15 1.589 2.427 3.85 3.402c.538.231.957.37 1.284.474c.54.171 1.03.147 1.417.09.43-.064 1.349-.55 1.537-1.079c.188-.528.188-.981.131-1.074c-.058-.093-.222-.147-.45-.258zM12.22 22c-1.9 0-3.722-.499-5.328-1.446l-.382-.227l-3.96 1.037l1.055-3.858l-.248-.396A9.761 9.761 0 0 1 2.006 12c0-5.385 4.38-9.764 9.765-9.764c5.384 0 9.764 4.38 9.764 9.764c0 5.385-4.38 9.764-9.764 9.764zm0-21.764C5.748.236.48 5.503.48 11.977c0 2.068.54 4.088 1.564 5.864L0 24l6.335-1.662c1.716.936 3.642 1.429 5.602 1.429c6.472 0 11.74-5.267 11.74-11.74C23.72 5.503 18.452.236 12.22.236z" />
          </svg>
        </a>
      </div>
    </>
  );
}
