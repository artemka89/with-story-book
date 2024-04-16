import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { Header } from './Header';

const meta = {
    title: 'Header',
    component: Header,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
Light.decorators = ThemeDecorator(Theme.LIGHT);

export const Dark: Story = {
    args: {},
};
Dark.decorators = ThemeDecorator(Theme.DARK);

export const Auth: Story = {
    args: {},
};
Auth.decorators = [ThemeDecorator(Theme.LIGHT)];
