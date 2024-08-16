import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const navigate = useNavigate();
  

  function publish(){
    navigate("/books/create")
  }function edit(){
    navigate("/books/create")
  }function getabook(){
    navigate("/books/create")
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Your BOOKSTORE</h1>

      <div>
        Are you an Author
        <button onClick={publish}>
          Do You want to PUBLISH a book
        </button>
        <button onClick={edit}>
          Do You want to EDIT a book
        </button>
        <button onClick={getabook}>
          Do You want to GET a book
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          
          {books.map((book) => (
            <div key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
             
            </div>
          ))}
        </div>
      )}

      
    </div>
  );
}

export default Home;
