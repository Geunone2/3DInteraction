import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import easing from 'maath'

export default function TransitionMaterial(props) {
    const materialRef = useRef();

    useFrame((_, delta) =>
        easing.dampC(
            materialRef.current.color,
            props.transitionColor,
            props.transitionTime ? props.trasitionTime : 0.25,
            delta
        )
    )

    return <meshStandardMaterial ref={materialRef} {...props} />;
}