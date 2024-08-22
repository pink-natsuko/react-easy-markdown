import React from 'react'
import {useSlate} from 'slate-react'
import CustomEditor from '../MarkdownEditor/CustomEditor'
import styles from '../styles/index.module.css'

type MarkButtonProps = {
    children: React.ReactElement,
    format: 'bold' | 'italic' | 'underline',
}

const MarkButton: React.FC<MarkButtonProps> = (props) => {
    
    const editor = useSlate()
    
    const { children, format } = props
    const isActive = CustomEditor.isMarkActive(editor, format)
    
    const onMousedown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        CustomEditor.toggleMark(editor, format)
    };
    
    return (
        <button
            aria-label={format}
            data-active={isActive}
            className={styles.base_tools_editor_btn}
            onMouseDown={onMousedown}
        >{children}</button>
    )
};

export default MarkButton;