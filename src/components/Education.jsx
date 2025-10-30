function Education() {
    const educationHistory = [
      {
        degree: "Bacherlor in Computer Science",
        details: "Wrocław University of Science and Technology, 2023 - present",
      },
      {
        degree: "Erasmus+ exchange semester",
        details: "Paris ESIEE, fall of 2024",
      },
    ];
  
    return (
      <section id="education" className="mt-20 lg:mt-24 mb-40 lg:mb-48">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Education</h2>
        <ul className="space-y-4">
          {educationHistory.map((item, index) => (
            <li key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold mb-2 text-white">
                {item.degree}
              </h4>
              <p className="text-secondary">{item.details}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
export default Education;