

import { Link, useLocation } from "react-router-dom"
export default function Navbar() {
 const location =  useLocation()
 
  return (
    <nav >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 "> 
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center items-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

 
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <div className="flex flex-shrink-0 items-center">
              <Link to="/"><span className='text-3xl text-white cursor-pointer  p-3 rounded-md'><img src="https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg" alt="" /></span></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/movie" className={` rounded-md  px-3 py-2  font-medium  hover:bg-gray-700 hover:text-white text-[1.3rem] ${location.pathname == "/movie" ? "text-orange-300 bg-gray-700" : "text-white"}`} aria-current="page">Movies</Link>
                <Link to="/tv" className={`rounded-md px-3 py-2  font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-[1.3rem] ${location.pathname == "/tv" ? "text-orange-300 bg-gray-700" : "text-white"}`}>Tv</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link to="/movie" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Movies</Link>
          <Link to="/tv" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Tv</Link>

        </div>
      </div>
    </nav>

  )
}
