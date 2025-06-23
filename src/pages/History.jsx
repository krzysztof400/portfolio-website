import { Link } from 'react-router-dom'

function History() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <p className="text-secondary text-lg leading-relaxed mb-8">
          I am a man - I love roman empire what can I say. I was even part of reconstruction group{' '}
          <a 
            href="https://www.legioxxirapax.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors underline"
          >
            Rapax Legion
          </a>
          <br /><br />
          I am also fascinated by France and its history - I would consider this my specialty. I also am passionate 
          about XVII century Europe.
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

export default History