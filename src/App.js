import { useState } from 'react';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TodoList from './TodoList'
import TodoEntryForm from './TodoEntryForm';

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'Meet Masao for Udon'},
    {id: 2, content: 'Fix up these horrible React notes'},
  ]);
  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }
  
  return (
    <Container maxWidth="sm" style={{marginTop: 20}}>
      <Paper style={{padding: 20, backgroundColor: '#fffff3'}}>
        <Typography variant="h3" align="center">Things To Do</Typography>
        <TodoList todos={todos} deleter={deleteTodo}/>
        <TodoEntryForm adder={addTodo} />
      </Paper>
    </Container>
  );
}