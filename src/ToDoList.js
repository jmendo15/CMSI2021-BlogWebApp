export default function TodoList({ todos }) {
    const todoList = todos.length ? (
      todos.map((todo) => <div key={todo.id}>{todo.content}</div>)
    ) : (
      <p>No todos left</p>
    );
    return <div>{todoList}</div>;
  }
  