import laptop from '../assets/laptop-1928.svg'

function Name(){
    return(
        <>
        <div className="flex flex-row justify-between items-center ">
            <div className="flex flex-col mt-30 ml-25 gap-0 justify-center items-start ">
                <h1 className="text-white text-[150px] h-35">Lucas</h1>
                <div className="text-white text-[150px] h-48">Jacchetti</div>
                <div className="text-bettergray text-[30px]">Backend Software Developer</div>
            </div>
            <div>
                <img className="-scale-x-100 ml-60 h-80 w-80 mt-30 motion-preset-oscillate motion-duration-4000 z-100 relative" src={laptop} alt="computer"></img>
                <div className='w-70 h-30 ml-65 drop-shadow-xl/50 bg-black blur-2xl z-10'></div>
            </div>
        </div>
        </>
    );
}

export default Name;