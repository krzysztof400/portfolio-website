import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <section id="aboutMe" className="mt-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">About me</h2>
      <p className="text-secondary leading-relaxed">
        I am computer science student on the university of Science and Technology in Wroclaw.
        I am passionate about{' '}
        <Link to="/math" className="text-white hover:text-blue-400 transition-colors">
          mathematics
        </Link>
        ,{' '}
        <Link to="/philosophy" className="text-white hover:text-blue-400 transition-colors">
          philosophy
        </Link>
        ,{' '}
        <Link to="/history" className="text-white hover:text-blue-400 transition-colors">
          history
        </Link>
        {' '}and{' '}
        <Link to="/culture" className="text-white hover:text-blue-400 transition-colors">
          culture
        </Link>
        {' '}in general. I consider myself as curious person. I am always eager to learn new things and I am not afraid of challenges. I just came back from my{' '}
        <a 
          href="https://esiee.fr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          Erasmus in Paris
        </a>
        {' '}where I have learned a lot about myself and where I want to be, also, career-wise.
      </p>
    </section>
  )
}

export default AboutMe