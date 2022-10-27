import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
//import logo from "../../../../assets/images/logo.png";

function sliceAddress (s) {
  return s.slice(0,5) + "..." + s.slice(s.length - 4, s.length)
}

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const [currentAccount, setCurrentAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false); 
  // const [connectMW,  setConnectMW] = useState(false); 
  // const [connectFewchanWallet, setConnectFewchaWallet] = useState(false); 
  // const [connectPontemWallet, setConnectPontemWallet] = useState(false); 
  // const [connectPetraWallet, setConnectPetraWallet] = useState(false); 

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

  useEffect(() => {
    const res = window.aptos.account().then(
      (data) => setCurrentAccount(data.address)
      );
      if(currentAccount != "") {
        setIsConnected(true)
      }
    console.log(currentAccount, "account address")

  }, [currentAccount]);

    //check connected
    // const getMartianWalletAddress = async () => {
    //   try {
    //     const res = await window.martian.account()
    //     const account = res.address
    //     console.log(account, "getAddreess")
    //     setCurrentAccount(account); 
    //     setConnectMW(true)
    //     setIsConnected(false)
    //   } catch (err) {
    //     //setConnectMW(false); 
    //     console.log(connectMW)
    //     console.log(err)
    //   }
    // };

    //disconnection section 
    const disconnectMartian = async () => {
      const res = await window.aptos.disconnect()
      console.log(res)
      setIsConnected(false)
    }

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
                <li>
                  <a href="#">Marketplace</a>
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
              {
                isConnected ? 
                <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={disconnectMartian}
                >
                 Disconnect {sliceAddress(currentAccount)}
                </Button>
                : 
                  <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={() => walletModalHandle()}
                >
                  <FaWallet /> Connect
                </Button>
              }
              
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
