import { Link } from 'react-router-dom'

export default function Logo({ className = 'h-10', showText = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Suradas home">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1.5 shadow-lg">
        <img
          src="/logo.png"
          alt="Suradas logo with Braille"
          className="h-full w-full object-contain"
        />
      </div>
      {showText && (
        <span className="font-display hidden text-lg font-bold tracking-tight text-white sm:inline">
          Suradas
        </span>
      )}
    </Link>
  )
}
