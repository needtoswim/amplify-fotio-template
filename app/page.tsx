//import Image from 'next/image'
import Link from 'next/link';
import './globals.css'
import classes from "./page.module.css"
import Backdrop from './ui/backdrop/Backdrop'
import ImageSlideshow from './ui/slideshow/image-slideshow'
import { lusitana } from '@/app/ui/fonts';

// var currUser = require('../../utils/currentUser.mjs') 
// var authenticated = require ('../../utils/isAuthenticated')

//var getToken = require('../../utils/getAccessToken.mjs')
  
export default function Home() {

  //console.log(`Returned Token ${getToken.accessToken}`);
  
  // console.log(authenticated.authCheck());
  // if (authenticated.myVariable == 'User is logged in!') {
  //   console.log(currUser.userDetails());
  //   console.log(currUser.myVariable);
  // } else {
  //   console.log('User is not logged in');
  //   }
  
  
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        {/* <div>
          <div className={classes.hero}>
            <h1>Private Galleries</h1>
             {/* <p>Haven - safe and protected place</p> */} 
          {/* </div> */}
          {/* <div className={classes.cta}>
            <Link href="introduction">Introduction</Link>
            <Link href="galleries">Galleries</Link>
          </div>
        </div> */}
      </header>
      <main>
      
        <section className='h-full'>
          <Backdrop/>
          <div
          aria-hidden='true'
          className='fixed inset-0 -z-10 bg-black/70 bg-blend-multiply'
          />
        </section> 
        
     </main> 
    </>
  )
}