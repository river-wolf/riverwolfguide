import React from 'react'
import './Button.css'   

export interface Props {
    children: React.ReactNode,
    onClick: () => void,
    disabled?: boolean
}

const noob = () => {}

export const Button = (props: Props) => {
    const { children, onClick, disabled = false } = props
    const disabledClass = disabled ? 'Button_disabled' : ''

    return (
        <button 
            className={`Button ${disabledClass}`}
            onClick={!disabled ? onClick : noob}
        >
            <span>{ children }</span>
        </button>
    )
}
