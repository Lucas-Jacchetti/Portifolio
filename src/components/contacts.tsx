import githublogo from "../assets/logos/icons8-github-60.svg"
import linkedinlogo from "../assets/logos/icons8-linkedin.svg"
import emaillogo from "../assets/logos/icons8-email-60.png"


function Contacts(){
    return(
        <>
        <div className="justify-center items-center mt-15 mb-0.5 flex flex-row gap-10 ml-30">
            <a href="https://github.com/Lucas-Jacchetti?tab=repositories" target="_blank">
                <img src={githublogo} alt="img" className="h-12 w-12 cursor-pointer hover:scale-115 transition-transform transform"/>
            </a>
            <a href="mailto:lucas.jacchetti@gmail.com" >
                <img src={emaillogo} alt="img" className="h-12 w-12 cursor-pointer hover:scale-115 transition-transform transform"/>
            </a>
            <a href="https://www.linkedin.com/in/lucas-jacc-8a7b02355/" target="_blank">
                <img src={linkedinlogo} alt="img" className="h-12 w-12 cursor-pointer hover:scale-115 transition-transform transform"/>
            </a>
                
        </div>
        </>
    );
}

export default Contacts;