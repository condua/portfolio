import { useContext } from "react";
import { LanguageContext } from "../utils/LanguageContext";
const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  // Sample portfolio items
  // const projects = [
  //   {
  //     title: "Project One",
  //     description: "A brief description of Project One.",
  //     imageUrl:
  //       "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg",
  //     link: "#",
  //   },
  //   {
  //     title: "Project Two",
  //     description: "A brief description of Project Two.",
  //     imageUrl:
  //       "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg",
  //     link: "#",
  //   },
  //   {
  //     title: "Project Three",
  //     description: "A brief description of Project Three.",
  //     imageUrl:
  //       "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg",
  //     link: "#",
  //   },
  // ];
  const projects = language.portfolio.projects;
  console.log(language.portfolio.projects);
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded overflow-hidden duration-300 transform hover:-translate-y-5 cursor-pointer"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
