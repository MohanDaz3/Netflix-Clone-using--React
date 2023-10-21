import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='social-media-logos'>
      <ul>
          <li>
            <i className='fab fa-facebook'></i>
          </li>
          <li>
            <i className='fab fa-instagram'></i>
          </li>
          <li>
            <i className='fab fa-twitter'></i>
          </li>
          <li>
            <i className='fab fa-youtube'></i>
          </li>
        </ul>
      </div>
      <div className='footer-columns'>
        <ul className='column'>
          <li>Audio Description</li>
          <li>Investors Relations</li>
          <li>Legal Notice</li>
        </ul>
        <ul className='column'>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>Jobs</li>
        </ul>
        <ul className='column'>
          <li>Account</li>
          <li>Redeem Gift Cards</li>
          <li>Netflix Originals</li>
        </ul>
        <ul className='column'>
          <li>Media Center</li>
          <li>Buy Gift Cards</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
      <button className='service-code-button'>Service Code</button>
      <span className='copyright'>© {new Date().getFullYear()} Netflix</span>
    </div>
  )
}

export default Footer
