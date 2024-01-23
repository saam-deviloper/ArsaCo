import React from "react";
import exploreVector from "../../Assets/Icons/explore-vector.png";
import logo from "../../Assets/Icons/logo.png";
import MessengerVector from "../../Assets/Icons/messenger-vector.png";
import profileVector from "../../Assets/Icons/profile-vector.png";
import projectVector from "../../Assets/Icons/project-vector.png";
import walletVector from "../../Assets/Icons/wallet-vector.png";
import "./Header.module.css";
export const Header = () => {
  return (
    <header  className=" mb-1 w-2xl">
      <nav
      style={{ backgroundColor: "#DEEBEC" }}
        className="mx-auto flex w-auto h-12 items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex mr-auto">
          <a href="/" className="">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex justify-between align-middle mr-auto">
          <a href="/" className="mr-20 ">
            <div className="flex-col justify-center align-middle m-auto">
              <img
                style={{ height: "15px", width: "16px" }}
                className="m-auto"
                src={MessengerVector}
                alt="logo"
              />
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                ME
              </span>
              <span className="text-yellow-600 text-[8px] font-semibold font-['Saira']">
                S
              </span>
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                SENGER
              </span>
            </div>
          </a>
          <a href="/" className="mr-20 ">
            <img
              style={{ height: "15px", width: "16px" }}
              className="m-auto"
              src={exploreVector}
              alt="logo"
            />

            <div>
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                E
              </span>
              <span className="text-yellow-600 text-[8px] font-semibold font-['Saira']">
                X
              </span>
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                PLORE
              </span>
            </div>
          </a>
          <a href="/" className="mr-20 ">
            <img
              style={{ height: "15px", width: "16px" }}
              className="m-auto"
              src={projectVector}
              alt="logo"
            />

            <div>
              <span className="text-yellow-600 text-[8px] font-semibold font-['Saira']">
                PROJE
              </span>
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                C
              </span>
              <span className="text-yellow-600 text-[8px] font-semibold font-['Saira']">
                T
              </span>
            </div>
          </a>
          <a href="/" className="mr-20 ">
            <img
              style={{ height: "15px", width: "16px" }}
              className="m-auto"
              src={profileVector}
              alt="logo"
            />

            <div>
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                PRO
              </span>
              <span className="text-yellow-600 text-[8px] font-semibold font-['Saira']">
                F
              </span>
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                ILE
              </span>
            </div>
          </a>
          <a href="/" className="mr-20 ">
            <img
              style={{ height: "15px", width: "16px" }}
              className="m-auto"
              src={walletVector}
              alt="logo"
            />

            <div>
              <span className="text-yellow-600 text-[8px] font-semibold font-['Saira']">
                W
              </span>
              <span className="text-emerald-800 text-[8px] font-semibold font-['Saira']">
                ALLET
              </span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};
