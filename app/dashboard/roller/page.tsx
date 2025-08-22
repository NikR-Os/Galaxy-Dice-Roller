'use client'

import DiceRollerScene from "@/app/ui/dashboard/roller/roller";
import { useRef, useState } from "react";


export default function Page() {

    // function throwDice() {
    //     setShowDice(true);

    //     diceRefs.forEach((ref, idx) => {
    //         const api = ref.current;
    //         if (!api) return;

    //         api.velocity.set(0, 0, 0);
    //         api.angularVelocity.set(0, 0, 0);

    //         api.position.set(6, idx * 1.5, 0);

    //         api.rotation.set(
    //             Math.random() * Math.PI * 2,
    //             Math.random() * Math.PI * 2,
    //             Math.random() * Math.PI * 2
    //         );

    //         const force = 3 + 5 * Math.random();
    //         api.applyImpulse([-force, force, 0], [0, 0, 0.2]);
    //     });
    // }
    return (
        <div style={{width: '100vw', height: '100vh'}}>

            <DiceRollerScene />
        </div>
    );
}