"use client";

import {Center, Loader, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import BackdropLight from "./BackdropLight";
import CameraRig from "./CameraRig"
import {Tshirt} from "@/app/components/three/models/TshirtModel";
import {useSnapshot} from "valtio/react";
import Overlay from "@/app/components/overlay";
import {state} from "@/app/components/store";
import GeunWon from "@/app/components/header";

const ThreeCanvas = () => {

    const {selectedColor} = useSnapshot(state);

    return (<>
            <div className='flex flex-col w-full'>
                <Canvas>
                    <OrbitControls enablePan={false}/>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5}/>
                        <pointLight position={[10, 10, 10]} intensity={0.75}/>
                        <CameraRig>
                            <Center>
                                <>
                                    <BackdropLight/>
                                    <Tshirt transitionColor={selectedColor}/>
                                </>
                            </Center>
                        </CameraRig>
                    </Suspense>
                </Canvas>
                <Overlay/>
                <Loader/>
                <GeunWon/>
            </div>
        </>
    );
};

export default ThreeCanvas;