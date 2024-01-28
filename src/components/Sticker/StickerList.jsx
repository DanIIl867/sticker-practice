import {Sticker} from 'components/Sticker/Sticker';

export function StickerList({stickerData, handleChange}){
    return(
        <ul>
            {stickerData.map((img, label)=>{
                return(
                    <Sticker key={label} handleChange={handleChange} img={img} label={label}/>
                )
            })}
        </ul>
    )
}