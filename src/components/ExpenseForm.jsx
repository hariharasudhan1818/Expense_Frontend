import { useState } from "react"

const ExpenseForm = (props) => {
    const {addExpense} = props
     
    const[Title,setTitle] = useState('')
    const[Amount,setAmount] = useState(0)
    const[errors,setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Title, Amount)
        let err = {}
       
        if(Title.length < 3){
            err.Title = 'Title should be atleast 3 characters long'
            
        }
        if(!Amount){
            err.Amount = 'Enter valid Amount'
            
        }
        if (Object.keys(err).length > 0) {
            setErrors({ ...err})
            return
        }
        addExpense(Title, Amount)
        setTitle('')
        setAmount('')
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        setErrors({ ...errors, Title: ''})
    }
    const handleAmountChange = (e) => {
        setAmount(parseInt(e.target.value))
        setErrors({ ...errors, Amount: ''})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div class="bar">
    <div class="inp">
        <label>Title</label>
        <input id="inp-task" type="text" value={Title} onChange={handleTitleChange}/>
        {errors.Title ? <div className="error">{errors.Title}</div> : null}
    </div>
    <div class="inp">
        <label>Amount</label>
        <input id="inp-descr" type="number" value={Amount} onChange={handleAmountChange} />
        {errors.Amount ? <div className="error">{errors.Amount}</div> : null}
    </div>
    </div>
    <button class="but" onclick="addfunc()">Add Transaction</button>
        </form>

    )
}
export default ExpenseForm