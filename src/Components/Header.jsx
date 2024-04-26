import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import cart from "../assets/cart.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function TextLinkExample() {
  const cartDatas = useSelector((state) => state.allCart);
  //console.log(cartDatas.carts);

  return (
    <Navbar
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      style={{
        height: "8vh",
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        zIndex: "99",
      }}
    >
      <Container>
        <Navbar.Brand style={{ fontSize: "1.5vw" }}>Ecommerce</Navbar.Brand>
        <Navbar.Toggle />
        <NavLink to="/cart">
          <Navbar.Collapse
            className="justify-content-end"
            style={{ position: "relative" }}
          >
            {cartDatas.carts.length != 0 ? (
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "70%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  position: "absolute",
                  right: "0",
                  top: "0",
                }}
              >
                {cartDatas.carts.length}
              </div>
            ) : null}
            <img src={cart} style={{ width: "2vw", height: "4vh" }} />
          </Navbar.Collapse>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
