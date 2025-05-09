import springlogo from '../assets/logos/spring-boot-logo_full.png'
import springbnw from '../assets/logos/Simpleicons-Team-Simple-Springboot.svg'
import calculator from '../assets/logos/—Pngtree—vector calculator icon_3782871.png'
import javalogo from '../assets/logos/java-svgrepo-com.svg'
import nestlogo from '../assets/logos/nestjs-svgrepo-com.svg'
import javascriptlogo from '../assets/logos/javascript-svgrepo-com.svg'

function Projects(){
    return(
        <>
            <div className="flex flex-col">
                <div className="text-white font-bold text-[60px] mt-20  ml-24">Projects</div>
                <div className="justify-center items-center grid grid-cols-3 gap-11 ml-30 mt-15">
                    <a href="https://github.com/Lucas-Jacchetti/CRUD-test" target='blank'>
                        <div className=" relative group h-40 w-80 text-green-500 hover:text-black bg-darkpurple hover:bg-green-500 shadow-2xl/100 justify-center items-center flex flex-row gap-2.5 rounded-2xl hover:scale-107 cursor-pointer transition-transform transform">
                            <img src={springlogo} alt="spring boot logo" className=' absolute w-20 h-20 group-hover:hidden mr-40' />
                            <img src={springbnw} alt="spring boot logo" className='w-20 h-20 group-hover:block ml-10 hidden' />
                            <p className=' text-2xl absolute group-hover:hidden right-10'>Springboot CRUD</p>
                            <p className='hidden text-[22px] group-hover:block text-wrap'>A simple Springboot Formula 1 drivers and teams CRUD</p>
                        </div>
                    </a>

                    <a href="https://projeto-calculadora-js-mocha.vercel.app" target='blank'>
                        <div className=" relative group h-40 w-80 text-yellow-400 hover:text-black bg-darkpurple hover:bg-yellow-500 shadow-2xl/100 justify-center items-center flex flex-row gap-2.5 rounded-2xl hover:scale-107 cursor-pointer transition-transform transform">
                            <img src={calculator} alt="spring boot logo" className=' absolute w-35 h-35 group-hover:hidden mr-30' />
                            <img src={calculator} alt="spring boot logo" className='w-35 h-35 hidden group-hover:block' />
                            <p className=' text-2xl absolute group-hover:hidden right-10'>JS Calculator</p>
                            <p className='hidden text-[22px] group-hover:block text-wrap'>A basic calculator using HTML, CSS, and Javascript</p>
                        </div>
                    </a>

                    <a href="https://github.com/Lucas-Jacchetti/ProjetoXadrezJava" target='blank'>
                        <div className=" relative group h-40 w-80 text-yellow-600 hover:text-black bg-darkpurple hover:bg-yellow-900 shadow-2xl/100 justify-center items-center flex flex-row gap-2.5 rounded-2xl hover:scale-107 cursor-pointer transition-transform transform">
                            <img src={javalogo} alt="spring boot logo" className=' absolute w-25 h-25 group-hover:hidden mr-40' />
                            <img src={javalogo} alt="spring boot logo" className='w-25 h-25 group-hover:block ml-10 hidden' />
                            <p className=' text-2xl absolute group-hover:hidden right-20'>Chess game</p>
                            <p className='hidden text-[22px] group-hover:block text-wrap mr-5'>Chess game made in Java (runs on terminal)</p>
                        </div>
                    </a>

                    <a href="https://github.com/henriquemairesse/Sprint-4-AGES/tree/main/Backend/src" target='blank'>
                        <div className=" relative group h-40 w-80 text-red-500 hover:text-black bg-darkpurple hover:bg-red-300 shadow-2xl/100 justify-center items-center flex flex-row gap-2.5 rounded-2xl hover:scale-107 cursor-pointer transition-transform transform">
                            <img src={nestlogo} alt="spring boot logo" className=' absolute w-20 h-20 group-hover:hidden mr-40' />
                            <img src={nestlogo} alt="spring boot logo" className='w-20 h-20 group-hover:block ml-10 hidden' />
                            <p className=' text-2xl absolute group-hover:hidden right-15'>NestJS Backend</p>
                            <p className='hidden text-[22px] group-hover:block text-wrap'>Backend application using NestJS, Typescript, Docker with Postgres and Prisma!</p>
                        </div>
                    </a>

                    <a href="https://github.com/Lucas-Jacchetti/CRUD-filmes" target='blank'>
                        <div className=" relative group h-40 w-80 text-yellow-300 hover:text-black bg-darkpurple hover:bg-yellow-200 shadow-2xl/100 justify-center items-center flex flex-row gap-2.5 rounded-2xl hover:scale-107 cursor-pointer transition-transform transform">
                            <img src={javascriptlogo} alt="spring boot logo" className=' absolute w-20 h-20 group-hover:hidden mr-40' />
                            <img src={javascriptlogo} alt="spring boot logo" className='w-20 h-20 group-hover:block ml-10 hidden' />
                            <p className=' text-2xl absolute group-hover:hidden right-10'>Javascript CRUD</p>
                            <p className='hidden text-[22px] group-hover:block text-wrap'>Javascript movies CRUD with unitary tests in Jest</p>
                        </div>
                    </a>

                    <a href="https://climateapp-ecru.vercel.app" target='blank'>
                        <div className=" relative group h-40 w-80 text-yellow-300 hover:text-black bg-darkpurple hover:bg-yellow-200 shadow-2xl/100 justify-center items-center flex flex-row gap-2.5 rounded-2xl hover:scale-107 cursor-pointer transition-transform transform">
                            <img src={javascriptlogo} alt="spring boot logo" className=' absolute w-20 h-20 group-hover:hidden mr-40' />
                            <img src={javascriptlogo} alt="spring boot logo" className='w-20 h-20 group-hover:block ml-10 hidden' />
                            <p className=' text-2xl absolute group-hover:hidden right-10'>JS Climate Site</p>
                            <p className='hidden text-[22px] group-hover:block text-wrap'>Javascript weather forecast site, with HTML and CSS</p>
                        </div>
                    </a>
                    

                </div>
            </div>

        </>
    );
}

export default Projects;