import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import ReplayIcon from '@mui/icons-material/Replay';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as service from '../../service/Service';
import { toast } from 'react-toastify';

export function Content() {
  const [productList, setProductList] = useState([])
  const getAllProducts = async() => {
    const rs = await service.getAllProduct()
    setProductList(rs)
  }
  const addCart = async(id) =>{
    await service.createShoppingcart(id,1)
    toast.success("Add to Cart seccuss!!")
  }
  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Grow your business with Venco Fan</h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>
                We are an outstanding fan supplier that brings coolness to life
              </h2>
              <div data-aos="fade-up" data-aos-delay={800}>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay={200}
            >
              <img src="quatnav.jpg" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main" className='container'>
        <div id="ctservicecmsblock" className='row'>

          <div className="service_container container">
            <div className="service-area">
              <div className="service-fourth service1">
                <div className="service-icon icon1" ><ElectricRickshawIcon className='set w-100' /></div>
                <div className="service-content">
                  <div className="service-heading">Free Shipping</div>
                  <div className="service-description">Lorem Ipsum is simply</div>
                </div>
              </div>
              <div className="service-fourth service2">
                <div className="service-icon icon2" ><WifiCalling3Icon className='set w-100' /> </div>
                <div className="service-content">
                  <div className="service-heading">Online Support</div>
                  <div className="service-description">Lorem Ipsum is simply</div>
                </div>
              </div>
              <div className="service-fourth service3">
                <div className="service-icon icon3" ><ReplayIcon className='set w-100' /></div>
                <div className="service-content">
                  <div className="service-heading">Money Back</div>
                  <div className="service-description">Lorem Ipsum is simply</div>
                </div>
              </div>
              <div className="service-fourth service4">
                <div className="service-icon icon4" ><SettingsIcon className='set w-100' /></div>
                <div className="service-content">
                  <div className="service-heading">Our Services</div>
                  <div className="service-description">Lorem Ipsum is simply</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section id="fan" className="portfolio row">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Featured Products</h2>
              <p>Choose your favorite cool sourcem</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">Steam fan</li>
                  <li data-filter=".filter-card">Standing fan</li>
                  <li data-filter=".filter-web">Wall fan</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              {productList.map((value,index) =>(
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src={value.image}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>{value.name}</h4>
                    <h3 style={{color:"white"}}>$ {value.price}</h3>
                    <p>{value.typeProduct.name}</p>
                    <div className="portfolio-links">
                      <a
                        href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a onClick={() => addCart(value.id)} title="Add to Cart">
                        <i className="bi bi-plus" />
                      </a>
                      <NavLink to={`/details/${value.id}`} title="More Details">
                        <i className="bi bi-link-45deg" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              ))}
              
              
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
      </main>
      {/* End #main */}
    </>

  )
}