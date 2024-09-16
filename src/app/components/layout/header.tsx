import Link from 'next/link';

const Header = async ({ }) => {
  
  return (
    <nav className='z-10 flex items-center justify-between px-10 py-4 mb-5 '>
      <div className='flex items-end'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            f o t i o
          </div>
        </Link>
      </div>
      <div>
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
      <div className='flex items-center text-white'>
       
          <>
            {/* <Link
              href='sign-in'
              className='text-xl text-white mr-4 hover:text-black hover:bg-yellow-200 '
            >
              Sign In
            </Link> */}
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
          </>
        
        <div className='ml-auto'>
          
        </div>
      </div>
    </nav>
  );
};

export default Header