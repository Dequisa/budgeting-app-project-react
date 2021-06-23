import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import apiURL from "./utility/apiURL.js";
import axios from "axios";

//COMPONENTS
import NavBar from "./Components/NavBar"

//Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import ErrorPage from "./Pages/ErrorPage";
import Show from "./Pages/Show";
import New from "./Pages/New";

const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data)
    } catch (err) {
      console.log(err)
    }
  }, []);

 const addTransaction = async (newTransaction)=>{
   try{
     const res = await axios.post(`${API}/transactions`, newTransaction)
     setTransactions(res.data)
   }catch(err){
     console.log(err)
   }
 };

  let total = 0;
   return (
    <div className="App">
     {transactions.forEach((transaction) => {
                total += Number(transaction.amount)
            })} 
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Index transactions={transactions} total={total}/>
            </Route>
            <Route path="/transactions/new">
              <New  addTransaction={addTransaction}/>
            </Route>
            <Route exact path="/transactions/:index">
              <Show transactions={transactions} />
            </Route>
            {/* <Route path="/transactions/:index/edit">
            <Edit />
          </Route> */}
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );


}


export default App;
