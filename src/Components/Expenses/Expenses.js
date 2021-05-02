import React, { useState }  from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import FilterExpense from '../filterExpense/FilterExpense'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  
    const [select, setSelect] = useState("2021")

    const onSelectHandler  = (selectYear) => {
       setSelect(selectYear)
    }
    const filterItem = props.items.filter(item => {
        return item.date.getFullYear().toString() === select
    });

    return (
        
        <Card  className="expenses">
        <FilterExpense onChangeFilter={onSelectHandler} filterValue={select}/>
        <ExpensesChart expenses={filterItem}/>
           {filterItem.length === 0 ? <h2 className="expenses-list__fallback">No expenses found.</h2> : filterItem.map(item =>
            <ExpenseItem date={item.date} title={item.title} amount={item.amount} key={item.id}/> 
        )} 
        </Card>
    )
}

export default Expenses
