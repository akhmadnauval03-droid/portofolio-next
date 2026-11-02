"use client";

import {useEffect} from "react";

export default function TombolTema(){
    // const [gelap, setGelap] = useState(false);

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
        <button
            type="button"
            onClick={gantiTema}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
            >
                <span className="hidden dark:inline">Mode Terang</span>
                <span className="dark:hidden">Mode Gelap</span>
        </button>
    );
}