import { useState } from 'react';
import csslogo from '../assets/logos/css-3.png'


const images = [
    { src: csslogo, text: "Text for Image 1" },
    { src: csslogo, text: "Text for Image 2" },
    { src: csslogo, text: "Text for Image 3" },
];


function Tecnologies(){
    const [selectedText, setSelectedText] = useState("");

    return(
        
        <>
        <div className='flex flex-col ml-24'>
            <div className="text-white font-bold text-[60px] mt-25">Tecnologies</div>

            <div className="flex space-x-4">
            {images.map((image, index) => (
                <img
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                className="w-32 h-32 cursor-pointer rounded-lg"
                onClick={() => setSelectedText(image.text)}/>
                ))}
            </div>
            <div className="mt-4 px-6 py-4 bg-gray-200 rounded min-h-[50px] flex items-center justify-center">
                {selectedText || "Click an image to see its text"}
            </div>

        </div>
        
        </>
    )
}

export default Tecnologies;