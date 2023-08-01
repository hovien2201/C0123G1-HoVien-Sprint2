import { Carousel } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

export function Details() {
  return (
    <>
      <main id="main" style={{ marginTop: "5%" }}>
        <section className="layout_padding ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="row">
                    <div className="col-md-7 p-relative r-left">
                      <div className="full back_blog text_align_center padding_right_left_15">
                        {/* <img src="https://cdn.nguyenkimmall.com/images/companies/_1/Content/tin-tuc/gia-dung/9-loai-quat-thong-dung-dung-trong-gia-dinh-tren-thi-truong-viet-nam-h5.jpg" alt="#" style={{ width: "80%" }} /> */}
                        <Carousel >
                          <Carousel.Item >
                            <img
                              className="d-block "
                              src="https://cdn.nguyenkimmall.com/images/companies/_1/Content/tin-tuc/gia-dung/9-loai-quat-thong-dung-dung-trong-gia-dinh-tren-thi-truong-viet-nam-h5.jpg"
                              alt="First slide"
                              style={{ width: "80%" ,marginLeft:"10%"}}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block"
                              src="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                              alt="Second slide"
                              style={{ width: "80%" ,marginLeft:"10%"}}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block "
                              src="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                              alt="Third slide"
                              style={{ width: "80%" ,marginLeft:"10%"}}
                            />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="full heading_s1">
                        <h1 style={{ color: "#3498db" }}>Standing Fan f2.1</h1>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                        </p>
                        <p>STANDING FAN</p>
                        <p>Quantity in stock: 20</p>
                        <h3 style={{ color: "#3498db" }}>Price: 100 $</h3>
                        <div className="d-flex">
                          <p style={{ marginRight: "2%" }}>Quantity:</p><div className="d-flex">
                            <button type="button" className="minus"><span>-</span></button>
                            <input type="number" id="quantity_64c88c2c676ec"
                              className="input" min="0" max />
                            <button type="button" value="+" className="plus"><span>+</span></button>
                          </div>
                        </div>

                      </div>
                      <div className="d-flex" style={{marginTop:"5%"}}>
                        <div className="full" style={{  marginRight: "10%", marginLeft: "10%" }} title="Back Home">
                         <Link to='/'>
                            <ArrowBackIcon style={{fontSize:"200%"}}/>
                         </Link>
                        </div>
                        <div className="full">

                        <Link to='/'>
                            <AddShoppingCartIcon style={{fontSize:"200%"}}/>
                         </Link>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Other products</h2>
            </div>
            <Carousel  interval={5000}>
              <Carousel.Item>
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 1"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="#" title="Add to Cart">
                            <i className="bi bi-plus" />
                          </a>
                          <a href="#" title="More Details">
                            <i className="bi bi-link-45deg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Web 3"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 2"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 1"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="#" title="Add to Cart">
                            <i className="bi bi-plus" />
                          </a>
                          <a href="#" title="More Details">
                            <i className="bi bi-link-45deg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Web 3"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 2"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 1"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="#" title="Add to Cart">
                            <i className="bi bi-plus" />
                          </a>
                          <a href="#" title="More Details">
                            <i className="bi bi-link-45deg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Web 3"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 2"
                          >
                            <i className="bx bx-plus" />
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Carousel.Item>
            </Carousel>

          </div>
        </section>
        {/* End Portfolio Section */}
      </main>
      {/* End #main */}
    </>

  )
}