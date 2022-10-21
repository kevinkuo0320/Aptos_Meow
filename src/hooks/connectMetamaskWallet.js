import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//import metamask from "./metamask.png";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0 ,0.4)",
    zIndex: 10000000,
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: 20,
    width: "30vw",
    height: "30vh",
  },
};

const ConnectWallet = ({ closeModal, modalIsOpen, connectWallet }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Connect Wallet Modal"
      >
        <div className="modal-content" style={{ width: "100%", height: "90%" }}>
          <div className="header">
            {/*<button onClick={closeModal}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="#323232"
                />
              </svg>
            </button>*/}
            <h4 style={{ textAlign: "center" }}>Metamask</h4>
          </div>
          {!isMobile ? (
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <a onClick={connectWallet}>
                <img
                //   src={metamask}
                  alt="metamask"
                  style={{ cursor: "pointer" }}
                />
                <h4 style={{ cursor: "pointer", backgroundColor: "#ffa913" }}>
                  Connect
                </h4>
              </a>
            </div>
          ) : (
            <div className="body">
              <a
                href={
                  window.ethereum
                    ? "#"
                    : "https://metamask.app.link/dapp/www.google.com"
                }
                onClick={connectWallet}
              >
                <img //src={metamask} 
                alt="metamask" />
                <h4>Connect</h4>
              </a>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ConnectWallet;