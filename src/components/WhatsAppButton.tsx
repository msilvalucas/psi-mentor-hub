import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Placeholder - substituir pelo número real
  const whatsappUrl = "https://wa.me/5500000000000?text=" + encodeURIComponent("Olá! Gostaria de saber mais sobre o PsiPraQueTeQuero.");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
