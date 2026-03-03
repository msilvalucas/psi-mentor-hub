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
            <a href="https://www.instagram.com/clube.psipraquetequero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@psipraquetequero?_r=1&_t=ZS-93hVIMbjVl" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              TikTok
            </a>
            <a href="https://open.spotify.com/playlist/21xrLVakJVmwRbbJr0nyf8?si=T8f-ejBdS_-_Xde0brr8gw&pi=3CQ5B2p9Rz6mh" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
              Spotify
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
