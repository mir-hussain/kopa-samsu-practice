import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Navbar from "./Navbar/Navbar";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";

Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  console.log(guns);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "500px",
      width: "600px",
      overflow: "auto",
    },
  };

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar cart={cart} toggleModal={toggleModal} />
      <div className='card-container'>
        {guns.map((gun) => (
          <Card gun={gun} key={gun.id} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <button className='modal-close-button' onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
        {cart.length === 0 && (
          <div className='cart-warning'>
            <p> Cart is empty </p>
          </div>
        )}
        {cart.map((item) => (
          <h1>Name: {item.name}</h1>
        ))}
      </Modal>
    </div>
  );
}

export default App;
