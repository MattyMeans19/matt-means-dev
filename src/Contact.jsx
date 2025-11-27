import { Contact } from "./Email";

export default function ContactMe(){
    return(
        <div className="popIn w-screen lg:w-[70vw] h-[80vh] lg:h-fit place-self-center border-10 border-double rounded-2xl bg-gray-400">
            <Contact />
        </div>
    )
}