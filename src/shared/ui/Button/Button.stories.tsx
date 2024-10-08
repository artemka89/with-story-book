import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
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
    decorators: [
        ThemeDecorator(Theme.LIGHT, style),
        ThemeDecorator(Theme.DARK, style),
    ],
    argTypes: {
        theme: {
            options: [
                ButtonTheme.CLEAR,
                ButtonTheme.UNDERLINE,
                ButtonTheme.OUTLINE,
                ButtonTheme.FILLED,
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

export const Underline: Story = {
    args: {
        theme: ButtonTheme.UNDERLINE,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.FILLED,
    },
};
