import React from "react";
import { Menu, Bell, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout logic here (clearing tokens)
    console.log("Logging out...");
    navigate("/login"); // Redirects to the login route
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-[#C4DAD2] z-[60] flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - Hidden on desktop */}
        <button
          onClick={onMenuToggle}
          className="p-2 sm:hidden text-[#16423C] hover:bg-[#E9EFEC] rounded-md"
        >
          <Menu size={24} />
        </button>

        <div className="h-10 w-32 bg-[#E9EFEC] border border-dashed border-[#6A9C89] flex items-center justify-center rounded text-sm text-[#16423C] font-bold">
          your logo
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Vertical Divider */}
        <div className="h-8 w-px bg-[#C4DAD2] mx-1"></div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-[#16423C] hover:bg-red-50 hover:text-red-700 transition-all font-medium text-sm"
          title="Logout"
        >
          <LogOut size={20} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
