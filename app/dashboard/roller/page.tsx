'use client'

import DiceRollerScene from "@/app/ui/dashboard/roller/roller";
import { useRef, useState } from "react";


export default function Page() {

    const [rollCount, setRollCount] = useState(0);
    
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <button onClick={() => {
                setRollCount(prev => prev + 1);
            }}>Roll Dice</button>
            <DiceRollerScene rollCount={rollCount} />
        </div>
    );
}