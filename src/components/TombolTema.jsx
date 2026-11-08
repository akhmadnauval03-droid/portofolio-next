"use client";

import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";

export default function TombolTema(){
    const [gelap, setGelap] = useState(false);

    // function gantiTema() {
    //     document.documentElement.classList.toggle("dark");
    //     setGelap(!gelap);
    // }
    useEffect(()=>{
        if (localStorage.getItem("tema") === "gelap") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    function gantiTema(){
        const gelap = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tema", gelap ? "gelap" : "terang");
    }

    return (
        <Button 
            variant="outline"
            onClick={gantiTema} 
            className="border-white bg-transparent text-white hover:bg-aksen hover:text-white">
                {gelap ? "Mode Terang" : "Mode Gelap"}
        </Button>
    );
}
