import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { IoClose } from 'react-icons/io5';
import classNames from 'classnames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'placeholder'
>;

type Radius = 'normal' | 'full';

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    radius?: Radius;
    placeholder?: string;
    isClearButton?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = ({
    className,
    type = 'text',
    value,
    radius = 'normal',
    placeholder = 'input',
    isClearButton = true,
    onChange,
    ...props
}) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    const onClear = () => {
        onChange?.('');
    };

    return (
        <div
            className={classNames(
                styles.inputWrapper,
                styles[radius],
                className,
            )}
        >
            <input
                id={placeholder}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder=""
                className={styles.input}
                {...props}
            />
            <label className={styles.label}>{placeholder}</label>
            <span onClick={onClear} className={styles.clearBtn}>
                {isClearButton && value && <IoClose size={24} />}
            </span>
        </div>
    );
};
