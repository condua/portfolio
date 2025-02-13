import { useContext, useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { LanguageContext } from "../utils/LanguageContext";
const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-500 shadow sticky top-0 z-50 border-b-2 border-blue-700">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo/Title */}
        <div className="flex flex-row justify-between items-center gap-x-5">
          <img className="w-10 h-10" src="/images/logo.png" />
          <h1 className="text-xl font-bold text-white">{language.title}</h1>
        </div>

        {/* Desktop Navigation (visible on md and larger screens) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="#hero" className="hover:text-red-500 text-white">
                {language.header.home}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 text-white">
                {language.header.about}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-red-500 text-white">
                {language.header.portfolio}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500 text-white">
                {language.header.contact}
              </a>
            </li>
            <li>
              <img
                onClick={() => changeLanguage("vn")}
                className="w-10 h-8 object-cover cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png"
                alt="Vietnam Flag"
              />
            </li>
            <li>
              <img
                onClick={() => changeLanguage("en")}
                className="w-10 h-8 object-cover cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s"
                alt="England Flag"
              />
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (visible on screens <768px) */}
        <nav className="md:hidden">
          <Menu
            open={isOpen}
            handler={() => setIsOpen(!isOpen)} // Đảo trạng thái menu
          >
            <MenuHandler>
              <Button variant="text" size="sm">
                {isOpen ? (
                  // Icon Close (X)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Icon Menu (☰)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Button>
            </MenuHandler>
            <MenuList className="w-full flex-col justify-center items-center md:hidden border-none">
              <MenuItem>
                <a
                  href="#hero"
                  className="block w-full hover:text-blue-500 text-center"
                >
                  {language.header.home}
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#about"
                  className="block w-full hover:text-blue-500 text-center"
                >
                  {language.header.about}
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#portfolio"
                  className="block w-full hover:text-blue-500 text-center"
                >
                  {language.header.portfolio}
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#contact"
                  className="block w-full hover:text-blue-500 text-center"
                >
                  {language.header.contact}
                </a>
              </MenuItem>
              <MenuItem className="flex justify-center items-center">
                <img
                  onClick={() => changeLanguage("vn")}
                  className="w-10 h-8 object-cover cursor-pointer"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png"
                  alt="Vietnam Flag"
                />
              </MenuItem>
              <MenuItem className="flex justify-center items-center">
                <img
                  onClick={() => changeLanguage("en")}
                  className="w-10 h-8 object-cover cursor-pointer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s"
                  alt="England Flag"
                />
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
