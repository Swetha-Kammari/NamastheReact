import { LOGO_URL } from "../utils/constants"

const HeaderComponent=()=>{
    return (
      <div className="Header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-Items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
          </div> 
      </div>
    )
  }

  export default HeaderComponent