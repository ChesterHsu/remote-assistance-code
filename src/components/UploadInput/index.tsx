import pickAttrs from 'rc-util/lib/pickAttrs';
import { UploadProps } from '@/tools/upload/interface'
import { UploadMethod } from '@/tools/upload/index'
import type * as React from 'react';


function UploadInput(props) {

    const {
        component,
        prefixCls,
        className,
        disabled,
        id,
        style,
        multiple,
        accept,
        capture,
        children,
        directory,
        openFileDialogOnClick,
        onMouseEnter,
        onMouseLeave,
        ...otherProps
    } = props as UploadProps;

    const uploadMethod = new UploadMethod(props)

    const Tag: React.ElementType = props.component

    const dirProps: any = directory
        ? { directory: 'directory', webkitdirectory: 'webkitdirectory' }
        : {};


    return(
        <Tag>
            <input
                { ...pickAttrs(otherProps, { aria: true, data: true }) }
                id={ id }
                type="file"
                ref={ uploadMethod.saveFileInput }
                onClick={ e => e.stopPropagation() }
                // key={this.state.uid}
                style={ style }
                accept={ accept }
                {...dirProps}
                multiple={ multiple }
                onChange={ uploadMethod.onChange }
                {...(capture != null ? { capture } : {})}
            />
        </Tag>

    )
}

export default UploadInput
