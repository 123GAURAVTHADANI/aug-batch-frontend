import Footer from "../components/Footer";
import Header from "../components/Header";

function WrapperComponent(InnerComponent) {
  return function () {
    return (
      <div>
        <Header />
        <InnerComponent />
        <Footer />
      </div>
    );
  };
}
export default WrapperComponent;
