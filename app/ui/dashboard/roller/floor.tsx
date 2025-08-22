'use client'
import { usePlane } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

export default function Floor() {
    const [ref] = usePlane(() => ({
        mass: 1,
        type: 'Static',
        position: [0, -7, 0],
        rotation: [-Math.PI / 2, 0, 0],
        material: { restitution: 0.3 },
    }));

    useFrame

    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[40, 40]}/>
            <meshStandardMaterial color="blue" transparent={true} opacity={0.0}/>
        </mesh>
    );
}