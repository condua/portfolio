import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { LanguageProvider } from "./utils/LanguageContext";
function App() {
  return (
    <LanguageProvider>
      <div className="bg-gray-100 text-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <footer className="py-4 text-center bg-gray-200 flex md:flex-row flex-col items-center justify-around w-full">
          <p className="md:text-xl text-xss">
            © {new Date().getFullYear()} Phan Hoàng Phúc. All rights reserved.
          </p>
          <nav>
            <ul className="flex justify-center items-center md:gap-x-5 gap-x-3">
              <li>
                <a
                  href="https://github.com/phanhoangphuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-3xl text-2xl text-blue-600 hover:text-gray-800 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/phanhoangphuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-3xl text-2xl text-red-600 hover:text-red-800 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/phanhoangphuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-3xl text-2xl text-blue-600 hover:text-red-800 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/phanhoangphuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
