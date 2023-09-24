import { Link } from "react-router-dom"
import "./menu.scss"
import { menu } from "../../data"

const Menu = () => {
  return (
    <div className="menu">
      {menu.map (item => (
        
        <Link to={item.url} className="item" key={item.id}>
        <img src={item.icon} alt="" />
        <span className="itemTitle">{item.title}</span>
        </Link>

      ))}
    </div>
  )
}

export default Menu