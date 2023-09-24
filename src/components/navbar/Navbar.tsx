import { Link } from "react-router-dom"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <a href={window.location.href} className="logo">
        <img src="logo.png" alt="" style={{ display: 'block', width: '32px', height: '32px' }}/>
        <span>Dash</span>
      </a>

      <div className="icons">
        
        <Link to={'/users/1'} className="user">
          <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          <span>John</span>
        </Link>
        

      </div>

      
    </div>
  )
}

export default Navbar
