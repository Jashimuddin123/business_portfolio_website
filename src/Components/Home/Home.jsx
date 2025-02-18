import React from 'react';
import Banner from '../Banner/Banner';
import Testimonial from '../../Testimonial/Testimonial';
import Services from '../Services/Services';
import LetsTalk from '../SharedPage/letsTalk';
import Blog from '../Blog/Blog';



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div>
                <h1 className='text-4xl text-center'>Our Services</h1>
                <Services></Services>
             
            </div>
       <Blog></Blog>
           <Testimonial></Testimonial>
           <LetsTalk></LetsTalk>
        
        </div>
    );
};

export default Home;