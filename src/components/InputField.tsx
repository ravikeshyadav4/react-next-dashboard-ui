import React, { ReactNode } from 'react'

type InputProps = {
    label?: ReactNode,
    type?: React.HTMLInputTypeAttribute | undefined,
    name?: string | undefined,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    value?: string | number | readonly string[] | undefined,
    className?: string | undefined,
    disabled?: boolean | undefined,
    placeholder?: string | undefined,
    id?: string | undefined,
    key?: React.Key | null | undefined,
    error?: boolean | null | undefined,
    errorMessage?: string | undefined,
}

function InputField(props: InputProps) {
  return (
    <div className='pb-2'>
        <label className="block text-gray-700 text-sm font-bold mb-2">{props.label}</label>
        <input type={props.type} name={props.name} onBlur={props.onBlur} onChange={props.onChange} value={props.value} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} disabled={props.disabled}
            placeholder={props.placeholder} id={props.id} key={props.key}
        />
       {props.error && <p className="text-red-500 text-xs pt-1">{props.errorMessage}</p>}
    </div>
  )
}

export default InputField