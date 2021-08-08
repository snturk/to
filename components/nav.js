import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ActiveLink from './activeLink'


const Nav = () => (
    <nav className="bg-gray-700 h-20 flex flex-row content-start items-center">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 mr-7 flex items-center">
               <div className="text-gray-100 text-2xl px-1">Muratcan Şentürk</div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <ActiveLink href="/">
                  <a>Overview</a>
                </ActiveLink>
                <ActiveLink href="/projects">
                  <a>Projects</a>
                </ActiveLink>
                <ActiveLink href="/contact">
                  <a>Contact</a>
                </ActiveLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ActiveLink href="/">
            <a>Overview</a>
          </ActiveLink>

          <ActiveLink href="/cv">
            <a>CV</a>
          </ActiveLink>

          <ActiveLink href="/projects">
            <a>Projects</a>
          </ActiveLink>
        </div>
      </div>
    </nav>
  )

  export default Nav
  