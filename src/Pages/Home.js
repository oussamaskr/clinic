import React , {useEffect} from 'react'
import "./Style/home.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronUp } from '@fortawesome/free-solid-svg-icons';
function Home() {
  function handlescrollarrow ()
  {
    const arrow = document.querySelector('.arrwoup');

    if(window.scrollY > 150 && window.innerWidth < 600)
    {
      arrow.style.display = 'block';
    }
    else
    {
      arrow.style.display = 'none';
      }
  }

  useEffect(() => {
    
    window.addEventListener("scroll",handlescrollarrow)
    return () => {
      window.removeEventListener("scroll", handlescrollarrow)
    }
  }, [])
  

  return (
    <>
    <div className='arrwoup' onClick={()=>{window.scrollTo({
      top:0,
      behavior: 'smooth',
      
    })}}>
      <FontAwesomeIcon icon={faChevronUp} className='fa-arow' />
    </div>
    <div className="home_banner"> 
      <Swiper className='home_swiper'
      modules={[Navigation]}
      navigation={true} 
      loop={true} 






          >
        <SwiperSlide className="home_swiper_slide1">
            <div className='swiper_slide1'>
              <h1>Your Health, Our Priority</h1>
              <p>"At <span>MediCenter</span>, we are committed to delivering top-quality healthcare in a comfortable and welcoming environment. Let us take care of you."</p>

            </div>
        </SwiperSlide>


        <SwiperSlide className="home_swiper_slide2">
        <div className='swiper_slide2'>
          <h1>Meet Our Expert Doctors</h1>
          <p> "Our medical team consists of specialists and general practitioners dedicated to offer the best healthcare services. From routine checkups to specialized treatments."</p>
          </div>
        </SwiperSlide>
       

        <SwiperSlide className="home_swiper_slide3">
            <div className='swiper_slide3'>
            <h1>We’re Here for You. Schedule Your Visit!</h1>
           <button className='banner-btn-apointment'>
            <NavLink >Book an Appointment</NavLink>
           </button>
            </div>
        </SwiperSlide>
        
      </Swiper>
       
          </div>


    <div className='aboutus_home_page'>

        <div className='about_left_sec'>
        <img src={require("../Assets/2148980721.jpg")} />

        </div>
        <div className='about_right_sec'>
      <h2>We Are <span>MediCenter</span> A medical clinic</h2>
      <p>At MediCenter, we are committed to delivering top-quality healthcare in a comfortable and
      welcoming environment. Let us take care of you.
      Our medical team consists of specialists and general practitioners dedicated to offer the best healthcare services
      From routine checkups to specialized treatments.</p>
     

              <button className="learn-more">
          <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
</div>

    </div>







    <div className='whyus_homepage'>
        <div className='title_whyus'>
          <h2>Why Choose Us?</h2>
          <h3>We offer for you</h3>
        </div>
        <div className='whyus_cards'>
          <div className='whyus_card1'>
              <img src={require('../Assets/Icons/medical-team.png')} width="64px" />
          <h3>Experienced Doctors</h3>
          <p>Our doctors are highly experienced and skilled in their respective fields. They are dedicated to
          providing the best possible care to our patients.</p>
          </div>



          <div className='whyus_card1'>
              <img src={require('../Assets/Icons/health-report.png')} width="64px" />
          <h3>Certified services</h3>
          <p>Our doctors are highly experienced and skilled in their respective fields. They are dedicated to
          providing the best possible care to our patients.</p>
          </div>


          <div className='whyus_card1'>
              <img src={require('../Assets/Icons/mri.png')} width="64px" />
          <h3>Advanced equipment</h3>
          <p>Our doctors are highly experienced and skilled in their respective fields. They are dedicated to
          providing the best possible care to our patients.</p>
          </div>



          <div className='whyus_card1'>
              <img src={require('../Assets/Icons/healthy.png')} width="64px" />
          <h3>Emergency Care</h3>
          <p>Our doctors are highly experienced and skilled in their respective fields. They are dedicated to
          providing the best possible care to our patients.</p>
          </div>


        </div>
    </div>



      <div className='ourservices_homepage'>
        <div className='title_services'>
          <h2>Our Services</h2>
          <h3>Our services are designed to meet the unique needs of each patient</h3>
        </div>

          <div className='our_services'>
                      <div className='service_card'>
                                  <div className='serv_image_title'>
                                    <img src={require('../Assets/Icons/gastroenterology.png')} width="64px" />
                                    <h3>Gastroenterology</h3>
                                  </div>
                                  <p>Our gastroenterology services include diagnosis and treatment of digestive disorders, such as acid
                                  reflux, and inflammatory bowel disease.</p>
                      </div>

                        <div className='service_card'>
                        <div className='serv_image_title'>
                                    <img src={require('../Assets/Icons/heart (1).png')} width="64px" />
                                    <h3>Cardiology</h3>
                                  </div>
                                  <p>Our cardiology services include diagnosis and treatment of heart conditions, such as coronary artery
                                  disease, heart failure, and arrhythmias.</p>
                        </div>

                        <div className='service_card'>
                        <div className='serv_image_title'>
                                    <img src={require('../Assets/Icons/science-lab-equipment.png')} width="64px" />
                                    <h3>Medical Lab</h3>
                                  </div>
                                  <p>Our medical lab services include a wide range of diagnostic tests, such as blood work
                                  and imaging studies.</p>
                        </div>

                        <div className='service_card'>
                        <div className='serv_image_title'>
                                    <img src={require('../Assets/Icons/surgery.png')} width="64px" />
                                    <h3>Surgery</h3>
                                  </div>
                                  <p>Our surgery services include a wide range of surgical procedures, such as general surgery,
                                  orthopedic surgery, and neurosurgery.</p>
                        </div>
                       
                        <div className='service_card'>
                        <div className='serv_image_title'>
                                    <img src={require('../Assets/Icons/tooth.png')} width="64px" />
                                    <h3>Dental Care</h3>
                                  </div>
                                  <p>Our dental care services include routine cleanings, fillings, crowns, and
                                  extractions.</p>
                        </div>

                        <div className='service_card'>
                        <div className='serv_image_title'>
                                    <img src={require('../Assets/Icons/shield.png')} width="64px" />
                                    <h3>General Medical Services</h3>

                                  </div>
                                  <p>We provide general medical services to help you stay healthy. Our doctors offer routine checkups, preventive care to ensure your well-being.</p>
                        </div>
          </div>
          <button className='btn_service'>Contact Us</button>
      </div>







      <div className='doctors_sec_homepage'>
      <h2>Meet Our Doctors</h2>
      <h3></h3>

          <div className='doctor_cards'>
              <div className='doc_card'>
                  <img src={require("../Assets/OurDoctors/2188.jpg")  } />
                  <div className='doc_infos'>
                  <h3 style={{color:"#FF6B6B"}}>Dr. John Doe</h3>
                  <p>Orthopedic Surgeon</p>
                  <p>Years of Experience: 10</p>

                  <button className='btn_doctor'>Book an Appointment</button>
                </div>
              </div>


              <div className='doc_card'>
                  <img src={require("../Assets/OurDoctors/29791.jpg")  } />
  <div className='doc_infos'>
                  <h3 style={{color:"#FF6B6B"}}>Dr. John Doe</h3>
                  <p>Orthopedic Surgeon</p>
                  <p>Years of Experience: 10</p>
                    
                  <button className='btn_doctor'>Book an Appointment</button>
                </div>
              </div>

              <div className='doc_card'>
                  <img src={require("../Assets/OurDoctors/2151442173.jpg")  } />
                  <div className='doc_infos'>
                  <h3 style={{color:"#FF6B6B"}}>Dr. John Doe</h3>
                  <p>Orthopedic Surgeon</p>
                  <p>Years of Experience: 10</p>
                    
                  <button className='btn_doctor'>Book an Appointment</button>
                </div>
              </div>

              <div className='doc_card'>
                  <img src={require("../Assets/OurDoctors/2149112510.jpg")  } />
                  <div className='doc_infos'>
                  <h3 style={{color:"#FF6B6B"}}>Dr. John Doe</h3>
                  <p>Orthopedic Surgeon</p>
                  <p>Years of Experience: 10</p>
                    
                  <button className='btn_doctor'>Book an Appointment</button>
                </div>

              </div>
              
          </div>
      
      </div>





      <div className='our_deprartments'>
      <h2>Our Departments</h2>
      <h3>Explore Our Range of Medical Services to Meet Your Health Needs.</h3>
      <div className='departments'>
      <div className='departments_large'>

      <div className='department_card'>
          <div className='dep_image'>
            <img src={require("../Assets/departments/eye care.jpg")} />
          </div>
          <div className='dep_info'>
            <h3>Eye Care</h3>
            <p>Our eye care department is equipped with the latest technology to provide you with the best care for your eyes.</p>

          </div>
          <button>Learn More</button>
      </div>


      <div className='department_card'>
          <div className='dep_image'>
            <img src={require("../Assets/departments/dental care.jpg")} />
          </div>
          <div className='dep_info'>
            <h3>Dental Care</h3>
         
         <p>Our dental care department is staffed by experienced dentists who provide a wide rang of dental services.</p>

          </div>
          <button>Learn More</button>
      </div>


      <div className='department_card'>
          <div className='dep_image'>
            <img src={require("../Assets/departments/dermatology.jpg")} />
          </div>
          <div className='dep_info'>
            <h3>Dermatology</h3>
            <p>Our dermatology department is equipped with the latest technology to provide you with the best possible care for your skin.</p>
         


          </div>
          <button>Learn More</button>
      </div>


      <div className='department_card'>
          <div className='dep_image'>
            <img src={require("../Assets/departments/gynecologue.jpg")} />
          </div>
          <div className='dep_info'>
            <h3>Gynecologue</h3>
            <p>Our gynecology department is staffed by experienced gynecologists who provide a wide range of gynecological services.</p>

         
         


          </div>
          <button>Learn More</button>
      </div>

      <div className='department_card'>
          <div className='dep_image'>
            <img src={require("../Assets/departments/operation.jpg")} />
          </div>
          <div className='dep_info'>
            <h3>Surgery </h3>
            <p>Our surgery department is equipped with the latest technology to provide you with the best possible care for your surgical needs.</p>
           
            </div>
          <button>Learn More</button>
      </div>


      <div className='department_card'>
          <div className='dep_image'>
            <img src={require("../Assets/departments/orthopedics.jpg")} />
          </div>
          <div className='dep_info'>
            <h3>Orthopedics</h3>
            <p>Our orthopedics department is staffed by experienced orthopedic specialists who provid a wide range of orthopedic services.</p>
           
            </div>
          <button>Learn More</button>
      </div>
    </div>









      <div className='departments_mobile'>
    <Swiper 
    spaceBetween={45}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    loop
    breakpoints={{
        601: { slidesPerView: 2, spaceBetween: 40 },
        763: { slidesPerView: 2, spaceBetween: 40 }, // Tablets
         
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1300: { slidesPerView: 3, spaceBetween: 30 }, // Laptops
         // Laptops
       
      }}

    className="swiper_mob_dept"
    >
                <SwiperSlide className='swiperslide_mob_dept'>

                              <div className='department_card'>
                        <div className='dep_image'>
                          <img src={require("../Assets/departments/eye care.jpg")} />
                        </div>
                        <div className='dep_info'>
                          <h3>Eye Care</h3>
                          <p>Our eye care department is equipped with the latest technology to provide you with the best care for your eyes.</p>

                        </div>
                        <button>Learn More</button>
                    </div>

                </SwiperSlide>
    
    
                <SwiperSlide className='swiperslide_mob_dept'>

                <div className='department_card'>
          <div className='dep_image'>
            <img src={require("../Assets/departments/dental care.jpg")} />
          </div>
          <div className='dep_info'>
            <h3>Dental Care</h3>
         
         <p>Our dental care department is staffed by experienced dentists who provide a wide rang of dental services.</p>

          </div>
          <button>Learn More</button>
      </div>
                </SwiperSlide>
    
    
                      <SwiperSlide className='swiperslide_mob_dept'>
                      <div className='department_card'>
                <div className='dep_image'>
                  <img src={require("../Assets/departments/dermatology.jpg")} />
                </div>
                <div className='dep_info'>
                  <h3>Dermatology</h3>
                  <p>Our dermatology department is equipped with the latest technology to provide you with the best possible care for your skin.</p>
              


                </div>
                <button>Learn More</button>
            </div>

             
                </SwiperSlide>
    
                      <SwiperSlide className='swiperslide_mob_dept'>
                      <div className='department_card'>
                <div className='dep_image'>
                  <img src={require("../Assets/departments/gynecologue.jpg")} />
                </div>
                <div className='dep_info'>
                  <h3>Gynecologue</h3>
                  <p>Our gynecology department is staffed by experienced gynecologists who provide a wide range of gynecological services.</p>

              
              


                </div>
                <button>Learn More</button>
            </div>
                  
                    </SwiperSlide>



              <SwiperSlide className='swiperslide_mob_dept'>

                    <div className='department_card'>
                <div className='dep_image'>
                  <img src={require("../Assets/departments/gynecologue.jpg")} />
                </div>
                <div className='dep_info'>
                  <h3>Gynecologue</h3>
                  <p>Our gynecology department is staffed by experienced gynecologists who provide a wide range of gynecological services.</p>

              
              


                </div>
                <button>Learn More</button>
            </div>
              </SwiperSlide>

                  <SwiperSlide className='swiperslide_mob_dept'>
                  <div className='department_card'>
              <div className='dep_image'>
                <img src={require("../Assets/departments/operation.jpg")} />
              </div>
              <div className='dep_info'>
                <h3>Surgery </h3>
                <p>Our surgery department is equipped with the latest technology to provide you with the best possible care for your surgical needs.</p>
              
                </div>
              <button>Learn More</button>
          </div>


              </SwiperSlide>
    
    </Swiper>
      </div>











    </div>
      </div>











      <div className='blogs_sec'>
         <h2>Latest from Our Blog</h2>
    <h3>Stay Informed with Expert Health Tips, Medical Insights, and Wellness Advice from Our Specialists.</h3>
        <div className='blogs_cards'>
         <div className='blog_cards_large_screen'>
         <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/2148854064.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>

            <h3>How to Choose the Right Doctor</h3>
            <p>Choosing the right doctor can be a daunting task, especially if you're new to
            a particular area. Here are some tips to help you make a decision.</p>
            </div>
            <button className="cta">
            <span>Read More</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>

         </div>

         <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/2176.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
            
            <h3>What to Expect During a Routine Checkup</h3>
            <p>Regular check-ups are an essential part of maintaining good health. Here's what you
            can expect during a routine checkup.</p>

              </div>
              <button className="cta">
              <span>Read more</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>

         </div>

         <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/54.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
              <h3>How to Stay Healthy During the Cold and Flu Season</h3>
              <p>Staying healthy during the cold and flu season can be challenging, but there ar
              e several steps you can take to reduce your risk of getting sick.</p>
              </div>

            

                      <button className="cta">
          <span>Read more</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>

         </div>

         <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/853.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
              <h3>What to Do If You Have a Fever</h3>
              <p>Having a fever can be a sign of an underlying infection or illness. Here's
              what you can do if you have a fever.</p>

            </div>
            <button className="cta">
          <span>Read more</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
         </div>

         <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/885.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
            <h3>How to Stay Healthy During the Summer Months</h3>
            <p>Staying healthy during the summer can be challenging, but there are several steps
            you can take to reduce the risk of getting sick.</p>
            </div>
            <button className="cta">
            <span>Read more</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
         </div>

         <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/89.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
            <div className='blog_info'>
              <h3>How to Stay Healthy During the Winter Months</h3>
              <p>Staying healthy during the winter can be challenging, but there are several steps
              you can take to reduce the risk of getting sick.</p>
              
            </div>
            <button className="cta">
            <span>Read more</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>

         </div>
                
        </div>

        </div>
        <div className='blog_cards_mobile'>

          <Swiper  className='mob_swip_blogs'

            modules={[Pagination]}
            pagination={true}
            spaceBetween={30}
            loop

            breakpoints={{
        601: { slidesPerView: 2, spaceBetween: 40 },
        763: { slidesPerView: 2, spaceBetween: 40 }, // Tablets
         
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1300: { slidesPerView: 3, spaceBetween: 30 }, // Laptops
         // Laptops
       
      }}

           >

            <SwiperSlide className='mob_blog_card'>
            <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/2148854064.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>

            <h3>How to Choose the Right Doctor</h3>
            <p>Choosing the right doctor can be a daunting task, especially if you're new to
            a particular area. Here are some tips to help you make a decision.</p>
            </div>
            <button className="cta">
            <span>Read More</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>

         </div>
            </SwiperSlide>


            <SwiperSlide className='mob_blog_card'>
            <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/2176.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
            
            <h3>What to Expect During a Routine Checkup</h3>
            <p>Regular check-ups are an essential part of maintaining good health. Here's what you
            can expect during a routine checkup.</p>

              </div>
              <button className="cta">
              <span>Read more</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>

         </div>

            </SwiperSlide>


            <SwiperSlide className='mob_blog_card'>
            <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/54.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
              <h3>How to Stay Healthy During the Cold and Flu Season</h3>
              <p>Staying healthy during the cold and flu season can be challenging, but there ar
              e several steps you can take to reduce your risk of getting sick.</p>
              </div>

            

                      <button className="cta">
          <span>Read more</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>

         </div>
            </SwiperSlide>

            
            <SwiperSlide className='mob_blog_card'>
   <div className='blog_card'>
          <div className='blog_image'>
                <img src={require("../Assets/Blogs/89.jpg")}></img>
            </div>
            <div className='blog_date'>
              <p>Posted on: 2020-02-20</p>
            </div>
            <div className='blog_info'>
            <div className='blog_info'>
              <h3>How to Stay Healthy During the Winter Months</h3>
              <p>Staying healthy during the winter can be challenging, but there are several steps
              you can take to reduce the risk of getting sick.</p>
              
            </div>
            <button className="cta">
            <span>Read more</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>

         </div>
                
        </div>
            </SwiperSlide>

          </Swiper>
        

        </div>
        </div>
      </div>

   

    </>
  )
}

export default Home
