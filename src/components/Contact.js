export const Contact = () =>{
  return(
    <>
       <div className="container" id="contact">
        <div className="row justify-content-center" style={{marginTop:15}}>
          <div className="col text-center">
            <h1>Contact Me</h1>
            <br/>
            <p>Feel free to reach out to me through this contact form.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-9 col-xs-12 text-center">
            <form action="https://api.backendform.com/sendform/808jalen@gmail.com" method="post">
              <input className="contact-text" placeholder="Your Name" type="text" name="name" />
              <br/>
              <input className="contact-text" placeholder="Your Email" type="email" name="email"/>
              <br/>
              <input className="contact-text" placeholder="Your Message" type="text" name="message" style={{height:150, paddingBottom:115}}/>
              <br/>
              <button className="btn btn-primary" type="submit" style={{marginTop:35}}> Submit </button>
              <input hidden type="text" name="from" value="Lifte"></input>
              <input hidden type="text" name="redirect" value = "http://localhost:3000/"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}