'use client'
import { useBox, PublicApi } from "@react-three/cannon";
import * as THREE from "three";
import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";


type DiceProps = {
    position?: [number, number, number];
    apiRef?: React.RefObject<PublicApi>;
};

export default function Dice({ position = [0, 2, 0], apiRef }: DiceProps) {

    const { scene } = useGLTF('/models/dice.glb');
    const boxMaterialOuter = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    const boxMaterialInner = new THREE.MeshStandardMaterial({ color: 0x000000 });

    scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material.name === 'Outer') mesh.material = boxMaterialOuter;
            else if (mesh.material.name === 'Inner') mesh.material = boxMaterialInner;
        }
    });

    const [ref, api] = useBox(() => ({
        mass: 1,
        args: [1, 1, 1],
        position: position, // Fix Later Pls Remember - Works For Now.
        sleepTimeLimit: 0.1,
    }));

    useEffect(() => {
        if (apiRef) {
            apiRef.current = api;
        }
    }, [api, apiRef]);
 
    return (
        <group ref={ref}>
            <primitive object={scene} />
        </group>
    );
}


