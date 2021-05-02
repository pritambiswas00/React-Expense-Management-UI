import React, { useState } from 'react'
import './App.css';
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';
function App() {

   const[expenses, setExpenses] = useState([])

  const onExpenseHandler = (expenseData)=> {
     setExpenses((prevState) => {
       return [expenseData,...prevState]
     });

  }
  return (
    <div className="App">
        <NewExpense onAddHandler={onExpenseHandler}/>
       
        <Expenses items = {expenses}/>
    </div>
  );

  }
export default App;
