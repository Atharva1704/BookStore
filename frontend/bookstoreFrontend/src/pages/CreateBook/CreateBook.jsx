import React, { useState } from 'react';
import Loading from '../../components/widgets/Loading'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = async () => {
    try {
      setLoading(true);
      const data = {
        title,
        author,
        publishYear,
      };
      await axios.post('http://localhost:3001/books', data);
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create Book</h1>
      {loading ? <Loading /> : ''}
      <div>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Publish Year</label>
          <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} />
        </div>
        <button onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  );
}

export default CreateBook;
