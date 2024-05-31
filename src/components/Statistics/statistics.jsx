import css from "./statistic.module.css"

export const Statistic = ({good,neutral,bad,onTotal,onPositivefeednack})=>{
    return(
        <div className={css.container}>
            <div className={css.box}>
                <p className={css.stat}>Good: {good}</p>
                <p className={css.stat}>Neutral: {neutral}</p>
                <p className={css.stat}>Bad: {bad}</p>
            </div>
            
            <div className={css.boxinfo}>
            <p className={css.stat}>Total: {onTotal}</p>
            <p className={css.stat}>PositiveFeedback: {onPositivefeednack}%</p>

            </div>
        </div>
    )
}