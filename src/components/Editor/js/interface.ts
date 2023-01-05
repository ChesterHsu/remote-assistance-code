import React from 'react';
import { PluggableList } from 'unified';
import './style/index.less';
export * from './SelectionText';
export interface TextareaCodeEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    prefixCls?: string;
    /**
     * Set what programming language the code belongs to.
     */
    language?: string;
    /**
     * Optional padding for code. Default: `10`.
     */
    padding?: number;
    /**
     * rehypePlugins (Array.<Plugin>, default: `[[rehypePrism, { ignoreMissing: true }]]`)
     * List of [rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) to use. See the next section for examples on how to pass options
     */
    rehypePlugins?: PluggableList;
    /**
     * The minimum height of the editor. Default: `16`.
     */
    minHeight?: number;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void | boolean;
}
declare const _default: React.ForwardRefExoticComponent<TextareaCodeEditorProps & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
