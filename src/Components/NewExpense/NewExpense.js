import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
    const [buttonClick, setButtonClick] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData)=> {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddHandler(expenseData);
    }
    const onShowFormHandler = ()=> {
       setButtonClick(true)
    }
    const onHideFormHandler = () => {
        setButtonClick(false)
    }
     let formButton = <button className='new-expense button' onClick={onShowFormHandler}>Add Expense</button>;
     if(buttonClick){
         formButton = <ExpenseForm onHideHandler={onHideFormHandler}  onSaveExpenseData={saveExpenseDataHandler}/>;
     }

    return (
        <div className="new-expense">
              {formButton}
        </div>
    )
}

export default NewExpense
