import Link from 'next/link';
import '../ui/globals.css'
const Header = async ({ }) => {
  
  return (
    <>
      <section>
      <div className="flex flex-row p-6">
        <div className="flex basis-3/12">
          <Link href="/">
            <div className='text-lg font-bold text-white uppercase px-4'>
              f o t i o . m e . 4
            </div>
          </Link>
        </div>
        <div className="md:hidden"> 
            <button id="hamburger-button" type="button" className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
              {/* &#9776; */}
              <div
                className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"
            ></div>
          </button>
        </div>
        <div className="flex basis-6/12 hidden md:block">
          <Link
              href='galleries'
              className='text-xl text-white mr-4 hover:text-white hover:text-2xl rounded' 
            >
              Galleries
          </Link>
      
          <Link
              href='dashboard'
              className='text-xl text-white mr-4 hover:text-white hover:text-2xl rounded'
            >
              Dashboard
          </Link>
     
          <Link
              href='introduction'
              className='text-xl text-white mr-4 hover:text-white hover:text-2xl rounded'
            >
              Introduction
          </Link>
        </div>
        <div className="flex basis-3/12">
          <button type="button" className="hidden sm:block text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-lg px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
        </div>      
      </div>
      </section>
      <section id="mobile-menu" className="top-68 justify-center absolute hidden w-full origin-top animate-open-menu flex-col bg-block text-5xl">
      <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a href="galleries" className="w-full py-6 text-center hover:opacity-90"
            >Galleries</a
          >
          <a href="dashboard" className="w-full py-6 text-center hover:opacity-90"
            >Dashboard</a
          >
          <a
            href="introduction"
            className="w-full py-6 text-center hover:opacity-90"
            >Introduction</a
          >
          <a href="#footer" className="w-full py-6 text-center hover:opacity-90"
            >Legal</a
          >
        </nav>

      </section>
        
    </>  
  );
}; 

export default Header