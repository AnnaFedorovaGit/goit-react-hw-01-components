import data from '../../assets/data.json'
import css from './Statistics.module.css'


export const Statistics = ({ title }) => {

    const getRandomHexColor = () => {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    }
    
    const List = ({ stats }) => {
        return stats.map(stat => (
            <li className={ css.item } key={ stat.id } style={{backgroundColor: getRandomHexColor()}}>
                <span className={ css.label }>{ stat.label }</span>
                <span className={ css.percentage }>{ stat.percentage }%</span>
            </li>
        ))
    }

    return <section className={css.statistics}>
        { title && <h2 className={css.title}>{ title }</h2> }

        <ul className={ css.statList }>
            <List stats={ data } />
        </ul>
    </section>
}

export default Statistics
