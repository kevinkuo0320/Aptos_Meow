import { useModal } from "../../../utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import WalletModalStyleWrapper from "./WalletModal.style";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import metamaskIcon from "../../../assets/images/icon/fewcha.png";
import formatic from "../../../assets/images/icon/martian_wallet.png";
import trustWalletIcon from "../../../assets/images/icon/petra_wallet.jpg";
import walletConnect from "../../../assets/images/icon/pontem_wallet.jpg";
import {useState} from "react"; 
import {useWallet} from "@manahippo/aptos-wallet-adapter";

const WalletModal = (setAccountAddr) => {
  const { walletModalHandle } = useModal();
  //const [accountAddr, setAccountAddr] = useState(); 

//   const isMartianWalletInstalled = window.martian
//   const isPontemWalletInstalled = window.pontem 
//   const isPetraWalletInstalled = window.petra 
//   const isFewchaWalletInstalled = window.fewcha 

//   function refreshPage() {
//     window.location.reload(false);
//   }

//   const getMartianProvider = async () => {
//     if(isMartianWalletInstalled) {
//       try {
//         const res = await window.martian.connect();
//         const res1 = await window.martian.account()
//         setAccountAddr(res1.address)
//         //refreshPage()
//       } catch(err) {
//         console.log(err); 
//       }
//       //return(window.martian);
//     } else {
//       window.open("https://www.martianwallet.xyz/", "_blank");
//     }
//   };

//   const getFewchaProvider = async () => {
//     if(isFewchaWalletInstalled) {
//       try {
//         const res = await window.fewcha.connect();
//         console.log(res); 
//         res.then( (data) => {
//           data = setAccountAddr(data.address)
//         })
//         //refreshPage()
//       } catch(err) {
//         console.log(err); 
//       }
//     } else {
//       window.open("https://fewcha.app/", "_blank");
//     }
//   };

//   const getPetraProvider = async () => {
//     if(isPetraWalletInstalled) {
//       try {
//         const res = await window.petra.connect();
//         console.log(res); 
//         refreshPage()
//       } catch(err) {
//         console.log(err); 
//       }
//     } else {
//       window.open("https://petra.app/", "_blank");
//     }
// };

//   const getPontemProvider = async () => {
//     if(isPontemWalletInstalled) {
//       try {
//         const res = await window.pontem.connect();
//         console.log(res); 
//         refreshPage()
//       } catch(err) {
//         console.log(err); 
//       }
//     } else {
//       window.open("https://pontem.network/", "_blank");
//     } 
// };

const wallet = useWallet(); 

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div
          className="mint_modal_box"
        >
          <div className="mint_modal_content">
            <div className="modal_header">
              {/* <div>
                <useMetaMask />
              </div> */}
              <h2>CONNECT WALLET</h2>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <p>
                Please select a wallet to connect for start Minting your NFTs
              </p>
              <div className="wallet_list">      
                <a  onClick={
                  async () => {
                    await wallet.select("Fewcha");
                    walletModalHandle(); 
                    //onConnect();
                }} style={{color:"white"}}>
                  <img src={metamaskIcon} alt="Meta-mask" style={{height:"30px"}}/>
                  Fewcha
                  <span>
                    <FiChevronRight />
                  </span>
                
                </a>
                <a onClick={
                    async () => {
                      await wallet.select("Martian");
                      walletModalHandle(); 
                      //onConnect();
                  } 
                } style={{color:"white"}}>
                  <img src={formatic} alt="Martian" style={{height:"30px"}} />
                  Martian Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a onClick={
                  async () => {
                    await wallet.select("Petra");
                    walletModalHandle(); 
                    //onConnect();
                }
                } style={{color:"white"}}>
                  <img src={trustWalletIcon} alt="Trust" style={{height:"30px"}}/>
                  Petra Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a onClick={
                    async () => {
                      await wallet.select("Pontem");
                      walletModalHandle(); 
                      //onConnect();
                  }
                } style={{color:"white"}}>
                  <img src={walletConnect} alt="Wallet" style={{height:"30px"}} />
                  Pontem Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <a href="# ">Terms of Service</a>
                <a href="# ">Privacy Policy</a>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
