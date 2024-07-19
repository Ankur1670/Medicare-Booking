import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
     <section>
        <div className="container">
          <div className="flex items-center justify-between gap-[50px] lg:gap-[130] xl:gap-0 flex-col lg:flex-row">

        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
        <img src={aboutImg} alt="" />
        <div className="absolute z-20 bottom-4 w-[400px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="" />
        </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className='heading'>Proud to be one of the nation best</h2>
        <p className='text__para'>  distinctio sed nemo quod laborum tenetur vitae nostrum, alias illo assumenda veniam provident autem odio! Voluptatum nostrum reiciendis mollitia numquam optio tempore reprehenderit assumenda ex?</p>
        <p className="text__para mt-[25px]"> perspiciatis delectus soluta. Laudantium voluptate repudiandae veritatis laborum nihil, commodi corporis obcaecati eum amet corrupti vitae a consequuntur natus ratione explicabo quia labore impedit dolor voluptatum nemo aliquid accusantium autem!</p>
        <Link to='/'><button className="btn">Learn More</button></Link>
        </div>
          </div>
        </div>
      </section>  
    </>
  )
}

export default About
