import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { Button, ButtonTheme } from './Button';

const style = {
    width: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {
        backgroundColor: { control: 'color' },
        theme: {
            options: [
                ButtonTheme.CLEAR,
                ButtonTheme.OUTLINE,
                ButtonTheme.BACKGROUND,
            ],
            control: { type: 'radio' },
        },
    },
    args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};
Clear.decorators = ThemeDecorator(Theme.LIGHT, style);

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};
ClearDark.decorators = ThemeDecorator(Theme.DARK, style);

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};
Outline.decorators = ThemeDecorator(Theme.LIGHT, style);

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = ThemeDecorator(Theme.DARK, style);

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};
BackgroundTheme.decorators = ThemeDecorator(Theme.LIGHT, style);

export const BackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};
BackgroundThemeDark.decorators = ThemeDecorator(Theme.DARK, style);
