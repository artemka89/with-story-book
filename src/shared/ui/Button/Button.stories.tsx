import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

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
