import React from 'react';
import {useSnapshot} from "valtio/react";
import {state} from "@/app/components/store";

export default function Overlay() {
    const {colors, selectedColor} = useSnapshot(state);

    return (
        <footer className="mx-auto">
            <p className='text-xl font-semibold'>Change Colors !</p>
            <ul className='list-none mb-10 flex gap-4'>
                {colors.map((color) => (
                    <li
                        key={color}
                        style={{
                            backgroundColor: color,
                        }}
                        className={` w-10 h-10 mx-4 rounded-full border-2 border-gray-200 hover:scale-110  ${selectedColor === color ? 'selected' : ''}`}
                        onClick={() => (state.selectedColor = color)}
                    ></li>
                ))}
            </ul>
        </footer>);
}