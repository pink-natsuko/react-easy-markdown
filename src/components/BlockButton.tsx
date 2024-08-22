import React from 'react'
import {useSlate} from 'slate-react'
import CustomEditor from '../MarkdownEditor/CustomEditor'
import styles from '../styles/index.module.css'

type BlockButtonProps = {
    children: React.ReactElement,
    format: 'h1' | 'h2' | 'ol' | 'ul' | 'left' | 'right' | 'center',
}

const TEXT_ALIGN_TYPES = ['left', 'center', 'right']

const BlockButton: React.FC<BlockButtonProps> = (props) => {
    const { children, format } = props;
    
    const editor = useSlate()
    const isActive = CustomEditor.isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')
    
    const onMousedown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        CustomEditor.toggleBlock(editor, format)
    };
    
    return (
        <button
            aria-label={format}
            className={styles.base_tools_editor_btn}
            data-active={isActive}
            onMouseDown={onMousedown}
        >{children}</button>
    )
};

export default BlockButton