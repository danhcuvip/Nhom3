import React, { useState } from 'react';
import './css/css.css';
function QLSach() {
  const [products, setProducts] = useState([
    // Dữ liệu sản phẩm
  ]);

  const [formData, setFormData] = useState({
    id: '',
    imageUrl: '',
    name: '',
    price: '',
    category: '',
    author: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    // Thêm sản phẩm vào danh sách
    setProducts([...products, formData]);
    setFormData({
      id: '',
      imageUrl: '',
      name: '',
      price: '',
      category: '',
      author: '',
      description: '',
    });
  };

  const handleDelete = (id) => {
    // Xóa sản phẩm theo ID
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleEdit = (id) => {
    // Sửa sản phẩm theo ID
    // Lấy sản phẩm cần sửa từ danh sách products
    const productToEdit = products.find((product) => product.id === id);
    setFormData(productToEdit);
  };

  return (
    <div>
      <div className="product-management">
        <div className="form-container">
          <h2>Quản lý Sản phẩm</h2>
          <div>
            <label>ID:</label>
            <input type="text" name="id" value={formData.id} onChange={handleChange} />
          </div>
          <div>
            <label>Hình:</label>
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
          </div>
          <div>
            <label>Tên:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label>Giá:</label>
            <input type="text" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div>
            <label>Loại sách:</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} />
          </div>
          <div>
            <label>Tác giả:</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} />
          </div>
          <div>
            <label>Mô tả:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </div>
          <button className="add-button" onClick={handleAdd}>Thêm</button>
        </div>
        <div className="products-list">
          <ul>
            {products.map((product) => (
              <li key={product.id} className="product-item">
               {product.imageUrl} {product.name} - {product.price} đ
                <button className="edit-button" onClick={() => handleEdit(product.id)}>Sửa</button>
                <button className="delete-button" onClick={() => handleDelete(product.id)}>Xóa</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QLSach;
