import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../header.css'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

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
              <NavLink to='/'>Venco Fan</NavLink>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          </div>
          <nav id="navbar" className="navbar">
            <ul >
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
              <li style={{
                display: "flex", textAlign: "center",
                alignItems: "center", fontWeight: "300", marginLeft: "5%"
              }}>
                {isLogin ?
                  (
                    <>
                      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}
                        className="nav-info-user">
                        <DropdownToggle
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                            fontFamily: "var(--font-secondary)"
                          }}
                          className="nav-link"
                        >
                          username
                        </DropdownToggle>
                        <DropdownMenu className="abc">

                          <Link to="/nav/info-store" className="dropdown-item "
                            style={{ color: "black" }}>Quản lý cửa hàng<i
                              className="fa-solid fa-list-check"></i></Link>
                          <a className="dropdown-item " onClick={() => handlerLogout()}
                            style={{ color: "black" }}>Đăng xuất<i
                              className="fa-solid fa-right-from-bracket"></i></a>
                        </DropdownMenu>
                      </Dropdown>
                      <i style={{ marginLeft: "0.5rem" }} className="fa-regular fa-user"></i>
                    </>
                  )
                  :
                  (
                    <>
                      <NavLink to="/login" className='font-a-header btn btn-outline-info'
                        style={{ fontSize: '20px', padding: "5% 5% 5% 5%" }}><i class="bi bi-person" style={{ fontSize: '25px', }}></i>Login</NavLink>

                    </>
                  )
                }
              </li>
              <NavLink to='/cart' title='Shoping Cart'>
              <ShoppingCartOutlinedIcon style={{marginLeft:"10%"}} />
              </NavLink>
              
            </ul>


          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}

    </>


  )

}


