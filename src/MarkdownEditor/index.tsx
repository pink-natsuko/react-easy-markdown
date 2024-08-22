import React, {useEffect} from 'react'
import {Editable, RenderLeafProps, RenderElementProps, Slate, withReact} from 'slate-react'
import {createEditor, Descendant, Node} from 'slate'
import RenderElements from '../components/RenderElements'
import RenderLeaf from '../components/RenderLeaf'
import CustomEditor from './CustomEditor'
import EditorTools from './EditorTools'
import {EditableProps} from 'slate-react/dist/components/editable'

type EasyMarkdownEditorProps = Omit<EditableProps,
    'children' |
    'renderElement' |
    'renderLeaf' |
    'onKeyDown' |
    'onPaste' |
    'onChange'
>

export interface MarkdownEditorType extends EasyMarkdownEditorProps {
    maxLength?: number;
    readonly?: boolean;
    initialValue: Descendant[];
    onChange?: (v: Descendant[]) => void;
}

const EasyMarkdownEditor = React.forwardRef((props: MarkdownEditorType, forwardRef: React.ForwardedRef<HTMLDivElement> | null) => {
    
    const {
        initialValue,
        readOnly = false,
        maxLength,
        onChange,
        ...setProps
    } = props;
    
    const editor = React.useMemo(() => withReact(createEditor()), []);
    
    const [value, setValue] = React.useState<Descendant[]>(
        [
            {
                type: 'paragraph',
                children: [{ text: '' }],
            }
        ] || initialValue
    );
    const [isReadOnly, setIsReadOnly] = React.useState(readOnly);
    
    const handleChange = (value: Descendant[]) => {
        const text = value.map((n) => Node.string(n)).join('\n')
        if (readOnly || (maxLength && text.length >= maxLength)) {
            setIsReadOnly(true)
        } else {
            setValue(value)
            setIsReadOnly(false)
        }
    };
    
    useEffect(() => {
        if (value.length > 0) {
            onChange && onChange(value)
        }
    }, [value]);
    
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
        <Slate
            editor={editor}
            initialValue={value}
            onChange={handleChange}
        >
            <EditorTools />
            <Editable
                readOnly={isReadOnly}
                ref={forwardRef}
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