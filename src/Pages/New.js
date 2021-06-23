import TransactionNewForm from "../Components/TransactionNewForm";

function New({ addTransaction }) {
    return(
        <div>
        <h2>New</h2>
        <TransactionNewForm addTransaction={addTransaction}/>
        </div>
    )
}

export default New;