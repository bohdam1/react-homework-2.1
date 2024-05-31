import css from './buttons.module.css'



export const Button = ({ handleChange }) => {
    return (
        <div className={css.buttonlist}>
            <button className={css.button} value="good" onClick={handleChange} name="good">Good</button>
            <button className={css.button} value="neutral" onClick={handleChange} name="neutral">Neutral</button> 
            <button className={css.button} value="bad" onClick={handleChange} name="bad">Bad</button>
        </div>
    )
}
