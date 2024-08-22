import React from 'react'
import {Editable, RenderElementProps, RenderLeafProps, Slate, withReact} from 'slate-react'
import {createEditor, Descendant} from 'slate'
import RenderLeaf from '../components/RenderLeaf'
import RenderElements from '../components/RenderElements'

interface EasyMarkReaderProps {
    value: Descendant[]
}

const EasyMarkdownRender: React.FC<EasyMarkReaderProps> = (props) => {
    
    const { value } = props;
    
    const renderLeaf = React.useCallback((props: RenderLeafProps) => <RenderLeaf {...props} />, []);
    const renderElement = React.useCallback((props: RenderElementProps) => <RenderElements {...props} />, []);
    
    const editor = React.useMemo(() => withReact(createEditor()), []);
    
    return (
        <Slate editor={editor} initialValue={value}>
            <Editable
                renderLeaf={renderLeaf}
                renderElement={renderElement}
            />
        </Slate>
    )
};

export default EasyMarkdownRender;