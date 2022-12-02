import { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default function TodoList({ todos, deleter }) {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <Fragment key={todo.id}>
          <ListItem>
            <span onClick={() => deleter(todo.id)}>{todo.content}</span>
          </ListItem>
          <Divider />
        </Fragment>
      );
    })
  ) : (
    <p>No todos left</p>
  );
  return <List style={{marginTop: 20}}>{todoList}</List>;
}