import Header from "./Header";
import Main from "./Main";

const Layout = (props) => {
  return (
    <div style={{ display: "flex",}}>
      <div style={{ width: "100%" }}>
        <Header />
        <div style={{ display: "flex" }}>
          <Main style={{ textAlign: "center" }}>
            {props.children}
          </Main>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Layout;
