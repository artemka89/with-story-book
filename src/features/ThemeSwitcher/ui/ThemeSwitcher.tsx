import { FC } from 'react';
import { GoMoon, GoSun } from 'react-icons/go';

import { Theme } from '@/shared/lib/context/ThemeContext';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    size?: number;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ size = 24 }) => {
    const { theme, toggleTheme } = useTheme();

    const isDark = theme === Theme.DARK;

    return (
        <div onClick={toggleTheme} className={styles.themeSwitcher}>
            {isDark ? <GoMoon size={size} /> : <GoSun size={size} />}
        </div>
    );
};
