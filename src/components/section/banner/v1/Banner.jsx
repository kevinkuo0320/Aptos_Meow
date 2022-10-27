import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import characterThumb from "../../../../assets/images/nft/Character1.png";
import mintLiveDownArrow from "../../../../assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "../../../../assets/images/nft/mint_live_text.png";
import homeImageBG from "../../../../assets/images/nft/home_img_bg.png";
import catNFTimg from "../../../../assets/images/nft/cat_nft.jpg"; 

const Banner = () => {
  const { mintModalHandle } = useModal();
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
              <h2>Atpos Meow</h2>
              <h3>
                {/* <span className="count">
                  <Counter end={3333} duration={5555} />
                </span>{" "} */}
                ???? / 3333 Minted
              </h3>
              <div className="banner_buttons">
                <Button lg variant="mint" onClick={() => mintModalHandle()}>
                  {" "}
                  Mint now
                </Button>
                <Button lg variant="outline">
                  Wishlist now
                </Button>
              </div>
              <div className="coin-info">
                <span>Max 2 NFTs per wallet . Price 10 APTOS + gas</span>
                {/* <span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL 25 Oct 04:00H</span>
                </span> */}
                <span>Presale : Coming soon</span>
                <span>Presale : Coming soon</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                {/* <div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
                  </div>
                </div> */}
                <div className="bithu_v1_baner_right_img_bg">
                  <img src={homeImageBG} alt="" />
                </div>
                <div className="bithu_v1_baner_right_img">
                  <img src={catNFTimg} alt="avater" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
