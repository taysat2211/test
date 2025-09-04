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
      src: "videos/1.mp4",
      title: "Welcome",
      id: 1
    },
    {
      src: "videos/2.mp4",
      title: "Contact",
      id: 2
    },
    {
      src: "videos/3.mp4",
      title: "Type",
      id: 3
    }
  ];
  const categories = [
    {
      src: 'images/design-build/VILLA.jpg',
      name: 'BIỆT THỰ',
      id: 1
    },
    {
      src: 'images/design-build/APARTMENT.jpg',
      name: 'CHUNG CƯ',
      id: 2
    },
    {
      src: 'images/design-build/COFFEE-HOUSE.jpg',
      name: 'COFFEE HOUSE',
      id: 3
    },
    {
      src: 'images/design-build/F&B.jpg',
      name: 'F&B',
      id: 4
    },
    {
      src: 'images/design-build/TOWNHOUSE.jpg',
      name: 'NHÀ PHỐ',
      id: 5
    },
    {
      src: 'images/design-build/OFFICE.jpg',
      name: 'OFFICE',
      id: 6
    },
    {
      src: 'images/design-build/SHOP-HOUSE.jpg',
      name: 'SHOP HOUSE',
      id: 7
    },
    {
      src: 'images/design-build/SPA.jpg',
      name: 'SPA',
      id: 8
    }
  ];
  const designs = [
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "CELADON CITY APARTMENT",
      subtitle: "Tân Phú"
    },
    {
      image: "images/project/NICKI-NGUYEN-HOUSE.jpg",
      title: "NICKI NGUYEN HOUSE"
    },
    {
      image: "images/project/PASTA-FRESCA.jpg",
      title: "PASTA FRESCA",
      subtitle: "Quận 2"
    },
    {
      image: "images/project/CHANCOS-FASHION.jpg",
      title: "CHANCOS FASHION",
      subtitle: "Đà Nẵng"
    },
    {
      image: "images/project/avu-house/3.jpg",
      title: "AVU House",
      subtitle: "Hà Nội"
    },
    {
      image: "images/project/indochine-villa/2.jpg",
      title: "INDOCHINE VILLA",
      subtitle: "Đà Nẵng"
    },
    {
      image: "images/project/master-villa/1.jpg",
      title: "Master Villa",
      subtitle: "Quận 3"
    },
    {
      image: "images/project/CLAB-COFFEE.jpg",
      title: "CLAB COFFEE",
      subtitle: "Tân Bình"
    },
    {
      image: "images/project/ymc-louge/thumb.jpg",
      title: "YMC LOUGE",
      subtitle: "Quận 1"
    },
    {
      image: "images/project/english-center/1.jpg",
      title: "English Center",
      subtitle: "Quận 1"
    },
    {
      image: "images/project/pq/1.jpg",
      title: "MILKTEA PQ",
      subtitle: "Quận 7"
    },
    {
      image: 'images/project/ag-coffee/2.jpg',
      title: "AG Coffee",
      subtitle: "Quận 1"
    }
  ];

  const news = [
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "TOP NHỮNG MẪU NHÀ ĐẸP 2025",
      description: "Cùng Dluxe House chiêm ngưỡng những mẫu thiết kế kiến trúc đẹp"
    },
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "TOP NHỮNG MẪU NHÀ ĐẸP 2025",
      description: "Cùng Dluxe House chiêm ngưỡng những mẫu thiết kế kiến trúc đẹp"
    },
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "TOP NHỮNG MẪU NHÀ ĐẸP 2025",
      description: "Cùng Dluxe House chiêm ngưỡng những mẫu thiết kế kiến trúc đẹp"
    },
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "TOP NHỮNG MẪU NHÀ ĐẸP 2025",
      description: "Cùng Dluxe House chiêm ngưỡng những mẫu thiết kế kiến trúc đẹp"
    },
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "TOP NHỮNG MẪU NHÀ ĐẸP 2025",
      description: "Cùng Dluxe House chiêm ngưỡng những mẫu thiết kế kiến trúc đẹp"
    },
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "TOP NHỮNG MẪU NHÀ ĐẸP 2025",
      description: "Cùng Dluxe House chiêm ngưỡng những mẫu thiết kế kiến trúc đẹp"
    },
    {
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "TOP NHỮNG MẪU NHÀ ĐẸP 2025",
      description: "Cùng Dluxe House chiêm ngưỡng những mẫu thiết kế kiến trúc đẹp"
    },
  ];
  return (
    <div>
      <Header />
      <Carousel carouselItems={carouselItems} />
      <div className="product-portfolio">
        <div className="container-fluid">
          <div className="row g-2 mt-3">
            {categories && categories.slice(0, 4).map(item => (
              <div className="col card h-30" key={item.id}>
                <ZoomImage className="card-img" src={item.src} alt={item.name} link="#" />
                <div className="card-body" style={{ height: '10%', padding: '0' }}>
                  <b className='card-title' style={{ verticalAlign: 'middle' }}>{item.name}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="mt-2 bolder-text">Chuyên thiết kế thi công</h2>
        <div className="container-fluid">
          <div className="row g-2 h-30">
            {categories && categories.slice(4, 8).map(item => (
              <div className="col card h-30" key={item.id}>
                <ZoomImage className="card-img" src={item.src} alt={item.name} link="#" />
                <div className="card-body" style={{ height: '10%', padding: '0' }}>
                  <b className='card-title' style={{ verticalAlign: 'middle' }}>{item.name}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <p className="mt-3">Liên hệ DLUXE để được tư vấn và báo giá</p>
          <a className="mt-3 px-5 py-2 mb-3 register-button">
            ĐĂNG KÝ TƯ VẤN & BÁO GIÁ
          </a>
        </div>
      </div>

      {/* Section 3: Represent project */}
      <div>
        <Section title="DỰ ÁN NỔI BẬT">
          <Slide items={designs} maxItemDisplay={5} textAlign="text-end"/>
        </Section>
      </div>

      <div>
        <Section
          title="TIN TỨC DLUXEHOUSE"
          subtitle="ĐĂNG KÝ TƯ VẤN"
          link="/contact"
        >
          <Slide items={news} maxItemDisplay={5} textAlign="text-center" cardBodyStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black' }}/>
        </Section>
      </div>

      {/* About us */}
      <div className="mt-2">
        <img src="images/about-us/about-us.jpg" alt="Về chúng tôi" className="banner" />
      </div>
    </div> 
  );
}
