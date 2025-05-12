import githublogo from "../assets/logos/icons8-github.svg"
import linkedinlogo from "../assets/logos/linkedin-app-white-icon.svg"
import emaillogo from "../assets/logos/6ak2vv6kr512hip8ndktntij5p.png"


function Contacts(){
    return(
        <>
        <div className="justify-center items-center mt-15 mb-0.5 flex flex-row gap-10 ml-25">
            <a href="https://github.com/Lucas-Jacchetti?tab=repositories" target="_blank">
                <img src={githublogo} alt="img" className="h-15 w-15 cursor-pointer hover:scale-115 transition-transform transform"/>
            </a>
            <a href="mailto:lucas.jacchetti@gmail.com" >
                <img src={emaillogo} alt="img" className="h-15 w-15 cursor-pointer hover:scale-115 transition-transform transform"/>
            </a>
            <a href="https://www.linkedin.com/in/lucas-jacc-8a7b02355/" target="_blank">
                <img src={linkedinlogo} alt="img" className="h-15 w-15 cursor-pointer hover:scale-115 transition-transform transform"/>
            </a>
                
        </div>
        </>
    );
}

export default Contacts;