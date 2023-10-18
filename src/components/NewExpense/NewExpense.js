import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (prop) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        prop.onAddExpense(ExpenseData);
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
};


export default NewExpense;