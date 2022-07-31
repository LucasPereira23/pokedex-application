import Aos from "aos";
import { ArrowSquareOut, FolderSimple, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"
import ignite from '../images/ignite-wpp.png'
import perfil from '../images/perfil.jpg'
import pokemon from '../images/pokemon-wpp.png'

Aos.init({
    duration: 1000,
    once: true,
  });


function Section () {

    return (
        <div  className="2xl:max-w-[1536px] sm-mobile:px-2 mobile:px-6 sm:px-12 md:px-28 lg:px-36 xl:px-44 ">
            <div data-aos="fade-in" className=" sm:w-auto flex items-center justify-center pt-28">
                <div className=" fixed left-10 bottom-0 sm-mobile:hidden mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-col items-center justify-center">
                    <a href="https://github.com/LucasPereira23" target="_blank" className="relative top-0 mb-6 text-white-500 cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300 hover:top-[-2px]"><GithubLogo size={28} /></a> 
                    <a href="https://www.instagram.com/lucaspereira727/" target="_blank" className="relative top-0 mb-6 text-white-500 cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300  hover:top-[-2px]"><InstagramLogo size={28} /></a>  
                    <a href="https://www.linkedin.com/in/lucas-pereira-alves-5164aa20a/" target="_blank" className="relative top-0 mb-8 text-white-500 cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300  hover:top-[-2px]"><LinkedinLogo size={28} /></a> 
                    <span className="h-[90px] border-l-[1px] border-white"></span> 
                </div>
                <div className="fixed right-10 bottom-0 w-10 sm-mobile:hidden mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex  flex-col items-center justify-between">
                    <span className="origin-center rotate-90 mb-32 "><a href="mailto:lucas_231200@hotmail.com" target="_blank" className="relative left-0 text-white-500 text-sm cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300 hover:left-[-2px]">lucas_231200@hotmail.com</a></span> 

                    <span className="h-[90px] border-l-[1px] border-white"></span>
                </div>
                <div>
                    <span className="text-5xl font-bold"></span>
                </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col mb-48 ">
                <span className="text-red-500">Hi, my name is</span>
                <h1 className="mt-6 sm-mobile:text-xl mobile:text-4xl sm:text-7xl text-7xl font-bold text-white-500">Lucas Pereira.</h1>
                <h1 className="mobile:mt-3 sm:mt-6 mobile:text-4xl sm:text-7xl font-semibold text-white-700">I build things for the web.</h1>
                <span className="mobile:mt-6 sm:mt-10 mobile:h-44 sm:h-20 sm-mobile:w-[100%] mobile:w-[100%]  sm:w-[580px] inline-block text-white-700 font-light">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</span>
                <button className="mt-10 sm-mobile:w-[80%] mobile:w-64 border-[1px] rounded-[4px] px-[22px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Check out my works!</button>
            </div>

            <div data-aos="fade-up" id="content-about" className="flex flex-col w-auto justify-between mb-48 mobile:pl-0 sm:pl-12">
                <div className="flex items-center mb-10">
                        <a className="text-red-500 text-xl">01.</a>
                        <span className="flex justify-center min-w-[135px] mr-3 text-white-500 font-semibold text-2xl">About Me</span>
                        <span className="w-80 border-b-[1px] border-white-700/50"></span>
                </div>
                <div className="flex sm-mobile:flex-col mobile:flex-col sm:flex-col md:flex-row">
                    <div className="flex flex-col mobile:w-[100%] sm:h-[400px] sm:w-[500px] md:w-[550px] xl: justify-between text-white-700 font-light">
                            <span>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

                            </span>

                            <span>
                            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                            </span>


                            <div className="flex sm-mobile:flex-col mobile:flex-row sm:flex-row mobile:text-sm sm:text-base font-thin mt-4 sm-mobile:mb-10 mobile:mb-12 sm:mb-12 md:mb-0">
                                <ul className="flex flex-col mr-12">
                                    <li>
                                        <span className="text-red-500 mr-2">▸</span>
                                        <span>JavaScript (ES6+)</span>
                                    </li>
                                    <li>
                                        <span className="text-red-500 mr-2">▸</span>
                                        <span>React</span>
                                    </li>
                                    <li>
                                        <span className="text-red-500 mr-2">▸</span>
                                        <span>Node.js</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-col">
                                <li>
                                    <span className="text-red-500 mr-2">▸</span>
                                    <span>TypeScript</span>
                                </li>
                                <li>
                                    <span className="text-red-500 mr-2">▸</span>
                                    <span>Eventely</span>
                                </li>
                                <li>
                                    <span className="text-red-500 mr-2">▸</span>
                                    <span>WordPress</span>
                                </li>
                                </ul>
                            </div>
                    </div>
                    <div className="flex " >

                        <div className="flex w-[300px] mobile:justify-start sm:justify-start md:justify-start relative sm-mobile:ml-10 mobile:ml-10 sm:ml-12 ">
                            <span id="block-img" className="z-30 absolute peer bg-red-500/40 hover:bg-transparent transition-all duration-100 left-0 top-0 sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw]  sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:max-w-[300px] rounded-md"></span>
                            <img className=" sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw] sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:min-w-[300px] rounded-md z-20" src={perfil} alt="" />
                            <span htmlFor="block-img" className="absolute peer-hover:left-3 peer-hover:top-3 transition-all duration-200 left-4 top-4 sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw] sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:max-w-[300px] border-[2px] rounded-md "></span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content-work" className="sm-mobile:mb-20 md:mb-48">
                <div data-aos="fade-up"   className="sm:mb-14 md:mb-20">
                    <div className="flex items-center mobile:mb-10 sm:mb-16 md:mb-10">
                        <a className="text-red-500 mobile:text-lg sm:text-xl">02.</a>
                        <span className="flex justify-center min-w-[90px] mr-3 text-white-500 font-semibold mobile:text-lg  sm:text-2xl">Principais Projetos</span>    
                        <span className="sm-mobile:w-[20%] sm:w-60 md:w-[300px] lg:w-[320px] border-b-[1px] border-white-700/50"></span>
                    </div>

                    <div className="flex flex-row relative items-center justify-end ">
                        
                        <span className="sm-mobile:bg-red-700/70 sm:bg-red-700/70  md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 left-0 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px]  rounded-[3px] z-10"></span>
                        <img className="absolute xl:top-0 left-0 sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px] rounded-[3px]" src={ignite} alt="" />
                        <div className="h-[360px] sm-mobile:w-[100%] sm:w-auto py-10 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start md:items-end justify-between ">
                            <div className="flex flex-col sm-mobile:items-start sm:items-start  md:items-end z-20">
                                <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">Featured Project</span>
                                <a className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0" href="">Halcyon Theme</a>
                            </div>

                            <div className="sm:bg-transparent sm:text-left md:bg-[#40404d] md:text-right text-white-700 flex flex-col justify-between items-end h-[auto] md:w-[50%] lg:w-[50%]  xl:w-[46%] rounded-[4px] py-6 md:px-6 md:mb-4 lg:mb-0 text-sm  md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20">
                                <span>A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                                iTerm, and more. Available on Visual Studio Marketplace,
                                Package Control, Atom Package Manager, and npm.</span>
                            </div>
                            <div className="text-sm font-light flex flex-wrap items-center justify-between mobile:w-[100%] sm:w-[340px] text-white-700 sm-mobile:mb-2  md:mb-4 lg:mb-0 z-20">
                                <span>VS Code</span>
                                <span>Sublime Text</span>
                                <span>Atom</span>
                                <span>iTerm2</span>
                                <span>Hyper</span>
                            </div>
                            <div className="flex text-white-500 z-20">
                                <span className="mr-4 cursor-pointer hover:text-red-500 transition-all duration-300"><GithubLogo size={26}/></span>
                                <span className="cursor-pointer hover:text-red-500 transition-all duration-300"><ArrowSquareOut size={26} /></span>
                            </div>
                        </div>
                    </div>

                </div>

            
            <div data-aos="fade-up"  className="mb-24 sm-mobile:mt-8 sm:mt-0 md:mt-0">


                <div className="flex flex-row relative items-center justify-start ">
                        
                        <span className="sm-mobile:bg-red-700/70 sm:bg-red-700/70  md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 right-0 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[28vw]  xl:w-[60%] 2xl:h-[400px]  2xl:w-[700px]  rounded-[3px] z-10"></span>
                        <img className="absolute xl:top-0 right-0 sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[28vw]  xl:w-[60%] 2xl:h-[400px]  2xl:w-[700px] rounded-[3px]" src={pokemon} alt="" />
                        <div className=" h-[360px] mobile:w-[100%] sm:w-auto py-10 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start md:items-start justify-between ">

                                <div className="flex flex-col sm-mobile:items-start sm:items-start  md:items-start z-20">
                                    <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">Featured Project</span>
                                    <a className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0" href="">Halcyon Theme</a>
                                </div>

                                <div className="sm:bg-transparent sm:text-left md:bg-[#40404d] md:text-right text-white-700 flex flex-col justify-between items-end h-[auto] md:w-[50%] lg:w-[50%] xl:w-[46%]  rounded-[4px] py-6 md:px-6 md:mb-4 lg:mb-0 text-sm  md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20">
                                    <span>A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                                    iTerm, and more. Available on Visual Studio Marketplace,
                                    Package Control, Atom Package Manager, and npm.</span>
                                </div>
                                <div className="text-sm font-light flex flex-wrap items-center justify-between mobile:w-[100%] sm:w-[340px] text-white-700 md:mb-4 lg:mb-0 z-20">
                                    <span>VS Code</span>
                                    <span>Sublime Text</span>
                                    <span>Atom</span>
                                    <span>iTerm2</span>
                                    <span>Hyper</span>
                                </div>
                                <div className="flex text-white-500 z-20">
                                    <span className="mr-4 cursor-pointer hover:text-red-500 transition-all duration-300"><GithubLogo size={26}/></span>
                                    <span className="cursor-pointer hover:text-red-500 transition-all duration-300"><ArrowSquareOut size={26} /></span>
                                </div>


                        </div>
                    </div>

                </div>

            </div>

            <div className="flex flex-col justify-center items-center sm-mobile:mb-28 md:mb-48">
            
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="mt-6 text-3xl font-semibold text-white-700 mb-3">Todos os Projetos</h1>
                    <a href="" className="text-red-500">view the archive</a>
                </div>


                <div  data-aos="fade-up" className="mobile:min-w-[290px] mobile:max-w-[450px] sm:max-w-[575px] sm:w-[575px] md:w-[600px] md:max-w-[600px] lg:w-[750px] lg:max-w-[750px] xl:w-[1000px] xl:max-w-[1000px] flex flex-wrap items-center justify-between">
                    <div  className="peer bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col mt-5 h-auto sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
                        <div id="card-h"  className="peer absolute top-0 left-0 h-full xl:w-full "></div>
                        <div className="flex flex-row justify-between items-center mb-6">
                            <span className="text-red-700"><FolderSimple size={48} /></span>
                            <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10"><GithubLogo size={26} /></span>
                        </div>
                        <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Integrating Algolia Search with WordPress Multsite</span>
                        <span className="text-white-700 font-light text-sm mb-6">Building a custom multside compatible WordPress plugin to build global search with Algolia</span>
                        <div className="text-white-700/60 font-extralight text-xs">
                            <span className="mr-4">Algolia</span>
                            <span className="mr-4">WordPress</span>
                            <span>PHP</span>
                        </div>

                        
                    </div>

                    <div className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-400 flex flex-col mt-5 h-auto sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
                        <div id="card-h"  className="peer absolute top-0 left-0 h-full w-full "></div>
                        <div className="flex flex-row justify-between items-center mb-6">
                            <span className="text-red-700"><FolderSimple size={48} /></span>
                            <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10"><GithubLogo size={26} /></span>
                        </div>
                        <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Integrating Algolia Search with WordPress Multsite</span>
                        <span className="text-white-700 font-light text-sm mb-6">Building a custom multside compatible WordPress plugin to build global search with Algolia</span>
                        <div className="text-white-700/60 font-extralight text-xs">
                            <span className="mr-4">Algolia</span>
                            <span className="mr-4">WordPress</span>
                            <span>PHP</span>
                        </div>
                    </div>

                    <div  className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-400 flex flex-col mt-5 h-auto sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
                        <div id="card-h"  className="peer absolute top-0 left-0 h-full w-full "></div>
                        <div className="flex flex-row justify-between items-center mb-6">
                            <span className="text-red-700"><FolderSimple size={48} /></span>
                            <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10"><GithubLogo size={26} /></span>
                        </div>
                        <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Integrating Algolia Search with WordPress Multsite</span>
                        <span className="text-white-700 font-light text-sm mb-6">Building a custom multside compatible WordPress plugin to build global search with Algolia</span>
                        <div className="text-white-700/60 font-extralight text-xs">
                            <span className="mr-4">Algolia</span>
                            <span className="mr-4">WordPress</span>
                            <span>PHP</span>
                        </div>
                    </div>

                    <div className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-400 flex flex-col mt-5 h-auto sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
                        <div id="card-h"  className="z-10 peer absolute top-0 left-0 h-full w-full "></div>
                        <div className="flex flex-row justify-between items-center mb-6">
                            <span className="text-red-700"><FolderSimple size={48} /></span>
                            <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10"><GithubLogo size={26} /></span>
                        </div>
                        <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Integrating Algolia Search with WordPress Multsite</span>
                        <span className="text-white-700 font-light text-sm mb-6">Building a custom multside compatible WordPress plugin to build global search with Algolia</span>
                        <div className="text-white-700/60 font-extralight text-xs">
                            <span className="mr-4">Algolia</span>
                            <span className="mr-4">WordPress</span>
                            <span>PHP</span>
                        </div>
                    </div>
                </div>

            </div>

            <div id="content-contact" data-aos="fade-up" className=" flex flex-col justify-center items-center mb-48">
                <div  className="sm:w-[100%] md:w-[600px] flex-col flex justify-center items-center">
                    <div  className="flex flex-row text-red-500">
                        <h5 className="mr-2 mb-5">03.</h5>
                        <span className="">What's Next?</span>
                    </div>
                    <span className="flex items-center justify-center mobile:text-4xl sm:text-5xl font-semibold text-white-700 mb-6">Get in Touch</span>
                    <span className="flex justify-center items-center text-center text-white-700/50 font-light mb-14">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</span>
                    <a href="mailto:lucas_231200@hotmail.com" target="_blank" className="border-[1px] rounded-[4px] px-[28px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Say Hello</a>
                </div>

            </div>



        </div>


        
    )
}

export default Section