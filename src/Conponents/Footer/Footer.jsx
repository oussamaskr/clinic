import React from 'react'
import "../Footer/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router'
function Footer() {
  return (
    <>
      <footer>

            <div className='left_sidefooter'>
            <div className='logo_page'>
            <h2 style={{color:"#f5f5f5"}}>Medi<span>C</span>enter</h2>

          </div>
        <p>  Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
        <div className='social_media_footer'>
            <FontAwesomeIcon icon={faFacebook} className='fasocialmedia'/>
            <FontAwesomeIcon icon={faInstagram} className='fasocialmedia'/>
            <FontAwesomeIcon icon={faXTwitter} className='fasocialmedia'/>
            

        </div>


            </div>

            <div className='mid_sidefooter'>
            <h2>Quick Links</h2>
                    <ul className='quick_links'>
                        <li><NavLink href='#'>About Us</NavLink></li>
                        <li><NavLink href='#'>Contact Us</NavLink></li>
                        <li><NavLink href='#'>FAQs</NavLink></li>
                        <li><NavLink href='#'>Careers</NavLink></li>
                        <li><NavLink href='#'>Blog</NavLink></li>

                    </ul>
                </div>


                <div className='right_sidefooter'>
                    <h2>Opening Hours</h2>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: [info@medicenter.com]</p>



                </div>

      </footer>
    </>
  )
}

export default Footer
