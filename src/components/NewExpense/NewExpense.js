import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {
  const [isClickedForm, setIsClickedForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    prop.onAddExpense(ExpenseData);

    setIsClickedForm(false);
  };

  const isRenderingHandler = () => {
    setIsClickedForm(true);
  };

  const stopEdditingHandel = () => {
    setIsClickedForm(false);
  };

  return (
    <div className="new-expense">
      {!isClickedForm && (
        <button onClick={isRenderingHandler}>Add New Expense</button>
      )}
      {isClickedForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEdditingHandel}
        />
      )}
    </div>
  );
};

export default NewExpense;
