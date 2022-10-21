import { useModal } from "../../../utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import WalletModalStyleWrapper from "./WalletModal.style";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import metamaskIcon from "../../../assets/images/icon/fewcha.png";
import formatic from "../../../assets/images/icon/martian_wallet.png";
import trustWalletIcon from "../../../assets/images/icon/petra_wallet.jpg";
import walletConnect from "../../../assets/images/icon/pontem_wallet.jpg";

const WalletModal = () => {
  const { walletModalHandle } = useModal();

  // const connectMetaMaskWallet = async () => {
  //   const { ethereum } = window;
  //   const networkId = await ethereum.request({
  //     method: "net_version",
  //   });
  //   if (networkId === 5) {
  //     //toast("Make sure you are in polygon network!");
  //     return;
  //   }
  //   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  //   await provider.send("eth_requestAccounts", []);
  //   const signer = provider.getSigner();
  //   await signer.getAddress();
  // };

  const isMartianWalletInstalled = window.martian
  const isPontemWalletInstalled = window.pontem 
  const isPetraWalletInstalled = window.petra 
  const isFewchaWalletInstalled = window.fewcha 

  const getMartianProvider = async () => {
    if(isMartianWalletInstalled) {
      try {
        const res = await window.martian.connect();
        console.log(res); 
        //walletModalHandle.
      } catch(err) {
        console.log(err); 
      }
      return(window.martian);
    } else {
      window.open("https://www.martianwallet.xyz/", "_blank");
    }
  };

  const getFewchaProvider = async () => {
    if(isFewchaWalletInstalled) {
      try {
        const res = await window.fewcha.connect();
        console.log(res); 
      } catch(err) {
        console.log(err); 
      }
    } else {
      window.open("https://fewcha.app/", "_blank");
    }
  };

  const getPetraProvider = async () => {
    if(isPetraWalletInstalled) {
      try {
        const res = await window.petra.connect();
        console.log(res); 
      } catch(err) {
        console.log(err); 
      }
    } else {
      window.open("https://petra.app/", "_blank");
    }
};

  const getPontemProvider = async () => {
    if(isPontemWalletInstalled) {
      try {
        const res = await window.pontem.connect();
        console.log(res); 
      } catch(err) {
        console.log(err); 
      }
    } else {
      window.open("https://pontem.network/", "_blank");
    } 
};

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div
          className="mint_modal_box"
        >
          <div className="mint_modal_content">
            <div className="modal_header">
              <div>
                <useMetaMask />
              </div>
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
                <a  onClick={getFewchaProvider} style={{color:"white"}}>
                  <img src={metamaskIcon} alt="Meta-mask" style={{height:"30px"}}/>
                  Fewcha
                  <span>
                    <FiChevronRight />
                  </span>
                
                </a>
                <a onClick={getMartianProvider} style={{color:"white"}}>
                  <img src={formatic} alt="Martian" style={{height:"30px"}} />
                  Martian Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a onClick={getPetraProvider} style={{color:"white"}}>
                  <img src={trustWalletIcon} alt="Trust" style={{height:"30px"}}/>
                  Petra Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a onClick={getPontemProvider} style={{color:"white"}}>
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
