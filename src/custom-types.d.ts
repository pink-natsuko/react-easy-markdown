import {BaseEditor, BaseRange, Descendant} from 'slate'
import {ReactEditor} from 'slate-react'

export type HeadingElement = {
    type: 'h1'
    align?: string
    children: Descendant[]
}

export type HeadingTwoElement = {
    type: 'h2'
    align?: string
    children: Descendant[]
}

export type ParagraphElement = {
    type: 'paragraph'
    align?: string
    children: Descendant[]
}

export type UnderlineElement = {
    type: 'underline'
    align?: string
    children: Descendant[]
}
export type NumberedListElement = {
    type: 'numbered-list'
    align?: string
    children: Descendant[]
}
export type BulletedListElement = {
    type: 'bulleted-list'
    align?: string
    children: Descendant[]
}
export type ListItemElement = {
    type: 'list-item';
    children: Descendant[]
}

export type CustomText = {
    bold?: boolean
    italic?: boolean
    underline?: boolean
    text: string
}

type CustomElement =
    | EditableVoidElement
    | HeadingElement
    | HeadingTwoElement
    | UnderlineElement
    | BulletedListElement
    | NumberedListElement
    | ListItemElement
    | ParagraphElement

export type EmptyText = {
    text: string
}

export type CustomEditor = BaseEditor &
    ReactEditor &
    HistoryEditor & {
    nodeToDecorations?: Map<Element, Range[]>
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'slate' {
    interface CustomTypes {
        Editor: CustomEditor
        Element: CustomElement
        Text: CustomText
        Range: BaseRange & {
            [key: string]: unknown
        }
    }
}