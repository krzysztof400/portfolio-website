import { Link } from 'react-router-dom'

function Philosophy() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <p className="text-secondary text-lg leading-relaxed mb-8">
          My interest in philosophy dates back to my early teens. I have always questioned everything and tried to get 
          to the bottom of things - condition which inevitably will lead you to discovering philosophy. Entire high school 
          I have attended philosophy sessions organised by "młodzieżowy dom kultury" where I get to know my philosophical 
          mentor with whom I am still discovering philosophy. My current interest is in scholasticism - especially saint 
          Thomas, philosophy of language - Wittgenstein, and postmodernism - Derrida and Foucault.
          <br /><br />
          It is possible to see my reviews of philosophical and other writings on my{' '}
          <a 
            href="https://www.goodreads.com/user/show/156401706-krzysztof" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors underline"
          >
            goodreads
          </a>
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  )
}

export default Philosophy