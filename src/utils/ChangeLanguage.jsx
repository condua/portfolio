import useLanguage from "./useLanguage";
import vn from "../json/vi.json";
import en from "../json/en.json";

// Tập hợp dữ liệu ngôn ngữ
const languageData = { vn, en };

const ChangeLanguage = () => {
  // Sử dụng hook với ngôn ngữ mặc định là "vn"
  const { language, changeLanguage } = useLanguage("vn", languageData);

  return (
    <div className="p-4">
      {/* Phần chọn ngôn ngữ */}
      <div className="flex space-x-4 mb-4">
        {/* Cờ Việt Nam */}
        <img
          onClick={() => changeLanguage("vn")}
          className="w-10 h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/640px-Flag_of_Vietnam.svg.png"
          alt="Vietnam Flag"
        />
        {/* Cờ Anh */}
        <img
          onClick={() => changeLanguage("en")}
          className="w-10 h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s"
          alt="England Flag"
        />
      </div>

      {/* Hiển thị nội dung theo ngôn ngữ đã chọn */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{language.title}</h1>
        <p>{language.content}</p>
      </div>
    </div>
  );
};

export default ChangeLanguage;
