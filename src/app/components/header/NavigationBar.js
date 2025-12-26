import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./header.css";

const NavBar = (props) => {
    return (
        <nav className="navigation-bar navbar navbar-expand-lg px-4 sticky-top">
            <div className="container-fluid justify-content-between align-items-center">
                <div className="text-left" style={{ width: "33%" }}>
                    <Link href="/">
                        <Image
                            src="/images/logo-dark.png"
                            alt="Logo"
                            height={120}
                            width={120}
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
                                    <a className="nav-link active text-dark" aria-current="page" href="/">
                                        Trang chủ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/introduce">
                                        Giới thiệu
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-dark"
                                        href="/category"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Thiết kế-Thi công
                                    </a>
                                    <ul className="dropdown-menu custom-dropdown">
                                        <li>
                                            <a className="dropdown-item text-dark" href="#">
                                                Nhà ở
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-dark" href="#">
                                                Biệt thự
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-dark" href="#">
                                                Nội thất căn hộ
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" aria-disabled="true" href="/prices">
                                        Báo giá
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" aria-disabled="true" href="/news">
                                        Tin tức
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" aria-disabled="true" href="/contact">
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

export default NavBar;