import React from "react";
import ReactDOM from "react-dom";

export interface IModalProps {
  children?: JSX.Element
  onHide: () => void,
  headerText: string
}

const Modal: React.FC<IModalProps> = (props) => {
  const { children, onHide, headerText } = props;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/[0.4] flex justify-center items-center" onClick={onHide}>
      <div className="bg-white p-5 rounded-md flex-column justify-center items-center gap-2" onClick={(event) => event.stopPropagation()}>
        <div className="text-l font-semibold mb-4">{headerText}</div>
        {children && children}
      </div>
    </div>,
    document.getElementById("root")!
  );
};

export default Modal;
