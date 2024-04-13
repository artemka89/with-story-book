import { styleDecorator } from '../src/shared/config/storybook/StyleDecorator';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        backgrounds: {
            values: [
                { name: 'light', value: '#f8f7f7' },
                { name: 'dark', value: '#1b1b1b' },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [styleDecorator],
};

export default preview;
