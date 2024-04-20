import {
    forwardRef,
    InputHTMLAttributes,
    useImperativeHandle,
    useRef,
} from 'react';
import { LuUpload } from 'react-icons/lu';
import classNames from 'classnames';

import styles from './FileInput.module.scss';

type Radius = 'normal' | 'full';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    error?: string;
    radius?: Radius;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    ({ className, radius = 'normal', ...props }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

        const onClickButton = () => {
            inputRef.current?.click();
        };

        return (
            <>
                <button
                    type="button"
                    onClick={onClickButton}
                    className={classNames(
                        className,
                        styles.button,
                        styles[radius],
                    )}
                >
                    <LuUpload className={styles.icon} />
                </button>
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*,.png,.jpg,.web"
                    className={styles.hidden}
                    {...props}
                />
            </>
        );
    },
);
