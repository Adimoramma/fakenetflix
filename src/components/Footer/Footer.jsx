import React from 'react'
import './Footer.css'
import facebookIcon from '../../assets/facebook_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import youtubeIcon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons'>
     <img src={facebookIcon} alt="facebook"  />
     <img src={twitterIcon} alt="instagram" />
     <img src={instagramIcon} alt="twitter"  />
     <img src={youtubeIcon} alt="youtube" />
       </div>
     <ul>
        <li><Link className='footer-link' to="/audio-description">Audio Description</Link></li>
        <li><Link className='footer-link' to="/help-center">Help Center</Link></li>
        <li><Link className='footer-link' to="/gift-cards">Gift Cards</Link></li>
        <li><Link className='footer-link'to="/media-center">Media Center</Link></li>
        <li><Link className='footer-link' to="/investor-relations">Investor Relations</Link></li>
        <li><Link className='footer-link' to="/jobs">Jobs</Link></li>
        <li><Link  className='footer-link'to="/terms-of-use">Terms of Use</Link></li>
        <li><Link className='footer-link'to="/privacy">Privacy</Link></li>
        <li><Link className='footer-link' to="/legal-notices">Legal Notices</Link></li>
        <li><Link className='footer-link' to="/cookie-preferences">Cookie Preferences</Link></li>
        <li><Link className='footer-link'to="/corporate-information">Corporate Information</Link></li>
        <li><Link className='footer-link' to="/contact-us">Contact Us</Link></li>
      </ul>
      <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

  
export default Footer
