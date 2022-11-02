import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1/Header";
import PageHeader from "../common/pageHeader";
//import BlogDetails from "../components/section/blog/blogDetails/BlogDetails";
import CTA from "../components/section/cta/v2";
//import Footer from "../components/section/footer/v3";
import ShareModal from "../common/modal/shareModal/ShareModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
const Blogs = () => {
  const { shareModalVisibility, walletModalvisibility } = useModal();
  return (
    <>
      <Layout>
        <GlobalStyles />
        {shareModalVisibility && <ShareModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader />
        {/* <BlogDetails /> */}
        <CTA />
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

export default Blogs;
