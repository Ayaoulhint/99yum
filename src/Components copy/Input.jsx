import React, { useId } from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className= '',
    ...props

},ref){
    const id = useId()
    return(
        <div className=''>
            {label && <label
            className=''
            htmlFor={id}>
                {label}
            </label>}
            <input
            id={id}
            type={type}
            className={`px-3 py-3 ${className}`}
            ref={ref}
            {...props}
            />
        </div>
    )
})

export default Input