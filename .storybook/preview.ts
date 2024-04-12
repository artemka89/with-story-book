import { styleDecorator } from '../src/shared/config/storybook/StyleDecorator';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
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
