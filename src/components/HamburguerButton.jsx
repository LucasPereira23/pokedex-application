import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll"; 

function HamburguerButton (){


    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }

    return (

        <div className="md:hidden h-[100vh] w-[100px] absolute top-0 right-0">
            <div className="" class={active ? 'icon2 iconActive2' : 'icon2'} onClick={ToggleMode}>
                <div  class='hamburguer2 hamburguerIcon2'></div>
            </div>
            <div className="h-full flex items-center justify-center" class={active ? 'menu2 menuOpen2' : 'menu2 menuClose2'}>
                <div className="">
                    <ul className="">
                        <li className="">
                            <h5>01.</h5>
                            <Link
                                activeClass="active"
                                to="content-about"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}>About
                            </Link>
                        </li>
                        <li className="">
                            <h5>02.</h5>
                            <Link
                                activeClass="active"
                                to="content-work"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={500}>Work
                            </Link>
                        </li>
                        <li className="">
                            <h5>03.</h5>
                            <Link
                                activeClass="active"
                                to="content-contact"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>Contact
                            </Link>
                        </li>
                        <li className="">
                            <a href='../pdf.html' target="_blank" className="border-[1px] rounded-[4px] px-[30px] py-[16px] text-white-100 text-xs font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Resume</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default HamburguerButton