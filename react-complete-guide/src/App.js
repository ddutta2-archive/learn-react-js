import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expense = [
    { 'expenseDate': new Date(2021, 8, 6), 'expenseTitle': 'React JS Course', 'expensePrice': 150.12 },
    { 'expenseDate': new Date(2020, 9, 3), 'expenseTitle': 'C# Developer Course', 'expensePrice': 50.50 },
    { 'expenseDate': new Date(2021, 4, 5), 'expenseTitle': 'Azure Developer Course', 'expensePrice': 200.45 },
    { 'expenseDate': new Date(2021, 4, 2), 'expenseTitle': 'Machine Learning Course', 'expensePrice': 500 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Expenses expense={expense[0]} />
        <Expenses expense={expense[1]} />
        <Expenses expense={expense[2]} />
        <Expenses expense={expense[3]} />
      </header>
    </div>
  );
}

export default App;
