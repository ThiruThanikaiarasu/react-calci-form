import React from 'react';
import myImage from '../../img/thiru.jpg'

function PortfolioComponent() {
  return (
    <div className="">
      <header
        className='bg-black text-white text-center text-6xl'
      >
        <div 
          className='py-10'
        >
          <h1>Thirunavukkarasu T</h1>
          {/* <h2>STUDENT</h2> */}
        </div>
      </header>

      <section
        className='bg-slate-300 float-right w-[80%] h-screen p-7'
      >
        <div>
          <div className="section-heading text-5xl">
            <h2>Profile</h2>
          </div>

          <p
            className='text-2xl my-7'
          >
            I am a web development student who is looking forward to my first work experience. I consider myself as a responsible person and I am excited to develop this skill further in a professional setting. I believe that my skills and attitude will be an asset to any company and I am eager to learn and grow in this field.</p>

          <div className="section-heading text-5xl">
            <h2>Skills</h2>
          </div>
          <div className="skills-content">
            <ul className='py-7'>
              <li>
                <h4 className='text-2xl pl-5'>React</h4>
                <span className="bar"><span className="react"></span></span>
              </li>
              <li>
                <h4 className='text-2xl pl-5'>Java</h4>
                <span className="bar"><span className="java"></span></span>
              </li>
              <li>
                <h4 className='text-2xl pl-5'>MongoDB</h4>
                <span className="bar"><span className="mongodb"></span></span>
              </li>
              <li>
                <h4 className='text-2xl pl-5'>NodeJs</h4>
                <span className="bar"><span className="nodejs"></span></span>
              </li>
            </ul>
          </div>
          <div className="section-heading text-5xl mt-15">
            <h2>Internship</h2>
          </div>
          <p className='text-2xl pt-7'>I recently completed an internship at ConnectInfoSystem, and it was an amazing experience! I gained so much knowledge and hands-on experience in the field of information technology. I was able to work on various projects with experienced professionals, and I learned a lot about the inner workings of a successful IT company. I am very grateful for the opportunity to have interned at ConnectInfoSystem, and I would highly recommend it to anyone interested in pursuing a career in IT.</p>
        </div>
      </section>

      <aside
        className='bg-yellow-500 h-screen px-7'
      >
          <img src={myImage} alt="Passport-size-photo" 
            className='object-contain w-[17%] rounded-[50%] pt-24'
          />
           
        
        <div className="sidebar-content">
          <br />
          <div className="text-2xl font-bold pt-20">
            <h3><i className="fa fa-user" aria-hidden="true"></i>CONTACT</h3>
          </div>

          <p className='text-lg'>7845098854</p>
          <p className='text-lg'>thiru.thanikaiarasu@gmail.com</p>
          <p className='text-lg'>123,4th Anna St. Avadi, Chennai</p>
          <p className='text-lg'><a href="https://twitter.com/ThiruThan "></a></p>
        </div>

      </aside>
    </div>
  )}

  export default PortfolioComponent
