import Link from 'next/link';

const Footer = () => {
    return (
      <footer className='z-10 py-10 text-white p-2 '>
        {/* <div className='container'>
          <p className='mt-4 text-xl text-white'>
            &copy; {new Date().getFullYear()} fotio.com.  Branch Authorisation 20th July 24
          </p>
          
        </div> */}
        <section>
           <p className="text-xl text-white">
            &copy; {new Date().getFullYear()} fotio.com.
          </p>

          <div className="flex flex-row p-6 gap-x-10 ">
            <div className="flex box-border h-50 w-48 p-2 border-2 border-slate-50 border-spacing-2 basis:1/4">
              <p className="text-wrap text-lg">
                Fotio is a platform to securely store images within galleries.
                See documentation for recommendatons on galleries and image types.
              </p> 
            </div> 

            <div className="box-border h-50 w-64 p-2 border-2 border-slate-50 border-spacing-2 basis:1/4">
              <p className="text-wrap text-lg">
                Easily categorise and tag content to suit your preferences. Think of categories as the branches and leaves of a tree of folders. You can change this structure any time.
              </p>
            </div>
            <div className="box-border h-50 w-64 p-2 border-2 border-slate-50 border-spacing-2 basis:1/4">
              <p className="text-wrap text-lg">
              Access is by invitation of the member/curator. So you share galleries with family, friends and others at your discretion. You can specify different levels of access for each guest.
              </p>
            </div>  
            <div className="box-border h-50 w-64 p-2 border-2 border-slate-50 border-spacing-2 basis:1/4">
              <p className="text-wrap text-lg">
               All images are encrypted as they are saved. Encrypting data means encoding it in such a way that it can only be restored to its original form if the person or system decoding it has the appropriate key. 
              </p>
            </div> 
          </div>  
        </section>
      </footer>
    )
  }
  
  export default Footer
  