import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import Navigation from "../../components/navigation/Navigation";

export default function Header() {
    return (
        <div className="flex items-center justify-between h-16 bg-primary-900 w-full">
            <a href="/" className="text-white pl-5 text-xl ml-2 ">
                FlexiFix
            </a>

            {/* <Navigation /> */}
        </div>
    );
}