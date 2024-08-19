import React from 'react'
import {Editable, RenderLeafProps, RenderElementProps, Slate, withReact} from 'slate-react'
import {createEditor, Descendant} from 'slate'
import RenderElements from '../components/RenderElements'
import RenderLeaf from '../components/RenderLeaf'
import CustomEditor from './CustomEditor'
import EditorTools from './EditorTools'
import {EditableProps} from 'slate-react/dist/components/editable'

interface EditorProps {
    maxLength?: number;
    initialValue?: Descendant[];
}

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
}


type EasyMarkdownEditorProps = Omit<EditableProps,
    'children' |
    'renderElement' |
    'renderLeaf' |
    'onKeyDown' |
    'onPaste'
>

interface BaseEditorType extends EasyMarkdownEditorProps{
    initialValue: Descendant[],
}

interface CustomDivElement extends HTMLDivElement {
    toMD: () => void;
    toHTML: () => void;
}

const EasyMarkdownEditor = React.forwardRef((props: BaseEditorType, forwardRef: React.ForwardedRef<CustomDivElement> | null) => {
    
    const {
        initialValue,
        ...setProps
    } = props;
    
    const localRef = React.useRef<HTMLDivElement>(null)
    
    React.useImperativeHandle(forwardRef, () => {
        if (localRef.current) {
            const customElement = localRef.current as CustomDivElement;
            customElement.toMD = () => {
                console.log("md")
            };
            customElement.toHTML = () => {
                console.log("html")
            };
            
            return customElement;
        }
        return null;
    });
    
    const editor = React.useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = React.useState<Descendant[]>(
        [
            {
                type: 'paragraph',
                children: [{ text: '' }],
            }
        ] || initialValue
    );
    
    const renderLeaf = React.useCallback((props: RenderLeafProps) => <RenderLeaf {...props} />, []);
    const renderElement = React.useCallback((props: RenderElementProps) => <RenderElements {...props} />, []);
    
    const onkeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!event.ctrlKey) {
            return
        }
        switch (event.key) {
            case 'b': {
                event.preventDefault()
                CustomEditor.toggleMark(editor, 'bold')
                break
            }
            case 'i': {
                event.preventDefault()
                CustomEditor.toggleMark(editor, 'italic')
                break
            }
            case 'u': {
                event.preventDefault()
                CustomEditor.toggleMark(editor, 'underline')
                break
            }
        }
    };
    const onPaste = () => {
    
    };
    
    return (
        <Slate editor={editor} initialValue={value}>
            <EditorTools />
            <Editable
                renderLeaf={renderLeaf}
                renderElement={renderElement}
                onKeyDown={onkeydown}
                onPaste={onPaste}
                {...setProps}
            />
        </Slate>
    )
});

export default EasyMarkdownEditor;