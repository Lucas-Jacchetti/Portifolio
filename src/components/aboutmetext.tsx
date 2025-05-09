import me from '../assets/logos/WhatsApp Image 2025-05-09 at 00.12.57.jpeg'

function AboutMeText(){
    return(
        <>
        <div className="flex flex-row items-center justify-baseline mt-10">
            <div className="flex flex-col ml-24">
                <div className="text-white font-bold text-4xl mt-10">I'm a Software Enginner student.</div>
                <div className="text-white font-futura mt-2 text-xl w-[31.3rem] text-wrap"> Currently studying at PUCRS, I have built backend and frontend projects in different tecnologies, such as Javascript, Java, and it's frameworks and libraries. I'm always up to new challenges and experiences, constantly trying to improve myself.</div>
            </div>
            <img src={me} alt="myself" className='w-60 h-80 ml-50 mt-30 rounded-3xl' />
        </div>
        </>
    );
}

export default AboutMeText;