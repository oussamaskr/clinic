import React ,{useState , useRef , useEffect} from 'react'
import "../Navbar/nav.css"
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faEnvelope,faLocationPin,faPhone,faXmark } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  
  const burgeref = useRef(null)
  const [ismenuopen, setIsmenuopen] = useState(false)
  const [isscrolled, setisscrolled] = useState(false)
  const handleScroll = () => {
    
    if (window.scrollY  > 150 && window.innerWidth > 600) {
      setisscrolled(true)
      } else {
        setisscrolled(false)
        }
        }


        useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);
      const handleScroll01 = () => {

      if (window.scrollY  > 150 && window.innerWidth < 600) {

setIsmenuopen(false)
          }
        
  
        }
          useEffect(() => {
          window.addEventListener('scroll', handleScroll01)
  
          return () => {
            window.removeEventListener('scroll', handleScroll01);
          };
  
        }, []);


        const handleClickOutside = (event) => {
          if (burgeref.current && !burgeref.current.contains(event.target)) {
            setIsmenuopen(false); // Close dropdown if clicked outside
          }
        };
      
        useEffect(() => {
          document.addEventListener('click', handleClickOutside);
          return () => {
            document.removeEventListener('click', handleClickOutside);
          };
        }, [ismenuopen]);

        useEffect(() => {
          if (ismenuopen) {
              document.body.style.overflow = 'scroll'; 
            // Prevent scrolling when menu is open
          }
      
          return () => {
              document.body.style.overflow = 'auto'; // Ensure scrolling is restored on cleanup
          };
      }, [ismenuopen]);
      
  return (
    <>
      <header>
        <div className='header-info-container'>
            <p><FontAwesomeIcon icon={faPhone }></FontAwesomeIcon> +213 0775 51 74 55</p>
            <p><FontAwesomeIcon icon={faEnvelope }></FontAwesomeIcon> info@mywebsite.com</p>
            <p><FontAwesomeIcon icon={faLocationPin }></FontAwesomeIcon> +213 0775 51 74 55</p>
            <p>3 street amir abd el Kader</p>


        </div>

        <nav className={`nav-bar ${isscrolled ? "sticky" : ""}`}> 
        <div className='logo_page'>
            <h2>Medi<span>C</span>enter</h2>
          </div>

          <ul className='nav-liste'>
            <li><NavLink className="lintag_navbar" to={"/"}>Home</NavLink></li>
            <li><NavLink className="lintag_navbar" to={"/About"}>About</NavLink></li>
            <li><NavLink className="lintag_navbar" to={"/Services"}>Services</NavLink></li>
            <li><NavLink className="lintag_navbar" to={"/Blog"}>Blog</NavLink></li>
            <li><NavLink className="lintag_navbar" to={"/Contact"}>Contact</NavLink></li>

          </ul>


                  <div className="appointment-book">
                <button className="appointment-btn">Appointment</button>
                </div>

                 <div className='burger-icon' > 

                 <FontAwesomeIcon 
   className='faburger' 
   icon={ ismenuopen ? faXmark : faBars } 
   onClick={(e) => {
      e.stopPropagation(); // Prevent event from bubbling up
      setIsmenuopen(!ismenuopen);
   }}
/>

                </div>

                <div className={`burger_menu ${ismenuopen ? "show" : "" }`} ref={burgeref}>
                
                  <ul className='burger_list'>
                  <div className='logo_page'>
            <h2>Medi<span>C</span>enter</h2>
          </div>
                    <li><NavLink className="lintag_navbar" to={"/"} onClick={()=>{setIsmenuopen(!ismenuopen); window.scrollTo(0,0)}}>Home</NavLink></li>
                    <li><NavLink className="lintag_navbar" to={"/About"} onClick={()=>{setIsmenuopen(!ismenuopen) ; window.scrollTo(0,0)}}>About</NavLink></li>
                    <li><NavLink className="lintag_navbar" to={"/Services"} onClick={()=>{setIsmenuopen(!ismenuopen) ; window.scrollTo(0,0)}}>Services</NavLink></li>
                      <li><NavLink className="lintag_navbar" to={"/Blog"} onClick={()=>{setIsmenuopen(!ismenuopen) ; window.scrollTo(0,0)}}>Blog</NavLink></li>
                      <li><NavLink className="lintag_navbar" to={"/Contact"} onClick={()=>{setIsmenuopen(!ismenuopen) ; window.scrollTo(0,0)}}>Contact</NavLink></li>
                     <li className="appointment-book-li"> <div className="appointment-book">
                <button className="appointment-btn show">Appointment</button>
                </div>
                </li>
                  </ul>
                  <div className='header-info-container'>
                  <p><FontAwesomeIcon icon={faPhone }></FontAwesomeIcon> +213 0775 51 74 55</p>
            <p><FontAwesomeIcon icon={faEnvelope }></FontAwesomeIcon> info@mywebsite.com</p>
            <p><FontAwesomeIcon icon={faLocationPin }></FontAwesomeIcon> +213 0775 51 74 55</p>
            <p>3 street amir abd el Kader</p>
                  </div>

                </div>
        </nav>
       
      </header>
    </>
  )
}
