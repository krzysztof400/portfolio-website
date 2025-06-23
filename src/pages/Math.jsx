import { Link } from 'react-router-dom'

function Math() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <p className="text-secondary text-lg leading-relaxed mb-8">
          I have always liked math. I have chosen computer science degree purely because of amount of math it required. 
          This is reason why I have chosen specifically INA on PWr - it has computer science curriculum with a solid 
          background in mathematics. My favourite math area is logic, set theory and philosophy of mathematics.
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

export default Math