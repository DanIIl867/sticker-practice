import {Sticker} from './Sticker';
import s from './StickerList.module.css'

export function StickerList({stickerData, handleChange}){
    return(
        <ul className={s.ul}>
            {stickerData.map(({img, label})=>(
                <Sticker key={label} handleChange={handleChange} img={img} label={label}/>
            ))}
        </ul>
    )
}