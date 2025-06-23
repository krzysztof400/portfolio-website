import { Link } from 'react-router-dom'

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[30%] flex flex-col items-center justify-start p-[5%] text-white lg:overflow-hidden w-full">
      <div className="mt-5 flex flex-col items-center text-center">
        <img 
          src="icons/profilepic.png" 
          alt="Profile" 
          className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg mb-5"
        />
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Krzysztof Zajac</h1>
        <h2 className="text-xl lg:text-2xl mb-4">Software Engineer</h2>
        <p className="text-center mb-8">
          Computer Science student<br />
          Wroclaw University of Science and Technology
        </p>
      </div>

      <nav className="mb-8">
        <ul className="space-y-6 text-center">
          <li>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="nav-item cursor-pointer"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="nav-item cursor-pointer"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('aboutMe')} 
              className="nav-item cursor-pointer"
            >
              About me
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="nav-item cursor-pointer"
            >
              Experience
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 mt-auto">
        <a 
          href="https://github.com/krzysztof400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img src="icons/github.png" alt="GitHub" className="w-8 h-8 rounded" />
        </a>
        <a 
          href="https://www.instagram.com/krzysztof_400/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img src="icons/instagram.png" alt="Instagram" className="w-8 h-8 rounded" />
        </a>
        <a 
          href="https://www.linkedin.com/in/krzysztof400/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img src="icons/linkedin.png" alt="LinkedIn" className="w-8 h-8 rounded" />
        </a>
      </div>
    </header>
  )
}

export default Header