import Footer from './components/footer'
import Header from './components/header'
//import  Navbar  from './components/layout/navbar'
import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: 'fotio-4',
}


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