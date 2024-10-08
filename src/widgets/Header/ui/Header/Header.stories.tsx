import type { Meta, StoryObj } from '@storybook/react';

import {
    StoreDecoratorWithAuth,
    StoreDecoratorWithOutAuth,
} from '@/shared/config/storybook/Decorators/StoreDecorator';
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
    decorators: [StoreDecoratorWithOutAuth, ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [StoreDecoratorWithOutAuth, ThemeDecorator(Theme.DARK)],
};

export const Auth: Story = {
    args: {},
    decorators: [StoreDecoratorWithAuth, ThemeDecorator(Theme.LIGHT)],
};
