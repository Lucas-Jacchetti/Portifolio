function Header() {
    return(
        <>
            <div className="text-white flex flex-row justify-between items-center h-18 text-[26px] font-bold font-futura bg-ddarkblue border-b border-white fixed top-0 w-full">
                <div>
                    <div className="m-3.5 ml-10 text-[28px]">Lucas Jacchetti</div>
                </div>  
                <div className=" flex flex-row justify-between items-center gap-8 m-3.5 mr-11 ml-7">
                    <div className=" hover:bg-amber-300 h-11 w-18 flex justify-center items-center rounded-md">About</div>
                    <div className=" hover:bg-amber-300 h-11 w-18 flex justify-center items-center rounded-md">Stack</div>
                    <div className=" hover:bg-amber-300 h-11 w-23 flex justify-center items-center rounded-md">Projects</div>
                    <div className=" hover:bg-amber-300 h-11 w-22 flex justify-center items-center rounded-md">Contact</div>
                </div>
            </div>
        </>
    );
}

export default Header;