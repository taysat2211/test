import React from "react";
import "./footer.css";
import Section from "../section/section";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="container-fluid text-left summary">
        <div className="row p-5">
          <div className="col-3">
            <strong>CÔNG TY TNHH TK VÀ XD DLUXE HOUSE</strong>
            <p className="footer-text-normal">Địa chỉ: 140 Cần Giuộc, phường Phú Định, TP Hồ Chí Minh, Việt Nam</p>
            <p className="footer-text-normal">Phone: Mr.Vinh  0978 025 395 - Mr.Anh  0982 463 893</p>
            <p className="footer-text-normal">Email: wnguyen.designer@gmail.com</p>
          </div>
          <div className="col-6">
            <strong>Thiết kế kiến trúc</strong> <br />
            <a href="#">Giới thiệu</a> <br />
            <a href="#">Tin tức</a> <br />
            <a href="#">Báo giá</a> <br />
            <a href="#">Tuyển dụng</a> <br />
            <a href="#">Liên hệ</a> <br />
          </div>
          <div className="col-3">
            <strong>MẠNG XÃ HỘI</strong> <br />
            <a href="" className="text-secondary me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
             <a href="" className="text-secondary me-4">
               <i className="fab fa-twitter"></i>
             </a>
             <a href="" className="text-secondary me-4">
               <i className="fab fa-google"></i>
             </a>
             <a href="" className="text-secondary me-4">
               <i className="fab fa-instagram"></i>
             </a>
             <a href="" className="text-secondary me-4">
               <i className="fab fa-linkedin"></i>
             </a>
             <a href="" className="text-secondary me-4">
               <i className="fab fa-github"></i>
             </a>
          </div>
        </div>
        <div
          className="text-center p-3 copyright"
        >
           © 2025 Bản quyền thuộc về:
           <a className="text-white" href="#"> dluxehouse.vn</a>
        </div>
      </footer>
  );
};

export default Footer;
