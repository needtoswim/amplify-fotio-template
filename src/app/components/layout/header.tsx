import Link from 'next/link';

const Header = async ({ }) => {
  
  return (
    <>
      <div className="flex flex-row">
        <div className="flex basis-3/12">
          <Link href="/">
            <div className='text-lg font-bold text-white uppercase'>
              f o t i o . m e
            </div>
          </Link>
        </div>
        <div className="md:hidden"> 
          <button id="mobile-open-button" type="button" className="text-3xl text-white">
            &#9776;
          </button>
        </div>
        <div className="flex basis-6/12 hidden sm:block">
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
    </>  
  );
}; 

export default Header