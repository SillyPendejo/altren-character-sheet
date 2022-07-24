import React, { useState } from "react";
import HealthControls from "./HealthControls";
import { Icon } from "@mdi/react";
import { mdiCog, mdiCheckBold } from "@mdi/js";

import Modal from "../../../../elements/ux/Modal";

export interface IStatProps {}

const Health: React.FC<IStatProps> = (props) => {
  const [max, setMax] = useState(4);
  const [current, setCurrent] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [modalInput, setModalInput] = useState(max);

  const name = "Здоровье";

  const statValueClassName = "inline-block text-center w-7";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!+value && +value !== 0) return;
    setModalInput(+value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOk();
  };

  const handleOk = () => {
    if (!modalInput) return;
    setMax(modalInput);
    if (modalInput < current) setCurrent(modalInput);
    setShowModal(false);
  };

  return (
    <>
      <div className="relative flex mb-2.5 items-center gap-3">
        <label className="text-xl">{name}</label>
        <span className="relative text-xl font-semibold">
          <span className={statValueClassName}>{current}</span>/
          <span className={statValueClassName}>{max}</span>
          <div
            className="absolute bottom-4 left-14"
            onClick={() => setShowModal(true)}
          >
            <Icon path={mdiCog} size={0.7} color="grey" />
          </div>
        </span>
        <HealthControls current={current} max={max} setCurrent={setCurrent} />
      </div>
      {showModal && (
        <Modal
          onHide={() => setShowModal(false)}
          headerText={"Изменить максимальное здоровье"}
        >
          <form
            className="flex gap-2 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              className="border-2 border-black rounded-md text-xl w-12 text-center focus:border-black"
              value={modalInput}
              onChange={(e) => handleInputChange(e)}
              type="text"
            />
            <div onClick={handleOk}>
              <Icon path={mdiCheckBold} size={1} color={"#22c55e"} />
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Health;
