import TransactionDetails from "../Components/TransactionDetails";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Show({ transactions, total}) {
    console.log("Im logged")
    let { index } = useParams();
    const [] = useState(transactions[index]);
    return(
    <div className="Show">
        <h2>Details</h2>
        <section>
            <TransactionDetails 
            transactions={transactions} index={index} total={total}
            />
        </section>

    </div>)
}

export default Show;