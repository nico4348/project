import { Bell, User, Menu } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { user, logout } = useUser();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (userMenuOpen) setUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center ml-4 md:ml-0">
              <Link to="/" className="flex items-center">
                <div className="h-8 w-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SP</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">SaludPlus</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={toggleNotifications}
                  className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                >
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-pink-500"></span>
                </button>
                
                {notificationsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
                    <div className="p-2 border-b border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900">Notificaciones</h3>
                    </div>
                    <div className="py-2 max-h-80 overflow-y-auto">
                      <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <p className="text-sm text-gray-800 font-medium">Su cita está confirmada</p>
                        <p className="text-xs text-gray-500">Dr. Smith - Mañana a las 9:00 AM</p>
                      </div>
                      <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <p className="text-sm text-gray-800 font-medium">Nuevo mensaje del Dr. Johnson</p>
                        <p className="text-xs text-gray-500">Hace 2 horas</p>
                      </div>
                      <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <p className="text-sm text-gray-800 font-medium">Los resultados de laboratorio están listos</p>
                        <p className="text-xs text-gray-500">Ayer a las 5:30 PM</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 p-2">
                      <a href="#" className="text-sm text-cyan-600 hover:text-cyan-700 font-medium">Ver todas las notificaciones</a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative ml-4">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-600"
                >
                  <div className="h-8 w-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-800 font-medium">
                    {user?.name ? user.name.charAt(0).toUpperCase() : <User className="h-4 w-4" />}
                  </div>
                  <span className="ml-2 text-gray-700 hidden md:block">{user?.name || 'Usuario'}</span>
                </button>
                
                {userMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Configuración de perfil
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;