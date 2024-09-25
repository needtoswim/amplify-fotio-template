const Footer = () => {
    return (
      <footer className='z-10 py-10 text-white p-2'>
        <div className='container'>
          <p className='mt-4 text-xl text-white'>
            &copy; {new Date().getFullYear()} fotio.com.  Branch Authorisation 20th July 24
          </p>
          
        </div>
        <section>
           {/* <p className='mt-4 text-xl text-white'>
            &copy; {new Date().getFullYear()} fotio.com.
          </p> */}
          <p>
            Fotio is a platform to securely store images within encrypted galleries. By default these galleries are only accessible to the member/curator.
          </p> 
          <p>
            Easily categorise gallery content to suit your own preferences. Navigate your images in tree structure.
          </p>
          <p>
            Share your galleries with family, friends and others at your discretion.
          </p>
        </section>
      </footer>
    )
  }
  
  export default Footer
  