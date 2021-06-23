import Transactions from "../Components/Transactions";
function Index({ transactions, total }) {
    return(
        <div className="index">
            {console.log(total)}
            <Transactions transactions={transactions} total={total}/>
           
        </div>
    )
}

export default Index;