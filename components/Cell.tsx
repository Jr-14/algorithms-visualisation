import React from 'react';

type Props = {
    width: number;
    height: number;
    color: string
};

const Cell: React.FC<Props> = ({ width, height }) => {

    const styles = React.useMemo(() => {
        return `border-solid w-${width} h-${height}`
    }, []);

    return (
        <div className={styles}>
            {styles}
        </div>
    );
};

export default Cell;