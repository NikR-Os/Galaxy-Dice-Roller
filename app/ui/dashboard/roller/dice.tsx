'use client'
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { RapierRigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Dice({ rollCount }) {

    const [diceCount, setDiceCount] = useState(3);

    const diceRefs = useRef<(RapierRigidBody[])>([]);

    const diceArray = Array.from({ length: diceCount }, (_, dIdx) => ({
        id: dIdx,
        position: [6, dIdx * 1.5, 0] as [number, number, number]
    }));

    rollDice();

    function rollDice() {
        if (diceRefs.current.every(d => d)) {
            console.log('yeah')
            diceRefs.current.forEach((d, dIdx) => {
                if (!d) {
                    return;
                }
                const q = new THREE.Quaternion();
                q.setFromEuler(new THREE.Euler(
                    Math.random() * Math.PI * 2,
                    0,
                    Math.random() * Math.PI * 2
                ));

                (d as any).setBodyType("dynamic", true);

                d.setLinvel({ x: 0, y: 0, z: 0 }, true);
                d.setAngvel({ x: 0, y: 0, z: 0 }, true)

                d.setRotation({ x: q.x, y: q.y, z: q.z, w: q.w }, true);
                d.setTranslation({ x: 6, y: dIdx * 1.5, z: 0 }, true);

                const force = 3 + 25 * Math.random();
                d.applyImpulse({ x: -force, y: force, z: 0 }, true);
                d.applyTorqueImpulse({ x: 0, y: 0, z: 0.2 }, true);
            });
        }
    }

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

    return (
        <group>

            {diceArray.map(dice => (

                <RigidBody
                    type="fixed"
                    position={[0, -100, 0]}
                    mass={5}
                    key={dice.id}
                    ref={el => { diceRefs.current[dice.id] = el }}
                    colliders="cuboid"
                    restitution={0.35}>
                    <primitive object={scene.clone()} />
                </RigidBody>
            ))}

        </group>
    );
}


