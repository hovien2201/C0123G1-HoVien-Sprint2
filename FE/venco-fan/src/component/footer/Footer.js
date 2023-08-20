import '../header.css'
export function Footer() {
    return(
        <>
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact" style={{marginTop:"5%"}}>
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="contact-about">
            <h3>Venco Fan</h3>
            <p>
              Bring us coolness, enjoy a joyful life without worrying about heat
            </p>
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 mt-4 mt-md-0"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="info">
            <div>
              <i className="ri-map-pin-line" />
              <p>
                A108 Tran Hung Dao Street
                <br />
                Da Nang, DN 535022
              </p>
            </div>
            <div>
              <i className="ri-mail-send-line" />
              <p>vencofan@example.com</p>
            </div>
            <div>
              <i className="ri-phone-line" />
              <p>+84222222222</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-12"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
            © Copyright <strong>Venco Fan</strong>. All Rights Reserved
          </div>
          <div className="credits">

            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" className="scrollto">
              Home
            </a>
            <a href="#about" className="scrollto">
              About
            </a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>

    )
}