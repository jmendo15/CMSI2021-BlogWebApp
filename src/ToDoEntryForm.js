import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import uuidv4 from 'uuid/v4';

export default function TodoEntryForm( { adder }) {
  const [content, setContent] = useState('');
  function submit(e) {
    e.preventDefault();
    if (content.trim()) {
      adder({ id: uuidv4(), content });
    }
    setContent('');
  }
  return (
    <form onSubmit={submit}>
      <TextField
        label="Add Another"
        value={content}
        onChange={e => setContent(e.target.value)}
        margin="normal"
      />
    </form>
  )
}