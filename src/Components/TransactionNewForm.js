import { Link } from "react-router-dom";
import { useState } from "react";

function TransactionNewForm(props) {
    const [transaction, setTransactions] = useState({
        date:"",
        name:"",
        amount:"",
        from:""
    })

    const handleTextChange = (event) => {
        setTransactions({ ...transaction, [event.target.id]: event.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTransaction(transaction);
        setTransactions({ 
        date:"",
        name:"",
        amount:"",
        from:"" })
        
    }

    return(
        <div className="NewForm">
             <Link to={`/transactions`}>
            <button>Back</button>
        </Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Date of Deposit"
                    required
                />
            

            
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={transaction.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Event"
                    required
                />
            
                <label htmlFor="amount">Amount:</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Amount Deposited"
                    required
                />
           
                <label htmlFor="from">From:</label>
                <input
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Where deposit came from"
                    required
                />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default TransactionNewForm;