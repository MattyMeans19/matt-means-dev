import FSCert from "/FSdevCertificate.jpg";
import TSCert from "/TSCertificate.jpg";
import NJSCert from "/NJSCertificate.jpg"

function Certs(){
    const certs = [{
    title: "Full-Stack Web Developement",
    image: FSCert,
    description: "Full-Stack web development course for front-end and back-end basics including: HTML, CSS, JavaScript, Node.js, Bootstrap, React, Express.js, and more!"
    },
    {
    title: "Mastering TypeScript",
    image: TSCert,
    description: "Crash course in TypeScript fundamentals!"
    },
    {
    title: "Next.js and React",
    image: NJSCert,
    description: "In-depth course on Next.js Page-Router and App-Router."
    }]

    return(
        <div className="size-full bg-emerald-300 flex-col gap-5 overflow-y-scroll">
            {certs.map((cert) => (
                <div key={cert.key} className="p-5 text-center">
                    <h1 className="text-3xl bg-gray-400">{cert.title}</h1>
                    <img src={cert.image} className="h-[50rem] w-full"></img>
                    <p className="bg-gray-200 text-2xl">{cert.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Certs;