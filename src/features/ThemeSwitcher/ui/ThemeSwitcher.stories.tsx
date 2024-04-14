import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { ThemeSwitcher } from './ThemeSwitcher';

const style = {
    width: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sun: Story = {
    args: {},
};
Sun.decorators = ThemeDecorator(Theme.LIGHT, style);

export const Moon: Story = {
    args: {},
};
Moon.decorators = ThemeDecorator(Theme.DARK, style);
