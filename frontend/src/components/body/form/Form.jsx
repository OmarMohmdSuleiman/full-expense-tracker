import { useState } from "react";

function Form(){
    const [expense,setExpense]=useState({
        id:"",
        name:"",
        description:"",
        amount:"",

    });
    const [allExpenses,setAllExpnses]=useState([]);

    
    const handleChange=(e) =>{
        setExpense({
            ...expense,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        setAllExpnses([...allExpenses,expense]);

        console.log(expense)
        setExpense({
            name: "",
            description: "",
            amount: "",
        });
    };
    return (
        <div>
<form onSubmit={handleSubmit}>
            <input 
             type="text"
             name="name"
             placeholder="Expense name"
             value={expense.name}
             onChange={handleChange}
             required>
            </input>

             <input 
             type="text"
             name="description"
             placeholder="Description"
             value={expense.description}
             onChange={handleChange}
             required>
            </input>

            <input 
             type="text"
             name="amount"
             placeholder="Amount"
             value={expense.amount}
             onChange={handleChange}
             required>
            </input>

            <button type="submit">
                Add Expense
            </button>

        </form>
        <ul>
            {allExpenses.map((expense,index)=>(
                <li key={index}>
                    {expense.name} - ${expense.amount}

                </li>
            ))}
        </ul>
        </div>
        
    )
}

export default Form;