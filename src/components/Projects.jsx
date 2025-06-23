function Projects() {
    const projects = [
      {
        title: "Paint in Java/JavaFX",
        link: "https://github.com/krzysztof400/university/tree/main/Programming_course/paint",
        description: "Program showcasing object oriented programming"
      },
      {
        title: "My own neural network implementation",
        link: "https://github.com/krzysztof400/vectorflow",
        description: "Project in which I have implemented gradial descent algorithm in creation of my own simple neural network library"
      },
      // {
      //   title: "Age calculator",
      //   link: "https://github.com/krzysztof400/AgeCalcExtension/tree/main",
      //   description: "Written in react google chrome extension for showing age in real time with decimal approximation. Uses react, css and chrome"
      // },
      {
        title: "Leetcode portfolio",
        link: "https://github.com/krzysztof400/Leetcode",
        description: "Collection of my leetcode solutions in Java, C++ and Python"
      }
    ]
  
    return (
      <section id="projects" className="mt-20 lg:mt-24">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Projects</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold mb-2">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </a>
              </h4>
              <p className="text-secondary">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  }
  
  export default Projects