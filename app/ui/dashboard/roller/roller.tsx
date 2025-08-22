'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, PublicApi } from "@react-three/cannon";
import Floor from "./floor";
import Dice from "./dice";


type DiceRollerSceneProps = {
    diceRefs: React.RefObject<any>[];
    showDice: boolean;
};

export default function DiceRollerScene() {
    return (
        <Canvas shadows={true} camera={{ fov: 45, position: [0, 3.5, 28], near: 0.1, far: 300 }}>
            <ambientLight intensity={0.5} color={0xffffff} />
            <pointLight position={[10, 15, 0]} intensity={200} castShadow={true} color={0xffffff} shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={5}
                shadow-camera-far={400} />
            <Physics gravity={[0, -50, 0]} iterations={40} allowSleep={true} defaultContactMaterial={{ restitution: 0.3 }}>
                <Floor />
                <Dice />
            </Physics>
        </Canvas>

    );
}