import s from './StickerList.module.css'

export function Sticker({img, label, handleChange}){
    return(
        <li className={s.list} onClick={() => {handleChange(label)}}>
            <img src={img} alt="" /> 
            <p className={s.text}>{label}</p>
        </li>
    )
}