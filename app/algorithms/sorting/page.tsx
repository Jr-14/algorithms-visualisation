import React from 'react';
import Bar from '@/components/Bar';

const Bars: React.FC = () => {
    const arr = [1, 3, 5, 2, 4];
    const bars = arr.map((item, index) => {
        return (
        <Bar key={index} height={Number(`${item*20 + 40}px`)} />
        )
    });

    return (
        <>
            <h1>Sorting</h1>
            <div className="flex flex-row items-end">
                {bars}
            </div>
        </>
    );
}

export default Bars;