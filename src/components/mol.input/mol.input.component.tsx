import { Assets } from 'assets';
import React, { ChangeEvent, InputHTMLAttributes, useCallback, useState } from 'react';
import './mol.input.styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
    icon?: string;
    validations?: any[];
    handleValidation?: (inputName: string, isValid: boolean | undefined) => void;
    invalidForm?: boolean;
}

export const Input: React.FC<InputProps> = ({
    label,
    onChange,
    icon,
    validations,
    handleValidation,
    invalidForm,
    ...props
}) => {
    const [isValidInput, setIsValidInput] = useState<boolean>(true);
    const isValid = useCallback(() => {
        if (invalidForm) {
            return false;
        }
        return isValidInput;
    }, [invalidForm, isValidInput]);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        onChange && onChange(event);
        setIsValidInput(true);
        if (validations) {
            const isValidInputValidation = validations.some((validation) => validation(event.currentTarget.value));
            setIsValidInput(isValidInputValidation);
            handleValidation && props.name && handleValidation(props.name, isValid());
        }
    };

    const hasIcon = icon ? Assets.icon[icon] : undefined;

    const inputClasses = `form-control ${hasIcon ? 'icon' : ''} ${isValid() ? 'is-valid' : 'is-invalid'} ${props.className}`;

    return (
        <div className={`${label ? 'form-floating' : 'input-group'} mb-3`}>
            {hasIcon && <img src={hasIcon} alt={`${props.name} icon`} className="inputIcon" />}
            <input {...props} className={inputClasses} onChange={handleOnChange} id={`floatingInput_${props.name}`} />
            {label && <label htmlFor={`floatingInput_${props.name}`}>{label}</label>}
        </div>
    );
};
