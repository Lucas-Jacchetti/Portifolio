function Header() {
    return(
        <>
            <div className="text-white flex flex-row justify-between items-center h-18 w-auto text-[20px] font-bold font-[Lilita One] bg-amber-400">
                <div>
                    <div className="m-3.5 mr-11 ml-7">Lucas</div>
                </div>  
                <div className=" flex flex-row justify-between items-center gap-6 m-3.5 mr-11 ml-7">
                    <div className="">About</div>
                    <div className="">Stack</div>
                    <div className="">Projects</div>
                    <div className="">Contact</div>
                </div>
            </div>
        </>
    );
}

export default Header;