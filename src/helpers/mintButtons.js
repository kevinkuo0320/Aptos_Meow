//import { AptosClient } from "aptos";
import Button from "../common/button";
//import {candyMachineAddress, collectionName, collectionCoverUrl, NODE_URL, CONTRACT_ADDRESS, COLLECTION_SIZE} from "../helpers/candyMachineInfo"; 
// import {collectionName, collectionCoverUrl, NODE_URL, CONTRACT_ADDRESS, COLLECTION_SIZE} from "../helpers/aptosMeowInfo";
// import { useWallet } from '@manahippo/aptos-wallet-adapter';
// import { useState, useEffect } from "react";
import { useModal } from "../utils/ModalContext";

//const aptosClient = new AptosClient(NODE_URL);

const MintButton = () => {
    const { mintModalHandle } = useModal();
    // const wallet = useWallet();
    // const [isFetchignCmData, setIsFetchignCmData] = useState(false)
    // //const [candyMachineData, setCandyMachineData] = useState({data: {}, fetch: fetchCandyMachineData})
    // const [timeLeftToMint, setTimeLeftToMint] = useState({presale: "", public: "", timeout: null})
    // const [mintInfo, setMintInfo] = useState({numToMint: 1, minting: false, success: false, mintedNfts: []})
    // const [canMint, setCanMint] = useState(false)

    return (
        
    <Button lg variant="mint" onClick={mintModalHandle}>
        {" "}
        Mint now
    </Button>
        
    )
    
}

export default MintButton; 