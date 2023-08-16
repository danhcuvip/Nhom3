import React from 'react';
import { useState, useEffect } from 'react';
const products = [
  {
    id: 1,
    name: 'Sách A',
    price: 100000,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-viking-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 2,
    name: 'Sách B',
    price: 150000,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 3,
    name: 'Sách B',
    price: 200000,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 4,
    name: 'Sách B',
    price: 260000,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 5,
    name: 'Sách B',
    price: 50000,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 6,
    name: 'Sách B',
    price: 170000,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 7,
    name: 'Sách B',
    price: 150000,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 8,
    name: 'Sách B',
    price: 150,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 9,
    name: 'Sách B',
    price: 150,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  {
    id: 10,
    name: 'Sách B',
    price: 150,
    imageUrl: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-10-huyen-thoai-hy-lap-hay-nhat-moi-thoi-dai.jpg',
  },
  // Thêm các sản phẩm khác vào đây
];

function Home() {
  const [books, setBooks] = useState([]);
  const [sortedBooks, setSortedBook] = useState(books);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' cho sắp xếp tăng dần, 'desc' cho sắp xếp giảm dần

  useEffect(() => {
    fetch('http://localhost:3001/queryBook/queryBook')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const sortProductsByPrice = () => {
    let sorted;
    if (sortOrder === 'asc') {
      sorted = [...sortedBooks].sort((a, b) => b.price - a.price);
      setSortOrder('desc');
    } else {
      sorted = [...sortedBooks].sort((a, b) => a.price - b.price);
      setSortOrder('asc');
    }
    setSortedBook(sorted);
  
  };
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Canh giữa theo chiều ngang
    alignItems: 'center', // Canh giữa theo chiều dọc
    height: '100vh', // Chiều cao của container bằng chiều cao của viewport
    margin: '20px',
    marginTop: "250px"
  };

  const buttonStyle = {
    position: 'absolute',
    top: '70px',
    right: '20px',
    zIndex: 1,
  };

  const boxStyle = {
    width: '26%',
    margin: '10px',
    padding: '16px',
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    minHeight: '300px',
  };

  const imageStyle = {
    width: '180px',
    height: '250px',
    objectFit: 'cover',
  };

  const infoStyle = {
    marginTop: '10px',
  };

  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const priceStyle = {
    marginTop: '4px',
    color: '#e85a4f',
  };

  return (
    <div style={containerStyle}>
      {/* <button style={buttonStyle} onClick={sortProductsByPrice}>
      Sort list theo giá
      </button> */}
      {books.map(book => (
        <div style={boxStyle} key={books.id}>
          <img style={imageStyle} src={book.image} alt={book.Title} />
          <div>Title: {book.title}</div>
          <div>Author ID: {book.author_id}</div>
          <div>Publication Year: {book.publication_year}</div>
          <div>Genre: {book.genre}</div>
          <div>Quantity: {book.quantity}</div>
          <div>Location: {book.location}</div>
          <div>Description: {book.description}</div>
        </div>
      ))}
    </div>

  //   <div style={containerStyle}>
  //     <ul >
  //     <button style={buttonStyle} onClick={sortProductsByPrice}>
  //       Sort list theo giá
  //     </button>
  //     {books.map(book => (
  //       <li key={book.id} style={boxStyle}>
          
  //       </li>
  //     ))}
  //   </ul>
  // </div>
  );
}

export default Home;
