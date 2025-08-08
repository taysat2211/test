import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/logo.png'
import "./header.css";

function Header() {
  return (
    <nav className="header-custom navbar navbar-expand-lg px-4  mt-5 sticky-top">
      <div className="container-fluid justify-content-between align-items-center">
        <div className="d-none d-lg-block" style={{ width: "33%" }}></div>
        <div className="text-center" style={{ width: "33%" }}>
          <Link href="/">
            <Image
              src='/logo.png'
              alt="Logo"
              height={80}
              width={80}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div className="h-3">
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
                  <a className="nav-link active text-light" aria-current="page" href="/">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/introduce">
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="/category"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Thiết kế-Thi công
                  </a>
                  <ul className="dropdown-menu custom-dropdown">
                    <li>
                      <a className="dropdown-item text-light" href="#">
                        Nhà ở
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-light" href="#">
                        Biệt thự
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-light" href="#">
                        Nội thất căn hộ
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" aria-disabled="true" href="/prices">
                    Báo giá
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" aria-disabled="true" href="/news">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" aria-disabled="true" href="/contact">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
