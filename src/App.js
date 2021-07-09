import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e2",
      title: "New TV",
      amount: 899.65,
      date: new Date(2021, 2, 12)
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 4, 28)
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 420,
      date: new Date(2021, 5, 12)
    }
  ];

  return(
    <Card className="expenses">
      <h2 className="h2"> Let's get started! </h2>
      {expenses.map((value) => (
        <ExpenseItem
          date={value.date}
          title={value.title}
          amount={value.amount}
        ></ExpenseItem>
      ))}
    </Card> 
  );
};

export default App;
