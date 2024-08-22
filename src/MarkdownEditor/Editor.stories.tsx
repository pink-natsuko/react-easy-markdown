
import EasyMarkdownEditor from './index'
import {Meta, StoryObj, Story} from '@storybook/react'
import React, {useEffect, useRef} from 'react';
import {ComponentProps} from 'react'

type EasyMarkdownEditorStoryProps = ComponentProps<typeof EasyMarkdownEditor>;

const initialValue = [];


const meta: Meta<EasyMarkdownEditorStoryProps> = {
    title: 'Editor',
    component: EasyMarkdownEditor,
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <EasyMarkdownEditor
                    style={{
                        border: 'none',
                        outline: 'none',
                        padding: '0 1rem',
                        minHeight: '500px'
                    }}
                    initialValue={initialValue}
                />
            </div>
        ),
    ]
}

const Template: Story = (args) => {
    const ref = useRef<HTMLDivElement>(null)
    return (
        <div style={{ border: '1px solid #000', padding: '1em' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <EasyMarkdownEditor
                    ref={ref}
                    {...args}
                    style={{
                        border: 'none',
                        outline: 'none',
                        padding: '0 1rem',
                        minHeight: '400px'
                    }}
                    initialValue={initialValue}
                />
        </div>
    
    )
}

export const Default = Template.bind({});


export default meta;

type StoryProps = StoryObj<EasyMarkdownEditorStoryProps>


