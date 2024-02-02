import s from './Choice.module.css'

export function Choice({selectedSticker}){
    return(
        <div className={s.choiceContainer}>
            {selectedSticker && (
                <>
                <p className={s.choiceLabel}>{selectedSticker.label}</p>
                <img src={selectedSticker.img} alt={selectedSticker.label}
                className={s.choiceImg} />
                </>
            )}
            {!selectedSticker && (
                <p className={s.choice}>Your choice:</p>
            )}
        </div>
    )
}