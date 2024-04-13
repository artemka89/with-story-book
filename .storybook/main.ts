import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: (config) =>
        mergeConfig(config, {
            plugins: [
                svgr({
                    include: '**/*.svg',
                    svgrOptions: {
                        exportType: 'named',
                        ref: true,
                        svgo: false,
                        titleProp: true,
                    },
                }),
            ],
        }),
    docs: {
        autodocs: 'tag',
    },
};
export default config;
