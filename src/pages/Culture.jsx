import { Link } from 'react-router-dom'

function Culture() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <p className="text-secondary text-lg leading-relaxed mb-8">
          I am interested in culture in general, you can listen to my{' '}
          <a 
            href="https://radioluz.pl/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors underline"
          >
            broadcasts about culture that I make in Radio LUZ.
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

export default Culture