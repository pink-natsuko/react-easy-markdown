import React from 'react'
import { RenderElementProps } from 'slate-react/dist/components/editable'

const RenderElements: React.FC<RenderElementProps> = (props) => {
    
    const {
        attributes,
        element,
        children
    } = props;
    
    const style = { textAlign: element.align };
    
    switch (element.type) {
        case 'h1':
            return <h1 style={style} {...attributes}>{children}</h1>
        case 'h2':
            return <h2 style={style} {...attributes}>{children}</h2>
        case 'li':
            return <li style={style} {...attributes}>{children}</li>
        case 'ol':
            return <ol style={style} {...attributes}>{children}</ol>
        case 'ul':
            return <ul style={style} {...attributes}>{children}</ul>
        default:
            return <p style={style} {...attributes}>{children}</p>
    }
}

export default RenderElements;
