import { useState ,useEffect} from "react"
import ExpenseForm from "./components/ExpenseForm.jsx"
import ExpenseItem from "./components/ExpenseItem"
import TrackerTable from "./components/trackertable"
import axios from "axios";

const App = () => {
  const [table, setExpenses] = useState([
      // {id: 1,Title:"Food",Amount:100},
      // {id: 2,Title:"Movie",Amount:-200},
      // {id: 3,Title:"cloth",Amount:1800},
    ])
      // apihosting....
      useEffect(() => {
        axios.get('https:rendering....link')
        .then(res => {
          console.log(res.data)
          setExpenses(res.data)
        })
        .catch(err => console.log(err))
      }, [])

  const addExpenses = (Title, Amount) => {
    const nextId = table[table.length - 1].id+1
    setExpenses([...table, {Title: Title, Amount: Amount}])
  }
  const deleteExpense = (id) => {
    setExpenses(table.filter((exp) => exp.id !== id))
  }

  let income = 0
  let expense = 0
  table.forEach((exp) => {
    if (exp.Amount > 0) {
      income += exp.Amount
    }
    else{
      expense += exp.Amount
    }
  })
 

  return (
    <>

    <ExpenseItem />
    <ExpenseForm addExpense = {addExpenses}/>
    
    
<div>
<div className="balance">Balance : {income+expense}</div>
      <div className="inc-exp-container">
        <div className="income">
          <span>Income</span>
          <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
          <span>Expense</span>
          <span>{expense}</span>
        </div>
      </div>
    
    </div>

        {
      table.map((items) =>{
        return (
          <TrackerTable {...items} deleteExpense = {deleteExpense} />
        )
      })
    }

    </>
  )
}
export default App