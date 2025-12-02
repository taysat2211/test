"use client";
import "./page.css";
import Carousel from "./components/carousel/carousel";
import Section from "./components/section/section";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ZoomImage from "./components/zoom-image/zoom-image";
import Slider from "./components/slide/slider";
import ImageSlider from "./components/slide/image-slider";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();
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
      id: "/news/huong-dan-xin-giay-phep-xay-dung-nha-o",
      image: "images/project/CELADON-APARTMENT.jpg",
      title: "Hướng dẫn xin giấy phép xây dựng nhà ở chi tiết 2025: Hồ sơ, Lệ phí",
      description: "Xin giấy phép xây dựng là một trong những vấn đề pháp lý cần được tiến hành trước khi xây dựng nhà ở. Để có thể tiến hành xây dựng công trình bắt buộc phải có giấy phép xây dựng, trừ vài trường hợp đặc biệt."
    },
    {
      id: "/news/mau-cua-go-noi-len-dieu-gi",
      image: "images/project/master-villa/4.jpg",
      title: "Màu của gỗ nói lên điều gì?",
      description: "Từ lâu, gỗ được xem như vật liệu quen thuộc trong các không gian nội thất. Mỗi loại gỗ sẽ có đặc tính sinh học và màu sắc khác nhau. Vậy màu của gỗ nói lên điều gì? Mời bạn theo dõi bài viết dưới đây để tìm hiểu chi tiết hơn nhé."
    },
    {
      id: "/news/loi-thiet-ke-chieu-sang",
      image: "images/project/master-villa/3.jpg",
      title: "3 Lỗi chiếu sáng phổ biến sẽ phá vỡ không gian nhà bạn",
      description: "Ánh sáng là một trong những yếu tố quan trọng góp phần tạo nên giá trị thẩm mỹ cho một không gian. Tuy nhiên, trong quá trình thiết kế nội thất, nhiều gia chủ thường mắc 3 lỗi chiếu sáng phổ biến sẽ phá vỡ không gian, gây ra nhiều ảnh hưởng trong học tập, làm việc hay trong sinh hoạt hàng ngày."
    },
    {
      id: "/news/phong-cach-industrial",
      image: "images/project/milktea-bd/6.jpg",
      title: "Phong cách Industrial là gì? 13 đặc trưng của phong cách Industrial trong thiết kế nội thất",
      description: "Nếu bạn thuộc tuýp người ưa chuộng nét đẹp mộc mạc, tự nhiên nhưng vẫn thể hiện được sự mạnh mẽ, táo bạo và tinh tế thì nên cân nhắc lựa chọn phong cách Industrial - một phong cách đang làm mưa làm gió tại thị trường Việt Nam."
    },
    {
      id: "/news/phong-cach-thiet-ke-co-dien",
      image: "images/project/FLORA NOVIA APARTMENT/7.jpg",
      title: "Phong cách thiết kế cổ điển là gì? 7 đặc trưng trong thiết kế nội thất",
      description: "Ra đời từ rất sớm và là một trong những phong cách hiếm hoi tồn tại, phát triển vượt trội cho đến thời điểm hiện tại. Phong cách nội thất cổ điển luôn để lại cho người nhìn những ấn tượng sâu sắc bởi sự xa hoa, tráng lệ của mình."
    },
    {
      id: "/news/phong-cach-indochine-dong-duong",
      image: "images/project/indochine-villa/1.jpg",
      title: "Phong cách Indochine là gì? Đặc trưng thiết kế nội thất nhà",
      description: "Phong cách Indochine ( Đông Dương) - bản giao hưởng đầy màu sắc giữa 2 nền văn hóa phương Đông và phương Tây sẽ khiến chúng ta phải đắm chìm khi chiêm ngưỡng. Không chỉ vì dấu ấn thời gian được thể hiện trong những mẫu thiết kế hay sự uy nghi đồ sộ mà kiến trúc Đông Dương còn giúp chúng ta “sống lại” trong một bầu trời mới, một Việt Nam rất xưa và rất riêng."
    },
    {
      id: "/news/phong-cach-thiet-ke-nhiet-doi-tropical-style",
      image: "images/project/parkview-bd/10.jpg",
      title: "Phong cách nhiệt đới (Tropical style) là gì? Đặc trưng phong cách Tropical trong thiết kế",
      description: "Với đa dạng phong cách thiết kế nội thất trên thị trường hiện nay, phong cách nhiệt đới (phong cách tropical) lại nổi lên như một làn gió mới đem đến nguồn cảm hứng bất tận cho không gian sống. Với sắc xanh của mây trời, biển cả, cây cối kết hợp cùng nắng và gió phong cách tropical sẽ mang thiên nhiên, khí hậu vùng nhiệt đới vào trong căn nhà của bạn."
    },
  ];

  const partners = [
    {
      src: 'images/partners/1.png',
      alt: 'Đại Phúc Group'
    },
    {
      src: 'images/partners/2.png',
      alt: 'An Cường'
    },
    {
      src: 'images/partners/3.png',
      alt: 'Dulux'
    },
    {
      src: 'images/partners/4.png',
      alt: 'Hafele'
    },
    {
      src: 'images/partners/5.png',
      alt: 'HimLam Group'
    },
    {
      src: 'images/partners/6.png',
      alt: 'Hưng Thịnh'
    },
    {
      src: 'images/partners/7.png',
      alt: 'Malloca'
    },
    {
      src: 'images/partners/9.png',
      alt: 'Blum'
    }
  ];
  const redirectToPage = (path) => {
    router.push(path);
  }
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

      <div>
        <Section title="DỰ ÁN NỔI BẬT">
          <Slider items={designs} maxItemDisplay={5} textAlign="text-end"/>
        </Section>
      </div>

      <div>
        <Section
          title="TIN TỨC DLUXEHOUSE"
        >
          <Slider items={news} maxItemDisplay={5} textAlign="text-center" cardBodyStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black' }} onClick={redirectToPage}/>
        </Section>
      </div>

      {/* About us */}
      <div className="mt-2 information">
        <img src="images/about-us/about-us.jpg" alt="Về chúng tôi" className="banner" />
        <div className="about-us p-5">
          <div className="heading">GIỚI THIỆU VỀ CHÚNG TÔI</div>
          <div className="content">Công ty với đội ngũ thiết kế trẻ, nhiệt huyết, sáng tạo luôn học hỏi, cập nhật các xu hướng thiết kế và kỹ thuật mới nhất.
             Với thế mạnh chủ lực là tư vấn thiết kế kiến trúc nội thất tinh thần trách nhiệm cao.&nbsp; 
            <b>Dluxe House</b> đã tự tin khẳng định chất lượng dịch vụ của mình với các đối tác.
          </div>
        </div>
        <div className="partner">
            <div style={{height: '100%'
            }}>
              <ImageSlider items={partners} maxItemDisplay={5}/>
            </div>
        </div>
      </div>
    </div> 
  );
}
