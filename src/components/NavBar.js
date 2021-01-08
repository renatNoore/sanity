import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-blue-200 hover:text-indigo-300 text-3xl font-bold cursive tracking-widest">
                        Rezzakk
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-8 rounded text-blue-200 hover:text-indigo-300" activeClassName="text-red-100 bg-indigo-800">
                        BlogPosts
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-8 rounded text-blue-200 hover:text-indigo-300" activeClassName="text-red-100 bg-indigo-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-8 rounded text-blue-200 hover:text-indigo-300" activeClassName="text-red-100 bg-indigo-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/renatNoore" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.youtube.com/channel/UCoumyLHxXofo8zFIaMUyBTA" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}