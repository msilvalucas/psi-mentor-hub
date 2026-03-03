import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl font-bold">PsiPraQueTeQuero</p>
            <p className="text-sm text-primary-foreground/70 mt-1">
              Desenvolvimento continuado para psicólogos clínicos
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Instagram
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              TikTok
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              YouTube
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-xs text-primary-foreground/60 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} PsiPraQueTeQuero. Feito com
            <Heart className="h-3 w-3" /> para psicólogos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
