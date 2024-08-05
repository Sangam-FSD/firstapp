import { useState } from "react";
import Modal from "./component/modal";
import { ImCross } from "react-icons/im";
import Card from "./component/card";
import AddProductForm from "./forms/addProduct";
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal ? (
        <Modal>
          <div
            className="bg-red
          -500 w-2/6 rounded-md p-4"
          >
            <div className="flex justify-end">
              <ImCross onClick={() => setOpenModal(false)} />
            </div>
            <AddProductForm />
          </div>
        </Modal>
      ) : null}
      <div className="border-b-2 border-black">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-500 rounded-md p-2 m-4 text-white bold"
        >
          Add new product
        </button>
      </div>
      <Card />
    </div>
  );
}
export default App;
