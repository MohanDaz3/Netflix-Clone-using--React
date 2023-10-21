import React from 'react'
import './NavBar.css'

function navBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      
        <ul className='navlist'>
            <li>home</li>
            <li>tv shows</li>
            <li>movies</li>
            <li>news&popular</li>
            <li>my list</li>
            <li>Browse by language</li>
        </ul>
        
        <div className='icons'>
        <i className='fas fa-search'></i> {/* Search icon */}
        <i className='fas fa-bell'></i> {/* Notification icon */}
        <i className='fas fa-chevron-down'></i>

        </div>
      
    </div>
  )
}

export default navBar
