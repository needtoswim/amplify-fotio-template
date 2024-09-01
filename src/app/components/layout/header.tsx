import Link from 'next/link';

const Header = async ({ }) => {
  
  return (
    <nav className='z-10 flex items-center justify-between px-6 py-4 mb-5 '>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            f o t i o
          </div>
        </Link>
      </div>
      <div>
        <Link
              href='galleries'
              className='text-xl text-white mr-4 hover:text-black hover:bg-yellow-200'
            >
              Galleries
        </Link>
        <Link
              href='dashboard'
              className='text-xl text-white mr-4 hover:text-black hover:bg-yellow-200'
            >
              Dashboard
        </Link>
     </div>
      <div>
        <Link
              href='introduction'
              className='text-xl text-white mr-4 hover:text-black hover:bg-yellow-200'
            >
              Introduction
        </Link>
        
     </div>
      <div className='flex items-center text-white'>
        
         
         
        
          <>
            <Link
              href='sign-in'
              className='text-xl text-white mr-4 hover:text-black hover:bg-yellow-200 '
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-xl text-white hover:text-black hover:bg-yellow-200'
            >
              Sign Up
            </Link>
          </>
        
        <div className='ml-auto'>
          
        </div>
      </div>
    </nav>
  );
};

export default Header