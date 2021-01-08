import React from "react";
import image from "../bg.jpg";

export default function Home() {
    return (
    <main>
        <img src={image}
        alt="jocker" 
        className="absolute object-cover w-full h-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h2 className="text-4xl text-blue-800 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Rezzakk</h2>
        </section>
    </main>)
}