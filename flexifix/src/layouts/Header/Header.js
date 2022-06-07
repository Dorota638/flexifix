import React from "react";
import Navigation from "../../components/navigation/Navigation";

export default function Header() {
    return (
        <div className="flex items-center justify-between h-16 bg-primary-900 w-full">
            <a href="/" className="text-white pl-5 text-xl ">
                FlexiFix
            </a>
            {/* <Navigation /> */}
        </div>
    );
}