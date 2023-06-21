// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="nav-container">
      <li className="nav-item-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item-container">
        <Link to="/" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
