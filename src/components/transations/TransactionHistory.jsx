import '/src/components/styles.css';
import propTypes from "prop-types"

function TransactionHistory({items}){
    return(
        <>
        <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item, index) => (
                <tr key={item.id}style={{ backgroundColor: index % 2 === 0 ? 'lightgrey' : 'white' }}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
            ))}
            
        </tbody>
        </table>
        </>
    )
}

TransactionHistory.propTypes = {
    items : propTypes.array
};

export default TransactionHistory;