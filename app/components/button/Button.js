import {manrope} from '../../fonts'
import button from './Button.module.scss'

export default function Button({text}) {
    return(
        <button className={`${manrope.className} ${button.button} ${button.main__button}`}>
            {text}
        </button>
    )
}