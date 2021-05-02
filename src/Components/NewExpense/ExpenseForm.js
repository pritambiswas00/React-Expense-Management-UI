import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
//    const [title, setTitle] = useState("");
//    const [amount, setAmount] = useState("");
//    const [date, setDate] = useState("");

    const [userInput, setUserInput] = useState({
        title : '',
        amount: '',
        date : ''
    })

    const inputTitleHandler = (e) => {
        setUserInput((prevState)=>{
           return  {
               ...prevState,
               title: e.target.value
           }
        })
    }
    const inputAmountHandler = (e) => {
        setUserInput({
            ...userInput,
            amount: +e.target.value
        })
    }
    const inputDateHandler = (e)=> {
        setUserInput({
            ...userInput,
            date: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const userExpense  = {
            ...userInput,
            date: new Date(userInput.date)
        }
       props.onSaveExpenseData(userExpense)
        setUserInput({
            title : '',
            amount: '',
            date : ''
        });
        props.onHideHandler();
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
          <label>Title</label>
           <input type="text" placeholder="Enter Title" value={userInput.title} onChange={inputTitleHandler}/>
          </div>
          <div className="new-expense__control">
          <label>Amount</label>
           <input type="number" placeholder="Enter Amount" min="0.01" step="0.01" onChange={inputAmountHandler} value={userInput.amount}/>
          </div>
          <div className="new-expense__control">
          <label>Date</label>
           <input type="date" placeholder="Enter Date" min="2019-01-01" max="2023-12-31" onChange={inputDateHandler} value={userInput.date}/>
          </div>
          <div className="new-expense__actions">
             <button type="submit">Add Expense</button>
             <button type="button" onClick={props.onHideHandler}>Cancels</button>
          </div>
        </div>
        
        </form>
    )
}

export default ExpenseForm
