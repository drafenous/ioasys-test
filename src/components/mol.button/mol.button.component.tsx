import React, { SyntheticEvent } from 'react';
import './mol.button.styles.css';

interface ButtonProps {
    onClick?: () => void;
    colorPalette?: string;
    block?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, colorPalette, block, children, disabled }) => {
    const handleOnClick = (event: SyntheticEvent) => {
        event.preventDefault();
        onClick && onClick();
    };

    const btnClasses = `form-control btn ${colorPalette} ${block ? 'btn-block' : ''}`;
    return (
        <button onClick={handleOnClick} className={btnClasses} disabled={disabled}>
            {children}
        </button>
    );
};
