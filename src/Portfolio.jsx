import {useState} from "react";
import { sites } from "./Sites";
import Slide from "./Slide";


export default function Portfolio(){
    const [currentSlide, changeSlide] = useState(0)

    function NextSlide(){
        changeSlide((prev) =>(
            prev === sites.length - 1 ? 0 : prev + 1
        ));
    }
    function PrevSlide(){
        changeSlide((prev) =>(
            prev === 0 ? sites.length - 1 : prev - 1
        ));
    }

    const translationValue = `translateX(-${currentSlide * 90}vw)`;
    const goToSlide = (index) => {
        changeSlide(index);
    };

    return(
        <div className="relative flipUp h-screen flex justify-center items-start lg:items-center">
            <button className="slideButton absolute left-0 bottom-0 lg:top-100 lg:h-100" onClick={() => {PrevSlide()}}>◀</button>
            <button className="slideButton absolute right-0 bottom-0 lg:top-100  lg:h-100" onClick={() => {NextSlide()}}>▶</button>
            <div className="w-[90vw] h-[85vh] overflow-hidden">
                <div className="flex flex-row h-full transition-transform duration-500 ease-in-out"
                style={{transform: translationValue }}>
                    {sites.map((site) =>(
                        <Slide 
                        key={site.id}
                        name={site.name}
                        url={site.url}
                        image={site.image}
                        description={site.description}
                        />
                    ))}
                </div>  
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {sites.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`
                            w-3 h-3 rounded-full transition-colors duration-300
                            ${index === currentSlide 
                                ? 'bg-white shadow-lg ring-2 ring-green-500' // Active dot style
                                : 'bg-gray-400 hover:bg-white/70' // Inactive dot style
                            }
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}