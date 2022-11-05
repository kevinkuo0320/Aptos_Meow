
import { FaWallet } from "react-icons/fa";
import Button from "../../../../common/button";
import { useModal } from "../../../../utils/ModalContext";
import {useWallet} from "@manahippo/aptos-wallet-adapter"; 
import { ToastContainer, toast } from 'react-toastify';

const WalletButton = () => {
    const wallet = useWallet(); 
    const { walletModalHandle } = useModal();
    const disconnectWallet= () => {
        wallet.disconnect()
    }

    function sliceAddress (s) {
        return s.slice(0,5) + "..." + s.slice(s.length - 4, s.length)
    }

    function disPlayToast() {
        toast.warn("wallet disconnected", {
            position: toast.POSITION.BOTTOM_RIGHT, 
            autoClose: 2000,
        })
    }
    
    

    return (
        <>
        {wallet.account?.address?.toString() == undefined ? 
        <>
        <Button
            sm
            variant="hovered"
            className="connect_btn"
            onClick={walletModalHandle}
        >
            <FaWallet /> Connect
        </Button> 
        <ToastContainer/>
        </>
        : 
        <>
        <Button 
            sm
            variant="hovered"
            className="connect_btn"
        
            onClick={
            async () => {
                console.log("clcc")
                await wallet.disconnect(); 
                disPlayToast()
            }
        }>
            Connected {sliceAddress(wallet.account?.address)}
            
        </Button>
        <ToastContainer/>
        </>
    
    }
        </>
        
              
              
    );
  };
  
  export default WalletButton;