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
        <footer className="py-4 text-center bg-gray-200">
          © {new Date().getFullYear()} Phan Hoàng Phúc. All rights reserved.
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
