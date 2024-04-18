import {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    useImperativeHandle,
    useRef,
} from 'react';
import { IoClose } from 'react-icons/io5';
import classNames from 'classnames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

type Radius = 'normal' | 'full';

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    name?: string;
    value?: string;
    error?: string;
    radius?: Radius;
    label?: string;
    isClearButton?: boolean;
    onChange?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type = 'text',
            name,
            value,
            error,
            radius = 'normal',
            label,
            isClearButton = true,
            onChange,
            ...props
        },
        ref,
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            onChange?.(event.target.value);
        };

        const onClear = () => {
            onChange?.('');
        };

        const onClickLabel = () => {
            inputRef.current?.focus();
        };

        return (
            <div
                className={classNames(
                    styles.inputWrapper,
                    styles[radius],
                    className,
                    { [styles.error]: !!error },
                )}
            >
                <input
                    name={name}
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder=""
                    className={styles.input}
                    {...props}
                />
                <label
                    htmlFor={name}
                    onClick={onClickLabel}
                    className={styles.label}
                >
                    {label}
                </label>
                <span onClick={onClear} className={styles.clearBtn}>
                    {isClearButton && value && <IoClose size={24} />}
                </span>
                {error && <span className={styles.errorMessage}>{error}</span>}
            </div>
        );
    },
);
