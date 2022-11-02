import { AptosClient } from "aptos";
import Button from "../common/button";
//import {candyMachineAddress, collectionName, collectionCoverUrl, NODE_URL, CONTRACT_ADDRESS, COLLECTION_SIZE} from "../helpers/candyMachineInfo"; 
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { useState } from "react";

//const aptosClient = new AptosClient(NODE_URL);

const MintButton = () => {

    const wallet = useWallet();
    const [isFetchignCmData, setIsFetchignCmData] = useState(false)
    //const [candyMachineData, setCandyMachineData] = useState({data: {}, fetch: fetchCandyMachineData})
    const [timeLeftToMint, setTimeLeftToMint] = useState({presale: "", public: "", timeout: null})
    const [mintInfo, setMintInfo] = useState({numToMint: 1, minting: false, success: false, mintedNfts: []})
    const [canMint, setCanMint] = useState(false)

    // const mint = async () => {
    //     if (wallet.account?.address?.toString() === undefined || mintInfo.minting) return;
    
    //     console.log(wallet.account?.address?.toString());
    //     setMintInfo({...mintInfo, minting: true})
    //     // Generate a transaction
    //     const payload = {
    //       type: "entry_function_payload",
    //       function: `${CONTRACT_ADDRESS}::candy_machine_v2::mint_tokens`,
    //       type_arguments: [],
    //       arguments: [
    //           candyMachineAddress,
    //           collectionName,
    //           mintInfo.numToMint,
    //       ]
    //     };
    
    //     let txInfo;
    //     try {
    //       const txHash = await wallet.signAndSubmitTransaction(payload);
    //       console.log(txHash);
    //       txInfo = await aptosClient.waitForTransactionWithResult(txHash.hash)
    //     } catch (err) {
    //       txInfo = {
    //         success: false,
    //         vm_status: err.message,
    //       }
    //     }
    //     handleMintTxResult(txInfo)
    //     if (txInfo.success) setCandyMachineData({...candyMachineData, data: {...candyMachineData.data, numMintedTokens: (parseInt(candyMachineData.data.numMintedTokens) + parseInt(mintInfo.numToMint)).toString()}})
    //   }

    //   async function handleMintTxResult(txInfo) {
    //     console.log(txInfo);
    //     const mintSuccess = txInfo.success;
    //     console.log(mintSuccess ? "Mint success!" : `Mint failure, an error occured.`)
    
    //     let mintedNfts = []
    //     if (!mintSuccess) {
    //         /// Handled error messages
    //         const handledErrorMessages = new Map([
    //             ["Failed to sign transaction", "An error occured while signing."],
    //             ["Move abort in 0x1::coin: EINSUFFICIENT_BALANCE(0x10006): Not enough coins to complete transaction", "Insufficient funds to mint."],
    //         ]);
    
    //         const txStatusError = txInfo.vm_status;
    //         console.error(`Mint not successful: ${txStatusError}`);
    //         let errorMessage = handledErrorMessages.get(txStatusError);
    //         errorMessage = errorMessage === undefined ? "Unkown error occured. Try again." : errorMessage;
    
    //         toast.error(errorMessage);
    //     } else {
    //         mintedNfts = await cmHelper.getMintedNfts(aptosClient, candyMachineData.data.tokenDataHandle, candyMachineData.data.cmResourceAccount, collectionName, txInfo)
    //         toast.success("Minting success!")
    //     }
    
        
    //     setMintInfo({...mintInfo, minting: false, success: mintSuccess, mintedNfts})
    // }


    return (
        
    <Button lg variant="mint" >
        {" "}
        Mint now
    </Button>
        
    )
    
}

export default MintButton; 