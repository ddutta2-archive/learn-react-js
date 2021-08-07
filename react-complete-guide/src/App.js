import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expense = [
    {'expenseDate': new Date(2021, 8, 6), 'expenseTitle': 'React JS Course', 'expensePrice': 150.12},
    {'expenseDate': new Date(2020, 9, 3), 'expenseTitle': 'C# Course', 'expensePrice': 50.50},
    {'expenseDate': new Date(2021, 4, 5), 'expenseTitle': 'Azure Developer Course', 'expensePrice': 200.45},
    {'expenseDate': new Date(2021, 4, 2), 'expenseTitle': 'Machine Learning Course', 'expensePrice': 500},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem expenseDate={expense[0].expenseDate} expenseTitle={expense[0].expenseTitle} expensePrice={expense[0].expensePrice} />
        <ExpenseItem expenseDate={expense[1].expenseDate} expenseTitle={expense[1].expenseTitle} expensePrice={expense[1].expensePrice} />
        <ExpenseItem expenseDate={expense[2].expenseDate} expenseTitle={expense[2].expenseTitle} expensePrice={expense[2].expensePrice} />
        <ExpenseItem expenseDate={expense[3].expenseDate} expenseTitle={expense[3].expenseTitle} expensePrice={expense[3].expensePrice} />
      </header>
    </div>
  );
}

export default App;
