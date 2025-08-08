import React from "react";
import "./footer.css";
import Section from "../section/section";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="container-fluid text-center text-white summary">
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#" className="text-white">Giới thiệu</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#" className="text-white">Tuyển dụng</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#" className="text-white">Hợp tác</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="" className="text-white">Hỗ trợ</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#" className="text-white">Liên hệ</a>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Công ty chúng tôi cam kết thực hiện đúng yêu cầu đã được thỏa thuận và ký kết.
                  Nếu bạn có bất cứ yêu cầu gì về thiết kế và xây dụng có thể liên hệ với chúng tôi thông qua fan page và zalo của chúng tôi.
                </p>
              </div>
            </div>
          </section>
          <section className="text-center mb-5">
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3 copyright"
        >
          © 2025 Bản quyền thuộc về:
          <a className="text-white" href="#"
          > dluxehouse.vn</a
          >
        </div>
      </footer>
  );
};

export default Footer;
