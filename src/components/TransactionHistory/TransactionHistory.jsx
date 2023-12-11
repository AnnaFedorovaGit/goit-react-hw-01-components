import transactions from '../../assets/transactions.json'
import css from './TransactionHistory.module.css'


const TransactionHistory = () => { 

    const List = ({ items }) => { 
        return items.map(item => (
            <tr className={ css.row } key={ item.id }>
                <td className={ css.item }>{ item.amount }</td>
                <td className={ css.item }>{ item.type }</td>
                <td className={ css.item }>{ item.currency }</td>
            </tr>
        ))
    }

    return <table className={ css.transactionHistory }>
        <thead className={ css.titleWrapper }>
            <tr className={ css.titleList }>
                <th className={ css.title }>Type</th>
                <th className={ css.title }>Amount</th>
                <th className={ css.title }>Currency</th>
            </tr>
        </thead>

        <tbody className={css.itemList}>
            <List items={ transactions } />  
        </tbody>        
    </table>
}

export default TransactionHistory