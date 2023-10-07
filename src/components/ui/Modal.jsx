import { IoCloseOutline } from "react-icons/io5";
import Overlay from "./Overlay";

function Modal({ children, onClick }) {
  return (
    <Overlay>
      <div className="bg-white w-[50%] p-8 rounded-xl">
        <div className="flex justify-end">
          <IoCloseOutline
            size={40}
            className="cursor-pointer"
            onClick={onClick}
          />
        </div>
        {children}
      </div>
    </Overlay>
  );
}

export default Modal;
