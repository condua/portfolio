const Footer = () => {
  return (
    <footer className="py-4 text-center bg-gray-200 flex md:flex-row flex-col items-center justify-around w-full">
      <p className="md:text-xl text-xss">
        © {new Date().getFullYear()} Phan Hoàng Phúc. All rights reserved.
      </p>
      <nav>
        <ul className="flex justify-center items-center md:gap-x-5 gap-x-3">
          <li>
            <a
              href="https://github.com/condua"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-3xl text-2xl text-black transition duration-300 ease-in-out"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/phuc.phanhoang.1694"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-3xl text-2xl text-blue-600 transition duration-300 ease-in-out"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@tonyphan34"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-3xl text-2xl text-red-600 transition duration-300 ease-in-out"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/phanhoangphuc0509/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-3xl text-2xl text-blue-600 transition duration-300 ease-in-out"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@bimatgiaitri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-800 transition duration-300 ease-in-out"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a
              href="https://zalo.me/0399915548"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-800 transition duration-300 ease-in-out"
            >
              <img src="/images/zalo.png" alt="Zalo" className="w-8 h-8" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
