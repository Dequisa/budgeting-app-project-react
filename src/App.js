import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { apiURl } from "./utility/apiURL";
import axios from "axios";

//COMPONENTS
import NavBar from "./Components/NavBar"

//Pages
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import ErrorPage from "./Pages/ErrorPage"

// const API = apiURl();

function App() {
  const [transactions, setTransactions ] = useState([]);
// useEffect(async()=>{
//   try{
//     const res = await axios.get(`${API}/transactions`);
//   }catch(err){
//     console.log(err)}
// },[]);

useEffect(async()=>{
  try{
    const res = await axios.get(`http://localhost:3001/transactions`);
    setTransactions(res.data)
  }catch(err){
    console.log(err)}
},[]);


return (
  <div className="App">
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Index transactions={transactions}/>
          </Route>
          {/* <Route path="/transactions/new">
            <New />
          </Route>
          <Route exact path="/transactions/:index">
            <Show />
          </Route>
          <Route path="/transactions/:index/edit">
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
