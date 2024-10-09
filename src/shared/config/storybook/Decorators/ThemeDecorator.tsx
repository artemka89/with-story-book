import { Decorator } from '@storybook/react';

import { Theme } from '@/shared/lib/context/ThemeContext';

export function ThemeDecorator(theme: Theme, style?: React.CSSProperties) {
    const StoryDecorator: Decorator = (Story) => (
        <div className={`app ${theme}`} style={style}>
            <Story />
        </div>
    );
    return StoryDecorator;
}
