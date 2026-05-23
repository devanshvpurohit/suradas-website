import { Link } from 'react-router-dom'

export default function Logo({ className = 'h-10', showText = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Suradas home">
      <img
        src="/logo.png"
        alt="Suradas logo with Braille"
        className={`${className} w-auto object-contain`}
      />
      {showText && (
        <span className="font-display hidden text-lg font-bold tracking-tight text-white sm:inline">
          Suradas
        </span>
      )}
    </Link>
  )
}
