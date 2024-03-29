import { useEffect, useState } from "react";

import { IconButton } from "@mui/material";

import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

import { Data } from "../data";

const Nav = () => {
  const testz = () => {
    console.log(window.innerWidth);
  };

  const [toggle, setToggle] = useState(() => {
    if (window.innerWidth > 700) {
      return true;
    } else {
      return false;
    }
  });

  const [indexz, setIndexz] = useState(0);

  const handleClicklink = (inz) => {
    console.log("i have been clicked");
    setIndexz(inz);
  };

  return (
    <>
      <nav className="nav">
        <div className="container nav__flex">
          <div className="nav__img">
            <img src="./img/Asset 4.svg" alt="" />
          </div>

          <div className="nav__trans">
            <ul>
              {Data.nav.map((na, index) => {
                return (
                  <li
                    onClick={(e) => {
                      handleClicklink(index);
                    }}
                    className={index === indexz ? "active-link" : ""}
                    key={index}
                  >
                    <a href={`#${na}`}>{na}</a>
                  </li>
                );
              })}
            </ul>
            <div className="nav__trans--div">
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100083415037542"
              >
                <IconButton>
                  {" "}
                  <FacebookOutlined sx={{ color: "white" }} />{" "}
                </IconButton>
              </a>
              <a target="_blank" href="https://github.com/DOGGED-DESIGNS/">
                <IconButton>
                  {" "}
                  <GitHub sx={{ color: "white" }} />{" "}
                </IconButton>
              </a>
              <a target="_blank" href="https://twitter.com/Dogged_Tech">
                <IconButton>
                  {" "}
                  <Twitter sx={{ color: "white" }} />{" "}
                </IconButton>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dogged_designs/"
              >
                <IconButton>
                  {" "}
                  <Instagram sx={{ color: "white" }} />{" "}
                </IconButton>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/uzoechi-jerry-16b872240/"
              >
                <IconButton>
                  {" "}
                  <LinkedIn sx={{ color: "white" }} />{" "}
                </IconButton>
              </a>
            </div>
          </div>
        </div>

        <div className="ham forham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <nav className="naz nav">
        <div className="container nav__flex">
          <div className="nav__img">
            <img src="./img/Asset 4.svg" alt="" />
          </div>

          <div className={toggle ? "nav__trans ani1 " : "nav__trans ani2"}>
            <ul>
              {Data.nav.map((na, index) => {
                return (
                  <li
                    onClick={(e) => {
                      handleClicklink(index);
                    }}
                    className={index === indexz ? "active-link" : ""}
                    key={index}
                  >
                    <a href={`#${na}`}>{na}</a>
                  </li>
                );
              })}
            </ul>
            <div className="nav__trans--div">
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100083415037542"
              >
                <IconButton>
                  {" "}
                  <FacebookOutlined />{" "}
                </IconButton>
              </a>
              <a target="_blank" href="https://github.com/DOGGED-DESIGNS/">
                <IconButton>
                  {" "}
                  <GitHub />{" "}
                </IconButton>
              </a>
              <a target="_blank" href="https://twitter.com/Dogged_Tech">
                <IconButton>
                  {" "}
                  <Twitter />{" "}
                </IconButton>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dogged_designs/"
              >
                <IconButton>
                  {" "}
                  <Instagram />{" "}
                </IconButton>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7098523738731651072/"
              >
                <IconButton>
                  {" "}
                  <LinkedIn />{" "}
                </IconButton>
              </a>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={toggle ? "ham forham" : "ham"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {/* <nav classNameName="nav">
        <div classNameName="container nav__flex">
          <div classNameName="nav__img">
            <img src="./img/Asset 4.svg" alt="" />
          </div>

          <div classNameName={toggle ? "nav__trans ani1 " : "nav__trans ani2"}>
            <ul>
              {Data.nav.map((na, index) => {
                return (
                  <li
                    onClick={(e) => {
                      handleClicklink(index);
                    }}
                    classNameName={index === indexz ? "active-link" : ""}
                    key={index}
                  >
                    <a href="#">{na}</a>
                  </li>
                );
              })}
            </ul>
            <div classNameName="nav__trans--div">
              <div>
                <img src="./img/insta.svg" alt="" />
              </div>
              <div>
                <img src="./img/facebook.svg" alt="" />
              </div>
              <div>
                <img src="./img/link.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          classNameName={toggle ? "ham forham" : "ham"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav> */}
    </>
  );
};

export default Nav;
