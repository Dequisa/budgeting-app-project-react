import Transaction from "./Transaction";

function Transactions({ transactions, total}) {
    
    return (
         
        <div className="Transactions">
            <h2>Bank Account Total: {total} </h2>
           
            {transactions.map((transaction, index) => {
                let tot = 0;
                tot += Number(transaction.amount)
                // console.log(tot += Number(transaction.amount))
                return (<Transaction key={index} transaction={transaction} index={index}/>);
            })}  
        </div>
    )

}

export default Transactions;