import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-custom mt-5 sticky-top">
      <div className="logo">
        <img src="./logo-light.jpg" />
      </div>
      <nav className="h-3">
        <div className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/introduce">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/category"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Thiết kế-Thi công
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Nhà ở
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Biệt thự
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nội thất căn hộ
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/prices">
                  Báo giá
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/news">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/contact">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
