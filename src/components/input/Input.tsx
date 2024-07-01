import { ChangeEvent } from "react"
import s from './Input.module.css'

type InputProps = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputError: boolean
    className?: string
}

export const Input = ({ title, value, inputError, className, onChange }: InputProps) => {
    return (
        <form className={s.form}>
            <label>{title}</label>
            <input
                className={inputError ? `${s.inputError} ${s.input}` : s.input}
                value={value}
                type='number'
                onChange={onChange}
            />
        </form>
    );
};