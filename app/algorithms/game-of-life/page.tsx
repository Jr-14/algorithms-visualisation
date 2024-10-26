import Board from "@/components/Board";
import React from "react";

const GameOfLife: React.FC = () => {
    return (
        <>
            <h1 className="font-mono">Hello Game of life</h1>
            <Board rows={1} cols={1} cellSize={10} />
        </>
    );
};

export default GameOfLife