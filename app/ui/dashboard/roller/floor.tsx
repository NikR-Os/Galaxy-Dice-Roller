'use client'
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
// import * as THREE from "three";

export default function Floor() {

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh receiveShadow={true} position={[0, -7, 0]} rotation={[-Math.PI / 2, 0, 0]} >

                <planeGeometry args={[40, 40]} rotateZ={Math.PI / 2}/>
                <meshStandardMaterial color="blue" transparent={true} opacity={0.0}/>

            </mesh>
        </RigidBody>
    );
}