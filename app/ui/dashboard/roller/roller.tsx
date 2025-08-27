'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Floor from "./floor";
import Dice from "./dice";
import { useState, useRef, useEffect } from "react";
import type { RapierRigidBody } from "@react-three/rapier";
import * as THREE from "three";


export default function DiceRollerScene({ rollCount }) {



    return (
        <Canvas shadows={true} camera={{ fov: 45, position: [0, 3.5, 28], near: 0.1, far: 300 }} >
            <ambientLight intensity={0.5} color={0xffffff} />
            <pointLight position={[10, 15, 0]} intensity={200} castShadow={true} color={0xffffff} shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={5}
                shadow-camera-far={400} />
            <Physics paused={false} gravity={[0, -50, 0]} debug>
                <Floor />
                {<Dice rollCount={rollCount}  />}
            </Physics>
        </Canvas>
    );
}
