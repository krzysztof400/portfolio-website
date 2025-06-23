import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'

function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Header />
      <main className="flex-1 lg:ml-[35%] lg:w-[65%] lg:pr-[5%] lg:pl-[5%] w-full px-4 lg:px-0">
        <div className="max-w-3xl mx-auto">
          <Projects />
          <Skills />
          <AboutMe />
          <Experience />
        </div>
      </main>
    </div>
  )
}

export default Home