import React from 'react';
import { Link } from 'react-router-dom';
import "./css/adminlte.min.css";

const Header = () => {
  return (
    // Thanh điều hướng
    <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMFLWtf93ZuIrT5ANW3Da9Y4PA-nOMzrbeC0LZuFycdKgwvLssCSMc0oT6fL7IvgsBsg&usqp=CAU" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: 0.8, width: "40px", marginRight:"5px" }} />
          <span className="brand-text font-weight-light">Quản lý sách</span>
        </a>

        <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
          {/* Các liên kết điều hướng */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/trangchu" className="nav-link">Trang chủ</a>
            </li>
            <li className="nav-item">
              <a href="/quansach" className="nav-link">Quản lý sách</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">Login</a>
            </li>
            <li className="nav-item dropdown">
              <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Danh mục</a>
              <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                <li><a href="#" className="dropdown-item">Một số hành động </a></li>
                <li><a href="#" className="dropdown-item">Một số hành động khác</a></li>
  
                <li className="dropdown-divider"></li>
  
                {/* Danh mục cấp hai */}
                <li className="dropdown-submenu dropdown-hover">
                  <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Di chuột để thực hiện hành động</a>
                  <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                    <li>
                      <a tabIndex="-1" href="#" className="dropdown-item">Danh mục cấp 2</a>
                    </li>
  
                    {/* Danh mục cấp ba */}
                    <li className="dropdown-submenu">
                      <a id="dropdownSubMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Danh mục cấp 2</a>
                      <ul aria-labelledby="dropdownSubMenu3" className="dropdown-menu border-0 shadow">
                        <li><a href="#" className="dropdown-item">Danh mục cấp 3</a></li>
                        <li><a href="#" className="dropdown-item">Danh mục cấp 3</a></li>
                      </ul>
                    </li>
                    {/* Kết thúc danh mục cấp ba */}
  
                    <li><a href="#" className="dropdown-item">Danh mục cấp 2</a></li>
                    <li><a href="#" className="dropdown-item">Danh mục cấp 2</a></li>
                  </ul>
                </li>
                {/* Kết thúc danh mục cấp hai */}
              </ul>
            </li>
          </ul>
  
          {/* Mẫu tìm kiếm */}
          <form className="form-inline ml-0 ml-md-3">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Tìm kiếm" aria-label="Tìm kiếm" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
  
        {/* Các liên kết điều hướng bên phải */}
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          {/* Thanh menu thả xuống tin nhắn */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fas fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Tin nhắn */}
                <div className="media">
                  <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                    </h3>
                    <p className="text-sm">Gọi điện cho tôi khi bạn có thể...</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> Cách đây 4 giờ</p>
                  </div>
                </div>
                {/* Kết thúc tin nhắn */}
              </a>
              <div className="dropdown-divider"></div>
              {/* Thêm các tin nhắn khác */}
            </div>
          </li>
          {/* Thanh menu thả xuống thông báo */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-header">15 Thông báo</span>
              <div className="dropdown-divider"></div>
              {/* Thêm các thông báo khác */}
            </div>
          </li>
          {/* Nút thanh bên điều khiển */}
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
              <i className="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
