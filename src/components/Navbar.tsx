import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Utensils, ShoppingBag, User } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8" />
            <span className="text-xl font-bold">DeliverYas</span>
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<Home />} text="Home" />
            <NavLink to="/restaurants" icon={<Utensils />} text="Restaurants" />
            <NavLink to="/orders" icon={<ShoppingBag />} text="Orders" />
            <NavLink to="/profile" icon={<User />} text="Profile" />
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center space-x-1 hover:text-indigo-200 transition duration-150 ease-in-out">
    {icon}
    <span>{text}</span>
  </Link>
)

export default Navbar