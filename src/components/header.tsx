interface ScrollButtonsProps {
    scrollToSection: (section: "section1" | "section2" | "section3" | "section4") => void;
}

function Header({ scrollToSection }: ScrollButtonsProps) {
    
    return(
        <>
            <div className="text-white flex flex-row justify-between items-center h-18 text-[1.625rem] font-bold font-futura bg-transparent backdrop-blur-md border-b border-white fixed top-0 w-full z-20">
                <div>
                    <div className="m-3.5 ml-10 text-[1.75rem]">Lucas Jacchetti</div>
                </div>  
                <div className=" flex flex-row justify-between items-center gap-8 m-3.5 mr-11 ml-7">
                    <div className="transition duration-300 hover:bg-ddarkbluehover h-11 w-18 flex justify-center items-center rounded-xl cursor-pointer" onClick={() => scrollToSection("section1")}>About</div>
                    <div className="transition duration-300 hover:bg-ddarkbluehover h-11 w-18 flex justify-center items-center rounded-xl cursor-pointer" onClick={() => scrollToSection("section2")}>Stack</div>
                    <div className="transition duration-300 hover:bg-ddarkbluehover h-11 w-23 flex justify-center items-center rounded-xl cursor-pointer" onClick={() => scrollToSection("section3")}>Projects</div>
                    <div className="transition duration-300 hover:bg-ddarkbluehover h-11 w-22 flex justify-center items-center rounded-xl cursor-pointer" onClick={() => scrollToSection("section4")}>Contact</div>
                </div>
            </div>
        </>
    );
}

export default Header;