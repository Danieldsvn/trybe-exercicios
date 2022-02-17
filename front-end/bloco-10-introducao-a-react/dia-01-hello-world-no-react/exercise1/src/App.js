import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['doctor', 'park', 'cinema', 'beach', 'work']
const appointmentsLi = appointments.map((appointment) => <li>{appointment}</li> );

function App() {
  return (
    <ol>
    {Task('Eat')}
    {appointmentsLi}
    </ol>
  );
}

export default App;
