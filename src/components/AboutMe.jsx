import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <section id="aboutMe" className="mt-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">About me</h2>
      <p className="text-secondary leading-relaxed">
        I am computer science student on the university of Science and Technology in Wroclaw.
        I am passionate about mathematics and it's applications in computer science. I am also intressted in philosophy and history which I explore in my <a href="https://916.pl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">radio show</a>.
      </p>
    </section>
  )
}

export default AboutMe