import { Manrope } from "next/font/google"
import button from './Button.module.scss'

const manrope = Manrope({subsets: ['latin']})

export default function Button({text}) {
    return(
        <button className={`${manrope.className} ${button.button} ${button.main__button}`}>
            {text}
        </button>
    )
}