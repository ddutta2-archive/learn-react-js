import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem expenseDate={props.expense.expenseDate} expenseTitle={props.expense.expenseTitle} expensePrice={props.expense.expensePrice} />
        </Card>
    );
}

export default Expenses;