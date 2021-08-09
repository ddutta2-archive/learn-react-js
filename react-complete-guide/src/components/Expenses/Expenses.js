import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseItem expenseDate={props.expense.expenseDate} expenseTitle={props.expense.expenseTitle} expensePrice={props.expense.expensePrice} />
        </Card>
    );
}

export default Expenses;