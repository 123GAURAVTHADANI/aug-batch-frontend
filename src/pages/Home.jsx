import "../components/Home.css";
import WrapperComponent from "../hoc/wrapper";

function Home() {
  return <h1 className="home">Home Page</h1>;
}
export default WrapperComponent(Home);
