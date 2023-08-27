

import './About.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function About() {
    return (
        <div className='container' id='aboutContainer'>
            <div className="row">
                <img src='images/laptopWave.png' alt="Avatar waving" className='col-12 col-md-6 content' id='laptopWaveImage' />
                <div className='col-12 col-md-6 content' id='textContainer'>
                    <h1 id='aboutMeTitle'>About Me</h1>
                    <p className='aboutMeP'>Hello! I&apos;m Erik Olson, a passionate individual with a diverse background and a drive for continuous learning. 
                         My journey in the tech world began when I delved into the realm of full stack development. 
                         From crafting elegant front-end user interfaces to architecting robust back-end systems, I&apos;ve been immersing myself in the world of coding to build digital experiences that bring ideas to life.
                         While my professional journey has had me working as a truck driver, I&apos;ve been using my off-road hours to explore the expansive landscape of software development. 
                         This dual experience has given me a unique perspective that combines a strong work ethic, attention to detail, and an unwavering commitment to problem-solving. 
                         In the world of coding, just like on the road, every challenge presents an opportunity to adapt, learn, and grow.
                         In addition to my passion for coding, I&apos;m also a proud father to a vibrant 1 year old daughter. 
                         Balancing the exciting world of technology with the joy of parenthood has taught me the importance of versatility, time management, and embracing new experiences. 
                         When I&apos;m not immersed in lines of code, you can often find me spending quality time with my family, cherishing the moments that bring us closer together.
                         As I continue to navigate the roads of life, both as a developer and a family man, my goal remains constant: 
                         to embrace the journey, face challenges head-on, and inspire others to embark on their own paths of growth and exploration. 
                         Join me as we navigate the ever-evolving landscape of technology, innovation, and the beautiful journey of personal development.
                     </p>
                </div>
                    <div className="content" id='mobileTextContainer'>
                        <h1 id='aboutMeTitle'>About Me</h1>
                        <Carousel showStatus={false} showThumbs={false} showArrows={false}>
                        <div>
                            <p>
                            Hello! I&apos;m Erik Olson, a passionate individual with a diverse background and a drive for continuous learning. 
                             My journey in the tech world began when I delved into the realm of full stack development. 
                            From crafting elegant front-end user interfaces to architecting robust back-end systems, I&apos;ve been immersing myself in the world of coding to build digital experiences that bring ideas to life.
                            </p>
                        </div>
                        <div>
                            <p>
                            While my professional journey has had me working as a truck driver, I&apos;ve been using my off-road hours to explore the expansive landscape of software development. 
                            This dual experience has given me a unique perspective that combines a strong work ethic, attention to detail, and an unwavering commitment to problem-solving. 
                            In the world of coding, just like on the road, every challenge presents an opportunity to adapt, learn, and grow.
                            </p>
                        </div>
                        <div>
                            <p>
                            In addition to my passion for coding, I&apos;m also a proud father to a vibrant 1 year old daughter. 
                            Balancing the exciting world of technology with the joy of parenthood has taught me the importance of versatility, time management, and embracing new experiences. 
                            When I&apos;m not immersed in lines of code, you can often find me spending quality time with my family, cherishing the moments that bring us closer together.
                            </p>
                        </div>
                        <div>
                            <p>
                            As I continue to navigate the roads of life, both as a developer and a family man, my goal remains constant: 
                            to embrace the journey, face challenges head-on, and inspire others to embark on their own paths of growth and exploration. 
                            Join me as we navigate the ever-evolving landscape of technology, innovation, and the beautiful journey of personal development.
                            </p>
                        </div>
                        </Carousel>
                    </div>
            </div>
        </div>
    );
}

// Bootstrap size breakpoints:
// xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px,

// Bootstrap grid system: col-xs-12 would have the element full width, col-xs-6 would have the element half width, etc. depending on the size of the screen.
//col-12 col-md-6 col-lg-4 col-xl-3
