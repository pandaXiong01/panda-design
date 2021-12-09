
import React, { FC, ReactElement } from 'react'
import { createPortal } from 'react-dom'
import Button, { ButtonType } from '../Button/button'

export interface ModalProps {
    visible: boolean,
    zIndex?: number,
    title?: string,
    wrapClassName?: string,
    okText?: string,
    okType?: ButtonType,
    cancelText?: string,
    cancelType?: ButtonType,
    closable?: boolean,
    onClose: Function,
    onOk?: Function,
    onCancel?: Function,
    mask?: boolean,
    maskClosable?: boolean,
}
export const Modal: FC<ModalProps> = (props) => {
    const {
        children,
        visible,
        title,
        onClose,
        okType = 'primary',
        okText = '确定',
        cancelText = '取消',
        cancelType = 'default',
        wrapClassName = ''
    } = props
    
    return visible? createPortal(
        <div className="panda-pirate-modal">
            <div className="panda-modal-mask" /> 
            <div className={`panda-modal-warp ${wrapClassName}`}>
                <div className="panda-modal-close"><span>+</span></div>
                <div className="panda-modal" >
                    <div className="panda-modal-content">
                        <div className="panda-modal-header">
                            <div className="panda-modal-title">{title}</div>
                        </div>
                        <div className="panda-modal-body">
                            {children}
                        </div>
                        <div className="panda-modal-footer">
                            <div>
                                <Button btnType={okType}>{okText}</Button>
                                <Button btnType={cancelType}>{cancelText}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('body')
    ):null
}


export default Modal
