'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="font-raleway fixed top-0 left-0 w-full bg-gray-50 shadow z-50 py-1 px-8">
      <div className="flex items-center justify-between px-8 py-1">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/logo-wordle.svg"
            alt="Logo Wordle of Dreams"
            className="w-18 h-auto cursor-pointer"
          />
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/sobre"
            className="text-xl text-gray-700 hover:text-gray-500 font-medium px-3 py-4"
          >
            Sobre
          </Link>

          <div className="relative group">
            <button
              className="text-xl text-gray-700 hover:text-gray-500 font-medium px-3 py-1 rounded transition-colors focus:outline-none"
            >
              Modos de Jogo
              <svg
                className="inline ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
              <Link href="/classicMode" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Clássico
              </Link>
              <Link href="/emojiMode" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Emoji
              </Link>
              <Link href="/descriptionMode" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Descrição
              </Link>
              <Link href="/game/imagem" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Imagem
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          ${open ? 'block' : 'hidden'}
          md:hidden
          absolute top-full left-0 w-full
          bg-gray-50 border-t border-gray-200
          z-50
        `}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <Link
              href="/sobre"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-gray-500 font-medium"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/classicMode"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-gray-500 font-medium"
            >
              Clássico
            </Link>
          </li>
          <li>
            <Link
              href="/emojiMode"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-gray-500 font-medium"
            >
              Emoji
            </Link>
          </li>
          <li>
            <Link
              href="/descriptionMode"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-gray-500 font-medium"
            >
              Descrição
            </Link>
          </li>
          <li>
            <Link
              href="/game/imagem"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-gray-500 font-medium"
            >
              Imagem
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
