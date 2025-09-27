import { GamepadIcon, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <GamepadIcon className="w-8 h-8 text-nintendo-red mr-2" />
              <span className="text-2xl font-bold">Nintendo</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Creating smiles through gaming experiences since 1889.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-nintendo-red transition-colors">Nintendo Switch</a></li>
              <li><a href="#" className="hover:text-nintendo-red transition-colors">Nintendo Switch OLED</a></li>
              <li><a href="#" className="hover:text-nintendo-red transition-colors">Games</a></li>
              <li><a href="#" className="hover:text-nintendo-red transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-nintendo-blue transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-nintendo-blue transition-colors">Repairs</a></li>
              <li><a href="#" className="hover:text-nintendo-blue transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-nintendo-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-nintendo-yellow transition-colors">About Nintendo</a></li>
              <li><a href="#" className="hover:text-nintendo-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-nintendo-yellow transition-colors">News</a></li>
              <li><a href="#" className="hover:text-nintendo-yellow transition-colors">Investors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted-foreground/20 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-nintendo-red mx-2" /> for Nintendo fans worldwide
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Nintendo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;