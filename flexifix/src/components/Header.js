import React from "react";
import Navigation from "./navigation/Navigation";

export default function Header() {


    return (
        <div className="flex items-center justify-between py-5 bg-primary-900">
            <a href="/" className="text-white pl-5">
                FlexiFix
            </a>
            <Navigation />
        </div>
    );
}