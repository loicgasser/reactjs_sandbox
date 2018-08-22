import React from 'react'

const Option = (props) => {
    return (
        <li>
            {props.option}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            >remove</button>
        </li>
    )
}

export default Option