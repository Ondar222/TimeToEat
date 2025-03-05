import React, { useState } from "react";
import "../styles/Modal.css";

export const SuccesModal = ({ closeModal }) => {
  return (
    <div>
      <h3>Спасибо, ваш запрос отправлен!</h3>
      <button className="closeBtn-succesModal" onClick={closeModal}>
        Закрыть
      </button>
    </div>
  );
};
