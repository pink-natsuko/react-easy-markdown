import {BaseEditor, Editor, Element as SlateElement, Transforms, Node, NodeMatch} from 'slate'

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

const CustomEditor = {
    
    // @ts-ignore
    isMarkActive(editor: BaseEditor, format) {
        const marks = Editor.marks(editor)
        // @ts-ignore
        return marks ? marks[format] === true : false
    },
    
    isBlockActive(editor: BaseEditor, format: string, blockType = 'type') {
        const { selection } = editor
        if (!selection) return false
        
        const [match] = Array.from(
            Editor.nodes(editor, {
                at: Editor.unhangRange(editor, selection),
                match: n => !Editor.isEditor(n)
                    && SlateElement.isElement(n)
                    && n[blockType] === format,
            }),
        )
        return !!match
    },
    
    toggleBlock(editor: BaseEditor, format: string) {
        const isActive = CustomEditor.isBlockActive(
            editor,
            format,
            TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
        )
        const isList = LIST_TYPES.includes(format)
        
        Transforms.unwrapNodes(editor, {
            match: (n: any) => !Editor.isEditor(n)
                && SlateElement.isElement(n)
                && LIST_TYPES.includes(n.type)
                && !TEXT_ALIGN_TYPES.includes(format),
            split: true,
        })
        
        let newProperties: Partial<SlateElement>
        if (TEXT_ALIGN_TYPES.includes(format)) {
            newProperties = {
                align: isActive ? undefined : format,
            }
        } else {
            newProperties = {
                type: isActive ? 'paragraph' : isList ? 'list-item' : format,
            }
        }
        
        Transforms.setNodes<SlateElement>(editor, newProperties)
        
        if (!isActive && isList) {
            const block = { type: format, children: [] }
            Transforms.wrapNodes(editor, block)
        }
    },
    
    toggleMark(editor: BaseEditor, type: string) {
        const isActive = CustomEditor.isMarkActive(editor, type)
        if (isActive) {
            Editor.removeMark(editor, type)
        } else {
            Editor.addMark(editor, type, true)
        }
    },
    
}

export default CustomEditor;