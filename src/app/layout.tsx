import Footer from './components/layout/footer'
import Header from './components/layout/header'
//import  Navbar  from './components/layout/navbar'
import { Inter } from 'next/font/google'
 
export const metadata = {
  title: 'Fotio',
}

const inter = Inter({
  subsets: ['latin']
})
 
export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <>
    
      <html lang='en'
               className={`${inter.className} h-full scroll-smooth antialiased`}>
       
         <body className='flex h-full flex-col text-stone-700'>
              
              <Header/>
                {children}
              <Footer/>
            
        </body>
        
      </html>
    
   </>   
  )
}