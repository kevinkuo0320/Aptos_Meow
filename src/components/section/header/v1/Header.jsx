import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
//import logo from "../../../../assets/images/logo.png";
//import { AptosWalletName, useWallet } from "@manahippo/aptos-wallet-adapter"
import WalletButton from "./ConnectWalletButton";


const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  //useContext provider to store wallet
  //useEffect to check wallet address when changing address

  // useEffect(() => {
  //   const res = window.aptos.account().then(
  //     (data) => setCurrentAccount(data.address)
  //     );
  //     if(currentAccount != "") {
  //       setIsConnected(true)
  //     }
  //   console.log(currentAccount, "account address")

  // }, [currentAccount]);

    //disconnection section 
    // const disconnectMartian = async () => {
    //   const res = await window.aptos.disconnect()
    //   console.log(res)
    //   setIsConnected(false)
    // }

  return (
    <NavWrapper className="bithu_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="bithu_menu_sect">
          <div className="bithu_menu_left_sect">
            <div className="logo">
              <a href="/">
                {/* <img src={logo} alt="bithu nft logo" /> */}
              </a>
            </div>
          </div>
          <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
            <div className="bithu_menu_list">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                {/* <li>
                  <a href="#">Marketplace</a>
                </li> */}
                <li className="submenu">
                  <a>Marketplace </a>
                  <div className="sub_menu_sect">
                    <ul className="sub_menu_list">
                      <li>
                        <a href="https://www.topaz.so/" target="_blank">Topaz</a>
                      </li>
                      <li>
                        <a href="https://bluemove.net/" target="_blank">BlueMove</a>
                      </li>
                      <li>
                        <a href="https://souffl3.com/" target="_blank"> Souffl3</a>
                      </li>
                    </ul>
                  </div>
                </li> 
                {/* <li className="submenu">
                  <a href="# ">Pages +</a>
                  <div className="sub_menu_sect">
                    <ul className="sub_menu_list">
                      <li>
                        <a href="/">Home One</a>
                      </li>
                      <li>
                        <a href="/home-two">Home Two</a>
                      </li>
                      <li>
                        <a href="/home-three">Home Three</a>
                      </li>
                      <li>
                        <a href="/blogs">Latest Blog</a>
                      </li>
                      <li>
                        <a href="/post">Blog Details</a>
                      </li>
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="bithu_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <Button sm variant="outline" className="join_btn">
                 Twitter
              </Button>
              {/* {
                !connected ? 
                <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={disconnect()}
                >
                 Disconnect {sliceAddress(currentAccount)}
                </Button>
                : 
                  <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={console.log(connected)}
                >
                  <FaWallet /> Connect
                </Button>
              } */}
                  {/* <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={walletModalHandle}
                >
                  <FaWallet /> Connect
                </Button>
               */}

               <WalletButton/>
              
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
