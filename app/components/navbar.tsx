// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from "react"
// import { GrNodes } from "react-icons/gr"
// import { Amp} from "@/public/amplify.svg"


// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false)
  
//     const handleNav = () => {
//         setMenuOpen(!menuOpen)
//     }

//     return (
//         <>
//         <nav className="z-10 flex items-center justify-center px-10 py-4 mb-5">
//             <div className="flex items-center text-white"></div>
//             {/* <Link href="/">
//                 <Image
//                     src={GrNodes}
//                     alt="Logo"
//                     width="205"
//                     height="75"
//                     className="cursor-pointer"
//                     priority
//                 />
//             </Link> */}
//             <div className='sm-flex text-black'>
//                 <ul className="hidden sm-flex">
//                     <Link href="/about">
//                         <li className="ml-10 uppercase hover:border-b text-xl"> Why Us</li>
//                     </Link>
//                     <Link href="/contact">
//                         <li className="ml-10 uppercase hover:border-b text-xl"> Contact Us</li>
//                     </Link>
//                     <Link href="/services">
//                         <li className="ml-10 uppercase hover:border-b text-xl"> Services</li>
//                     </Link>
//                 </ul>
            
//             </div>
//             <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
//                {/* <AiOutLineMenu/> */}
//                 Menu
//             </div>
//             <div className={
//                 menuOpen
//                     ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ec0fe] p-10 ease-in duration-500"
//                     : "fixed left-[-100] ease-in p-10 duration-500"
//             }>
//                 <div className='flex w-full items-center justify-end'>
//                     <div onClick={handleNav} className="cursor-pointer">
//                         {/* <AiOutLineClose/> */}
//                         Home
//                     </div>
//                 </div>
//             </div>
//             <div className='flex-col py-4'>
//                 <ul className="hidden sm-flex">
//                     <Link href="/about">
//                         <li className="ml-10 uppercase hover:border-b text-xl"> Why Us</li>
//                     </Link>
//                     <Link href="/contact">
//                         <li className="ml-10 uppercase hover:border-b text-xl"> Contact Us</li>
//                     </Link>
//                     <Link href="/services">
//                         <li className="ml-10 uppercase hover:border-b text-xl"> Services</li>
//                     </Link>
//                 </ul>
//             </div>
//             </nav>
//             </>
//     )
// }    
// export default Navbar
