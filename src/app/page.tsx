"use client"
import ThreeCanvas from "@/app/components/three/ThreeCanvas";
import Introduce from "@/app/components/introduce";

export default function Home() {

    return (
        <main className="flex app transition-all ease-in bg-gradient-to-r from-white to-gray-300">
            <Introduce/>
            <ThreeCanvas/>
        </main>
    );
}
