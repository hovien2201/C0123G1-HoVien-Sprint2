export function Content() {
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
      <main id="main">
        
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Fan</h2>
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
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
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
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
      </main>
      {/* End #main */}
    </>

  )
}