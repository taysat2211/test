"use client";
import "./page.css";
import Carousel from "./components/carousel/carousel";
import Section from "./components/section/section";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ZoomImage from "./components/zoom-image/zoom-image";
import Slide from "./components/slide/slide";

export default function Home() {

  const carouselItems = [
    {
      src: "1.mp4",
      title: "Biệt thự"
    },
    {
      src: "2.mp4",
      title: "Văn phòng"
    },
    {
      src: "3.mp4",
      title: "Cửa hàng"
    }
  ];
  const designs = [
    {
      image: '../assets/images/project/ag-coffee/2.jpg',
      title: "AG Coffee",
      address: "Quận 1"
    },
    {
      image: "../assets/images/project/avu-house/3.jpg",
      title: "AVU House",
      address: "Hà Nội"
    },
    {
      image: "../assets/images/project/ymc-louge/thumb.jpg",
      title: "YMC LOUGE",
      address: "Quận 1"
    },
    {
      image: "../assets/images/project/master-villa/1.jpg",
      title: "Master Villa",
      address: "Quận 3"
    },
    {
      image: "../assets/images/project/english-center/1.jpg",
      title: "English Center",
      address: "Quận 1"
    },
    {
      image: "../assets/images/project/pq/1.jpg",
      title: "MILKTEA PQ",
      address: "Quận 7"
    },
    {
      image: "leopard-thumb.jpg",
      title: "JACKPOT",
      address: "Tân Bình"
    }
  ];
  return (
    <div>
      <Header />
      <Carousel carouselItems={carouselItems} />
      <div className="product-portfolio">
        <div className="container-fluid">
          <div className="row g-2">
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
          </div>
        </div>
        <h2 className="mt-2">Chuyên thiết kế thi công</h2>
        <div className="container-fluid">
          <div className="row g-2">
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
            <div className="col">
              <ZoomImage src="leopard-thumb.jpg" alt="Nhà phố" link="#" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="mt-3">Liên hệ Vconcept để được tư vấn và báo giá</p>
          <a className="register-button mt-3 px-5 mb-3">
            ĐĂNG KÝ TƯ VẤN & BÁO GIÁ
          </a>
        </div>
      </div>

      {/* khúc thứ 3: dự án nổi bật và tin tức */}
      <div>
        <Section title="Dự án nổi bật">
          <Slide items={designs} />
        </Section>
      </div>

      {/* <Section
        title="Cảm hứng thiết kế"
        link="https://www.youtube.com/channel/UCCYZjOW59lhh_mM3VUSe4sg"
      >
      </Section> */}
      <Section
        title="QUY TRÌNH LÀM VIỆC VỚI KHÁCH HÀNG"
        subtitle="ĐĂNG KÝ TƯ VẤN"
        link="/contact"
      >
      </Section>
      {/* <img src="carousel2.jpg" alt="quy trình làm việc" className="process" /> */}
      <Footer />
    </div>
  );
}
