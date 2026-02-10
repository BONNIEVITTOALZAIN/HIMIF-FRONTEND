import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import CardNavbar from "./CardNavbar";
import { useAuth } from "../../components/context/authContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown,setOpenDropdown] = useState(null);
  const { user } = useAuth();
  const adminRoles = ["admin", "pengurus", "bendahara"];
  const isAdmin = adminRoles.includes(user?.role);

  const navigations = [
    { name: "Home", to: "/" },
    {
      name: "About Me",
      to: "/AboutMe"
    },
    {
      name: "Programs",
      dropdown: [
        { name: "Program Kerja", to: "/program/kerja" },
        { name: "Kegiatan Rutin", to: "/program/rutin" },
        { name: "Workshop", to: "/program/workshop" },
        { name: "Seminar", to: "/program/seminar" },
      ],
    },
    { name: "News", to: "/berita" },
    { name: "Contact", to: "/kontak" },
  ];

    useEffect(() =>{
            const handleClickOutside = (e) => {
        if (!e.target.closest(".dropdown")) {
          setOpenDropdown(null);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    },[])
    
    const toggleDropdown = (index) => {
      setOpenDropdown(openDropdown === index ? null : index);
    };
  return (
    <>
    {!isAdmin && (
    <nav className=" shadow-sm sticky top-0 z-50 bg-transparent rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo HIMIF" className="h-12" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navigations.map((navigation, index) => (
              <div key={navigation.name} className="relative">
                {navigation.dropdown ? (
                  <>
                    <div
                      onClick={() => toggleDropdown(index)}
                      className="flex navigations-center gap-1 text-gray-600 hover:text-red-700"
                    >
                      {navigation.name}
                    </div>
                    {openDropdown === index && (
                    <CardNavbar items={navigation.dropdown}   closeDropDown={() => setOpenDropdown(null)}/>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={navigation.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-700 font-semibold border-b-2 border-red-700 pb-1"
                        : "text-gray-600 hover:text-red-700"
                    }
                  >
                    {navigation.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
          {navigations.map((navigation, index) => (
            <div key={navigation.name}>
              {navigation.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex justify-between w-full text-gray-600"
                  >
                    {navigation.name}
                  </button>
                  {openDropdown === index && (
                    <div className="pl-4">
                      {navigation.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.to}
                          className="block py-1 text-sm text-gray-500"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={navigation.to}
                  className="block py-2 text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {navigation.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
    )}
    </>
  );
}
