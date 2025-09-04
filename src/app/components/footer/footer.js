import React from "react";
import "./footer.css";
import Section from "../section/section";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="container-fluid text-left summary">
        <div className="row p-5">
          <div className="col-6">
            <strong>CÔNG TY CP TƯ VẤN & THIẾT KẾ THI CÔNG DLUXE HOUSE</strong>
            <p className="footer-text-normal">6th floor, 222 Dien Bien Phu street, District 3, Ho Chi Minh City, Viet Nam</p>
            <p className="footer-text-normal">Mr.Vinh  0123 456 789 - Mr.Anh  0123 456 789</p>
            <p className="footer-text-normal">TestUI@gmail.com</p>
          </div>
          <div className="col-3">
            <strong>DANH MỤC MENU</strong> <br />
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
