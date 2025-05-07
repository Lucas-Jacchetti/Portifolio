import { useState } from 'react';
import csslogo from '../assets/logos/css-3.png'
import htmllogo from '../assets/logos/html-5-svgrepo-com.svg'
import reactlogo from '../assets/logos/react.svg'
import javalogo from '../assets/logos/java-svgrepo-com.svg'
import javascriptlogo from '../assets/logos/javascript-svgrepo-com.svg'
import nodelogo from '../assets/logos/nodejs-1-logo-svgrepo-com.svg'
import springlogo from '../assets/logos/spring-boot-logo_full.png'
import nestlogo from '../assets/logos/nestjs-svgrepo-com.svg'
import typelogo from '../assets/logos/typescript-svgrepo-com.svg'

interface ImageProps {//se n da erro do type
    src: string;
    alt: string;
    description: string;
}


function Tecnologies(){
        const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);
                //estados, inicialmente nulo
        const defaultImage: ImageProps = {
            src: csslogo,
            alt: "Imagem Padrão",
            description:
            "Descrição padrão.",
        };

        const images: ImageProps[] = [ //array de objetos
            { src: csslogo, alt: "css image", description: "CSS is a styling tecnology commonly used with HTML to make responsive web designs!" },
            { src: javalogo, alt: "java image", description: "Java is a widely used programming language for a variety of applications, specially backend." },
            { src: springlogo, alt: "spring boot image", description: "This is the third image." },
            { src: htmllogo, alt: "html image", description: "This is the third image." },
            { src: reactlogo, alt: "react image", description: "This is the third image." },
            { src: nodelogo, alt: "nodejs image", description: "This is the third image." },
            { src: javascriptlogo, alt: "javascript image", description: "This is the third image." },
            { src: typelogo, alt: "typescript image", description: "This is the third image." },
            { src: nestlogo, alt: "nesjs image", description: "This is the third image." },
        ];
    
    return( 
        <>
        
        

        <div className='flex flex-col ml-24 max-w-screen overflow-hidden '>
            <div className="text-white font-bold text-[60px] mt-25">Tecnologies</div>

            <div className='flex flex-row mt-15 ml-10 w-full max-w-[1000px] flex-shrink-0'>
                <div className="grid grid-cols-3 gap-11">
                    {images.map((image, index) => (
                    <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="w-25 h-25 cursor-pointer transition-transform transform hover:scale-105 bg-transparent backdrop-blur-3xl rounded-2xl p-2"
                    onClick={() => setSelectedImage(image)}/> //atualiza o estado de selectedImage com o objeto da imagem clicada
                    ))}
                </div>
                {selectedImage && (
                    <div className=" ml-20 p-4 rounded-lg items-center justify-center flex flex-row w-[500px]">
                        <img src={selectedImage.src} alt={selectedImage.alt} className="w-65 h-65 mb-4" />
                        <p className="text-lg text-white text-wrap ml-4 ">{selectedImage.description}</p>
                    </div>  
                )}
                {!selectedImage &&( //caso for nulo, exibe a imagem e descrição padrão
                    <div className=" ml-20 p-4 rounded-lg items-center justify-center flex flex-row w-[500px]">
                        <img src={defaultImage.src} alt={defaultImage.alt} className="w-65 h-65 mb-4" />
                        <p className="text-lg text-white text-wrap">{defaultImage.description}</p>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Tecnologies;