import { useState } from "react";
import { useModal } from "../../../../utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Button from "../../../../common/button";
import logo from "../../../../assets/images/logo.png";
import openseaIcon from "../../../../assets/images/icon/opensea.svg";

import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };
  return (
    <MobileMenuStyleWrapper className="bithu_mobile_menu">
      <div className="bithu_mobile_menu_content">
        <div className="mobile_menu_logo">
          {/* <img className="bithu_logo" src={logo} alt="bithu logo" /> */}
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="bithu_mobile_menu_list">
          <ul>
            <li className="mobile_menu_hide">
              <a href="#home">Home</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#about">About</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#team">Team</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#faq">FAQ</a>
            </li>
            {/* <li className="submenu mobile_submenu" onClick={handleSubmenu}>
              <a href="# ">Pages +</a>
              <ul
                className={`sub_menu_list mobile_sub_menu_list ${
                  isSubmenu === true && "submenu_hovered"
                }`}
              >
                <li className="mobile_menu_hide">
                  <a href="/">Home One</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/home-two">Home Two</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/home-three">Home Three</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/blogs">Latest Blog</a>
                </li>
                <li className="mobile_menu_hide">
                  <a href="/post">Blog Details</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <a href="# ">
            <img src={openseaIcon} alt="bithu social icon" />
          </a>
          <a href="# ">
            <FaTwitter />
          </a>
          {/* <a href="# ">
            <FaDiscord />
          </a> */}
        </div>
        <Button
          sm
          variant="hovered"
          className="connect_btn"
          onClick={() => walletModalHandle()}
        >
          <FaWallet /> Connect
        </Button>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
