import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const ResponsiveNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-end">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                اتصل بنا
              </NavLink>
              <NavLink
                to="/payment"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                طريقة الدفع
              </NavLink>
              <NavLink
                to="/fees"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                رسوم الاشتراك
              </NavLink>
              <NavLink
                to="/conditions"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                شروط قبول الابحاث
              </NavLink>
              <NavLink
                to="/committee"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                اللجنة المنظمة
              </NavLink>
              <NavLink
                to="/topics"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                محاور المؤتمر
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                عن المؤتمر
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger mx-4 custom-nav-link"
                    : "mx-4 custom-nav-link"
                }
              >
                الرئيسية
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ResponsiveNavbar;
