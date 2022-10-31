
import { FaWallet } from "react-icons/fa";
import Button from "../../../../common/button";
import { useModal } from "../../../../utils/ModalContext";
import {useWallet} from "@manahippo/aptos-wallet-adapter"; 

const WalletButton = () => {
    const wallet = useWallet(); 
    const { walletModalHandle } = useModal();
    const disconnectWallet= () => {
        wallet.disconnect()
    }

    function sliceAddress (s) {
        return s.slice(0,5) + "..." + s.slice(s.length - 4, s.length)
      }

    return (
        <>
        {wallet.account?.address?.toString() == undefined ? 
        <Button
            sm
            variant="hovered"
            className="connect_btn"
            onClick={walletModalHandle}
        >
            <FaWallet /> Connect
        </Button>  : 

        <Button 
            sm
            variant="hovered"
            className="connect_btn"
        
            onClick={
            async () => {
                console.log("clcc")
                await wallet.disconnect(); 
            }
        }>
            Connected {sliceAddress(wallet.account?.address)}
            
        </Button>
    
    
    }
        </>
        
              
              
    );
  };
  
  export default WalletButton;