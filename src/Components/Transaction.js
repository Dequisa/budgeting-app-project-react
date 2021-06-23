import { Link } from "react-router-dom";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

function Transaction({transaction, index }) {
    return(
        <div className="Transaction">
            {transaction.date}  
            <Link to={`transactions/${index}`}>{transaction.name}</Link>
        <ColoredLine color="black" />
        </div>
    )

}

export default Transaction;