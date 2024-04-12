import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { MainPage } from './MainPage';

const meta = {
    title: 'spages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof MainPage>;

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
