import { Decorator } from '@storybook/react';

export const PageDecorator: Decorator = (Story) => (
    <div className="container">
        <Story />
    </div>
);
