import React from "react";
import Typed from 'react-typed';

const Page = () => {
    return ( 
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="text-white md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">Bienvenue chez Neversoft</h1>
            <div className="flex justify-center items-center">
                <p className=" md:text-xl sm:text-xl text-xl">
                    Unis par la passion, guidés par
                </p>
                <Typed
                className=" md:text-xl sm:text-xl text-xl p-2"
                strings={["l'adrénaline","l'émotion", "l'énergie", "les frissons", "la vitesse", "la compétition"]}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
        </div>
    </div>
    )
}

export default Page;