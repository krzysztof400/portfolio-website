function Experience() {
  const jobs = [
    {
      title: "Python Developer Internship at Nokia",
      date: "July 2025 - present",
      description: "Works in lab environment, developing Python scripts for testing Nokia's 5G network equipment.",
      skills: [
        { name: "Python", description: "Developed scripts for automating tests and data analysis." },
        { name: "Problem Solving", description: "Identified and resolved issues in network equipment through scripting." },
        { name: "Collaboration", description: "Worked with a team of engineers to improve testing processes." }
      ]
    },
    {
      title: "Private Tutor (Math, Physics, History)",
      date: "September 2023 - June 2025",
      description: "I managed all aspects of tutoring, from advertising services to conducting lessons.",
      skills: [
        { name: "Discipline", description: "Organized and maintained a consistent tutoring schedule." },
        { name: "Time Management", description: "Balanced 20 hours of tutoring per week while studying." },
        { name: "Independence", description: "Self-managed all aspects of the tutoring business." }
      ]
    },
    {
      title: "Fundraiser at Greenpeace",
      date: "June 2022 - August 2022",
      description: "As a summer fundraiser, I approached people on the street to encourage them to donate to Greenpeace.",
      skills: [
        { name: "Communication", description: "Engaged with strangers and explained Greenpeace's mission clearly." },
        { name: "Persuasion", description: "Convincing people to commit financially required strong persuasive abilities." },
        { name: "Resilience", description: "Handling rejections and maintaining motivation in a fast-paced environment." }
      ]
    }
  ]
  
  return (
    <section id="experience" className="mt-20 mb-20">
    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Work Experience</h2>
    <div className="space-y-6">
      {jobs.map((job, index) => (
      <div key={index} className="job-card">
        <h3 className="text-xl font-semibold mb-1 text-white">{job.title}</h3>
        <p className="text-sm text-gray-400 mb-3">{job.date}</p>
        <p className="text-secondary mb-4">{job.description}</p>
        <ul className="space-y-2">
        {job.skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="text-secondary">
          <span className="font-semibold text-white">{skill.name}:</span> {skill.description}
          </li>
        ))}
        </ul>
      </div>
      ))}
    </div>
    </section>
  )
  }
  
  export default Experience