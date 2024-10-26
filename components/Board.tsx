import React from 'react';

import Cell from './Cell';

type Props = {
    rows: number;
    cols: number;
    cellSize: number;
};

const Board: React.FC<Props> = ({ rows, cols, cellSize }) => {
    return (
        <div>
            <h1>Hello board</h1>
            <Cell width={cellSize} height={cellSize} color='red'/>
        </div>
    );
};

export default Board;