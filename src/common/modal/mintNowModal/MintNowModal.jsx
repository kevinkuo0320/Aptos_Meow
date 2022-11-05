import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./MintNow.style";
import mintImg from "../../../assets/images/nft/cat_nft.jpg";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import { AptosClient } from "aptos";
import {collectionName, collectionCoverUrl, NODE_URL, CONTRACT_ADDRESS, COLLECTION_SIZE} from "../../../helpers/aptosMeowInfo";
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const aptosClient = new AptosClient(NODE_URL);
const autoCmRefresh = 10000;

const MintNowModal = () => {
  const [count, setCount] = useState(1);
  const { mintModalHandle } = useModal();
  const wallet = useWallet();
  const [isFetchignCmData, setIsFetchignCmData] = useState(false)
  //const [candyMachineData, setCandyMachineData] = useState({data: {}, fetch: fetchCandyMachineData})
  const [timeLeftToMint, setTimeLeftToMint] = useState({presale: "", public: "", timeout: null})

  const [mintInfo, setMintInfo] = useState({numToMint: 1, minting: false, success: false, mintedNfts: []})

  const [canMint, setCanMint] = useState(false)

  const [decActive, setDecActive] = useState(false);
  const [incActive, setIncActive] = useState(true);
  const [notificationActive, setNotificationActive] = useState(false);

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const mint = async () => {
      if (wallet.account?.address?.toString() === undefined) {
        // setNotificationActive(current => !current);
        // await timeout(3000);
        // setNotificationActive(current => !current);
        toast.warn('Please connect to wallet first', {
          position: toast.POSITION.BOTTOM_RIGHT, 
          autoClose: 2000,
      });
      }
      // if (wallet.account?.address?.toString() === undefined || mintInfo.minting) return;

      //console.log(wallet.account?.address?.toString());
      setMintInfo({...mintInfo, minting: true})
      //Generate a transactions
      const payload = {
        type: "entry_function_payload",
        function: `0x0586b90251837d611623503a2089ac2170f25c710911f564a6a622b291593fa1::NFT::mint`,
        type_arguments: [],
        arguments: [
        ]
      };

      let txInfo;
      try {
        const txHash = await wallet.signAndSubmitTransaction(payload);
        console.log(txHash, "tXhASH");
        txInfo = await aptosClient.waitForTransactionWithResult(txHash.hash)
      } catch (err) {
        txInfo = {
          success: false,
          vm_status: err.message,
        }   
      }
      handleMintTxResult(txInfo)
    }

    //resolve the minting result
    async function handleMintTxResult(txInfo) {
      console.log(txInfo, "TXiNFO");
      const mintSuccess = txInfo.success;
      console.log(mintSuccess ? "Mint success!" : `Mint failure, an error occured.`)

      let mintedNfts = []
      if (!mintSuccess) {
          /// Handled error messages
          const handledErrorMessages = new Map([
              ["Failed to sign transaction", "An error occured while signing."],
              ["Move abort in 0x1::coin: EINSUFFICIENT_BALANCE(0x10006): Not enough coins to complete transaction", "Insufficient funds to mint."],
              ["The user rejected the request"]
          ]);

          const txStatusError = txInfo.vm_status;
          console.error(`Mint not successful: ${txStatusError}`);
          let errorMessage
          if(txStatusError === 'The user rejected the request') {
            errorMessage = 'Request rejected'
          } 
          if (txStatusError == "Move abort in 0x1::coin: EINSUFFICIENT_BALANCE(0x10006): Not enough coins to complete transaction", "Insufficient funds to mint.") {
            errorMessage = 'Insufficient balance in wallet'
          } 

            errorMessage = "Unkown error occured. (1 NFT per account can be minted only)"
          
          //errorMessage = errorMessage === undefined ? "Unkown error occured. Try again." : errorMessage;

          toast.error(errorMessage , {
            position: toast.POSITION.BOTTOM_RIGHT, 
            autoClose: 2000,
        });
      } else {
          //mintedNfts = await cmHelper.getMintedNfts(aptosClient, candyMachineData.data.tokenDataHandle, candyMachineData.data.cmResourceAccount, collectionName, txInfo)
          toast.success("Minting success!", {
            position: toast.POSITION.BOTTOM_RIGHT, 
            autoClose: 2000,
        })
      }
      //setMintInfo({...mintInfo, minting: false, success: mintSuccess, mintedNfts})
  }

  // async function fetchCandyMachineData(indicateIsFetching = false) {
  //   console.log("Fetching candy machine data...")
  //   if (indicateIsFetching) setIsFetchignCmData(true)
  //   const cmResourceAccount = await cmHelper.getCandyMachineResourceAccount();
  //   if (cmResourceAccount === null) {
  //     setCandyMachineData({...candyMachineData, data: {}})
  //     setIsFetchignCmData(false)
  //     return
  //   }

  //   const collectionInfo = await cmHelper.getCandyMachineCollectionInfo(cmResourceAccount);
  //   const configData = await cmHelper.getCandyMachineConfigData(collectionInfo.candyMachineConfigHandle);
  //   setCandyMachineData({...candyMachineData, data: {cmResourceAccount, ...collectionInfo, ...configData}})
  //   setIsFetchignCmData(false)
  // }

  // function verifyTimeLeftToMint() {
  //   const mintTimersTimeout = setTimeout(verifyTimeLeftToMint, 1000)
  //   if (candyMachineData.data.presaleMintTime === undefined || candyMachineData.data.publicMintTime === undefined) return

  //   const currentTime = Math.round(new Date().getTime() / 1000);
  //   setTimeLeftToMint({timeout : mintTimersTimeout, presale: cmHelper.getTimeDifference(currentTime, candyMachineData.data.presaleMintTime), public: cmHelper.getTimeDifference(currentTime, candyMachineData.data.publicMintTime)})
  // }

  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
      <ToastContainer />
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Collect YOUR Aptos Meow NFT before end</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">
                <img src={mintImg} alt="bithu nft mint" />
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      3300/<span>3333</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>0.15 Aptos</h5>
                  </li>
                  {/* <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button
                        onClick={() =>
                          count > 1 ? setCount(count - 1) : count
                        }
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                      />
                      <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <h5>
                      <span>0.30</span> Aptos
                    </h5>
                  </li> */}
                </ul>
              </div>
              <div className="modal_mint_btn">
                <Button lg variant="mint" onClick={mint}>
                  Mint Now
                </Button>
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
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;
