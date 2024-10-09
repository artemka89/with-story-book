import { RouterDecorator } from '../src/shared/config/storybook/Decorators/RouterDecorator';
import type { Preview } from '@storybook/react';

import '@/app/styles/index.scss';

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
    decorators: [RouterDecorator],
};

export default preview;
