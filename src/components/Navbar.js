export const Navbar = () =>{
  return(
    <>
      <nav className="navbar navbar-expand-md navbar-custom">
        <div className="container">
          <a href="" className="navbar-brand" style={{fontSize:30,fontWeight:600}}>Lift</a>
          <button className="navbar-toggler" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link links">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link links">One Rep Max</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link links">Smolov</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link links">Smolov Jr.</a>
              </li>
              {/* <li className="nav-item">
                <a href="#" className="nav-link links">Portfolio</a>
              </li> */}
              <li className="nav-item">
                <a href="#" className="nav-link links">Contact</a>
              </li>
            </ul>
          </div>
        </div>   
      </nav> 
    </>
  )
}