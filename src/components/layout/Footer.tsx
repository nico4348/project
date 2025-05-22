import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="h-6 w-6 bg-cyan-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">SP</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">© {currentYear} SaludPlus. Todos los derechos reservados.</span>
          </div>
          
          <div className="mt-2 md:mt-0 flex items-center space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-cyan-600 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Contacto</a>
          </div>
          
          <div className="mt-2 md:mt-0 flex items-center text-sm text-gray-500">
            <span className="flex items-center">
              Hecho con <Heart className="h-4 w-4 text-pink-500 mx-1 inline" fill="currentColor" /> para la salud
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;