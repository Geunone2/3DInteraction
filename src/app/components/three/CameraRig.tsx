import { useFrame } from "@react-three/fiber";
import { damp3, dampE } from "maath/easing";
import { PropsWithChildren, useRef } from "react";
import * as THREE from "three";

const CameraRig = ({ children }: PropsWithChildren) => {

    const cameraGroupRef = useRef<THREE.Group>(null);

    useFrame(({ camera, pointer }, delta) => {
        const isTablet =
            typeof window && window.innerWidth <= 1440;
        const isMobile = typeof window && window.innerWidth <= 600;

        // ternary operator is not an option for clean code
        let targetPosition: [x: number, y: number, z: number] = [-0.4, 0, 2];


        if (isTablet) {
            targetPosition = [Math.min(0, window.innerWidth / -4800), 0, 2];
        }

        if (isMobile) {
            targetPosition = [0, 0.2, 2.5];
        }
        damp3(camera.position, targetPosition, 0.25, delta);

        dampE(
            cameraGroupRef.current!.rotation,
            [-pointer.y / 3, pointer.x / 3, 0],
            0.25,
            delta
        );
    });

    return <group ref={cameraGroupRef}>{children}</group>;
};

export default CameraRig;