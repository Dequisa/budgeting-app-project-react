import axios from "axios";
import apiURL from "../utility/apiURL";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory, withRouter } from "react-router-dom";

const API = apiURL();

function TransactionDetails() {
    const [transactions, setTransactions] = useState([]);
    let { index } = useParams();

    useEffect(async () => {
        try {
            let res;
            res = await axios.get(`${API}/transactions/${index}`)
            setTransactions(res.data);
            console.log(useParams)
            console.log(useHistory)
        } catch (err) { console.log(err) }
    }, [])

    return (<div>
        <h4>Date: {transactions.date}</h4>
        <h4>Name: {transactions.name}</h4>
        <h4>Amount: {transactions.amount}</h4>
        <h4>From: {transactions.from}</h4>

        <Link to={`/transactions`}>
            <button>Back</button>
        </Link>
    </div>)

}

export default withRouter(TransactionDetails);