export function Sticker({img, label, handleChange}){
    return(
        <li onClick={() => {handleChange(label)}}>
            <img src={img} alt="" /> 
            <p>{label}</p>
        </li>
    )
}