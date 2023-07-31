import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../header.css'

export function Header() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState();
    const token = localStorage.getItem('token');

    // const [decodedToken, setDecodedToken] = useState("");
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    useEffect(() => {
        if (token) {
            setIsLogin(true);
        } else {
            // Xử lý khi không có token trong localStorage
        }
    }, [token]);


    const handlerLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        setIsLogin(false);
        toast.success("Đăng xuất thành công !!");
        navigate("/login")
    };
    // console.log(decodedToken.sub)
    return (
        <>
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="logo">
        <h1>
          <a href="index.html">Venco Fan</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              Abouts
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link scrollto " href="#portfolio">
              Fan
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#team">
              Team
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Drop Down</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <NavLink className="getstarted scrollto" to="/login">
              Get Started
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
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
</>


    )

}


