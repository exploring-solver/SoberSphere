import React from "react";
import mgcms from "../assets/gym_equip.glb"
import hamzatyellow from "../assets/low_poly_fruits_v2.glb"
import dgc from "../assets/old_books.glb"
import dosi from "../assets/dosimeter.glb"
import geig from "../assets/geigcount.glb"
import image1 from '../assets/chemical_spill.jpg'
import image2 from '../assets/biohazard.jpg'
import image3 from '../assets/radiological_disaster.jpg'
import antiDrugImage1 from '../assets/obstac_course.png'
import antiDrugImage2 from '../assets/Choice_game.jpg'
import antiDrugImage3 from '../assets/classroom.png'
const Arlearning = () => {
    const scenarios = [
        {
            id: 1,
            title: 'Anti-Drug Quest: Navigating the Challenge',
            image: antiDrugImage1,
            description: 'Embark on an adventurous 3D obstacle course game designed to promote anti-drug awareness. Maneuver through challenges, collect wellness items, and learn about the impact of positive choices.',
            link: "https://www.spatial.io/s/SoberSphere-659021dcce1e4b9356300585?share=3783091894441117926"
        },
        
        {
            id: 2,
            title: 'Beyond the Haze: A Choices Journey',
            image: antiDrugImage2,
            description: 'Immerse yourself in a compelling narrative where every choice matters. Navigate through scenarios, resist peer pressure, and make informed decisions about drug awareness. Your journey shapes the outcome.',
            link:"https://example.com"
        },
        {
            id: 3,
            title: 'Virtual Reality Classroom: Anti-Drug Education',
            image: antiDrugImage3,
            description: 'Step into a gamified VR classroom experience for interactive learning about the dangers of drug abuse. Engage with virtual lessons, collaborative activities, and gamified scenarios for a fun and educational journey. ',
            link : "https://www.spatial.io/s/SoberSphere-655c8e28c41d46b41c94c3e3?share=0"
        },
        // Add more scenarios as needed
    ];
    return (
        <div>
            <div>
                <div className="bg-gray-100 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold">CBRN Mock Drill - VR Learning Scenarios</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-[0px] sm:ml-[20%]">
                        {scenarios.map((scenario) => (
                            <div key={scenario.id} className="bg-white p-6 rounded-lg shadow-md">
                                <img src={scenario.image} alt={scenario.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                                <h2 className="text-xl font-semibold mb-2">{scenario.title}</h2>
                                <p className="text-gray-600">{scenario.description}</p>
                                <br />
                                <a href= {scenario.link} className="text-blue-600">Click here to Play</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" md:ml-[20%]">
                <h1 className="mt-5 text-2xl text-center">
                    Alternatives of Substance/Drug Abuse
                </h1>
                <div className='flex md:flex-row flex-col flex-wrap'>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]" data-aos="fade-up" date-aos-delay="200">
                        <div className="row text-base">
                            <div className="flex flex-col ">
                                <div className="icon-box">
                                    <h4 className=" font-bold tracking-widest text-lg mt-10 text-yellow-300 mb-5">Gym and Exercise</h4>
                                    <p className="description bg-zinc-700 text-white  rounded-lg p-4">Transform your body, not your mind—hit the gym for a natural high that leaves you energized and focused. Exercise isn't just a workout; it's a powerful alternative to substance abuse, a journey of self-improvement that strengthens both body and mind.
                                    </p>
                                </div>
                            </div>
                            <div id="card" className='block my-3 '>
                                <model-viewer
                                    src={mgcms}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>


                            </div>

                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px]" data-aos="fade-up" date-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg text-yellow-300">Fruits and Vegetables</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                        Elevate your mood with the vibrant colors of nature's bounty—indulge in fruits and vegetables for a wholesome experience that nourishes your body and mind. Embrace the natural high of nutrient-rich goodness, a delicious alternative promoting well-being and self-improvement.
                                    </p>
                                    {/* <h4 className="font-bold tracking-widest mt-5 text-lg">How to Wear the Hamzat Suit</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Put on the suit in a clean and controlled environment.</li>
                                        <li>Ensure all zippers and closures are securely fastened to create a sealed barrier.</li>
                                        <li>Wear additional protective gear, such as gloves, mask, and boots, for comprehensive coverage.</li>
                                        <li>Follow specific guidelines for donning and doffing to minimize the risk of contamination.</li>
                                    </ul> */}
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "

                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={hamzatyellow}
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate ar>
                                </model-viewer>
                            </div>
                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px]" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg text-yellow-300">Books</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                        Open a book, embark on a journey of imagination, and let the pages be your escape. Books, a wholesome alternative, offer a natural high that stimulates the mind, enriches the soul, and transforms every page into a portal for self-improvement and knowledge.
                                    </p>
                                    {/* <h4 className="font-bold tracking-widest mt-5 text-lg">Key Features of the Digital Geiger Counter</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Precise measurement of ionizing radiation levels.</li>
                                        <li>Compact and portable design for easy deployment in the field.</li>
                                        <li>Real-time monitoring and digital display of radiation readings.</li>
                                        <li>Audio and visual alarms for prompt alerting of high radiation levels.</li>
                                    </ul> */}
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={dgc}
                                    alt="Digital Geiger Counter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section>
                    {/* <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px]" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">Digital Geiger Counter for Radiation Detection</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                        The Digital Geiger Counter is an advanced device designed for the detection of ionizing radiation. It provides accurate measurements to ensure the safety of individuals working in environments where there may be a risk of exposure to radiation. This device is essential for monitoring radiation levels and taking necessary precautions in various scenarios, including CBRN emergencies.
                                    </p>
                                    <h4 className="font-bold tracking-widest mt-5 text-lg">Key Features of the Digital Geiger Counter</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Precise measurement of ionizing radiation levels.</li>
                                        <li>Compact and portable design for easy deployment in the field.</li>
                                        <li>Real-time monitoring and digital display of radiation readings.</li>
                                        <li>Audio and visual alarms for prompt alerting of high radiation levels.</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={geig}
                                    alt="Digital Geiger Counter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px]" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">Digital Dosimeter for Radiation Detection</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                        The Digital Dosimeter is an advanced device designed for the measurement and monitoring of ionizing radiation exposure. It ensures the safety of individuals by providing real-time data on radiation levels, allowing for immediate response and necessary precautions. This device is crucial in various settings, including medical facilities, nuclear power plants, and industrial environments.
                                    </p>
                                    <h4 className="font-bold tracking-widest mt-5 text-lg">Key Features of the Digital Dosimeter</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Precise measurement and tracking of radiation exposure.</li>
                                        <li>Compact and lightweight design for comfortable wear.</li>
                                        <li>Real-time display of accumulated dose and dose rate.</li>
                                        <li>Audio and visual alarms for timely notification of radiation hazards.</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={dosi}
                                    alt="Digital Dosimeter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section> */}



                </div>

                {/* <a class="flex justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div id="card" className='flex justify-center m-10 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'>
      <model-viewer src="mgcms.glb"
      ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
      poster="logo.png"
      alt="mgcms"
      shadow-intensity="1"
      camera-controls
      auto-rotate ar>
          </model-viewer>
          
      </div>
      
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AR Military Grade Mobile Gas Chromatography</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mobile GC detectors are the gold standard in chemical analysis. They are a proven necessity widely used by the military and first responders as they rapidly provide on-site specific identification of volatile chemical compounds and agents in the low ppb to the low ppm range.</p>
      </div>
    </a> */}
                <br /><br />
            </div>
        </div>
    )
        ;
};

export default Arlearning;
