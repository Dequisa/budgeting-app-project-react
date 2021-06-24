import TransactionDetails from "../Components/TransactionDetails";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Show({ transactions, total}) {
    let { index } = useParams();
    const [transaction] = useState(transactions[index]);
    return(
    <div className="Show">
        <h2>Details</h2>
        <section>
            <TransactionDetails 
            transactions={transactions} transaction={transaction}index={index} total={total}
            />
        </section>

    </div>)
}

export default Show;