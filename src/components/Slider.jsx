import React, { useState } from "react";
import "../styles/BannerSlider.css";
import { ConsultationModal } from "./ConsultationModal";

export const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления видимостью модального окна

  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      {/* Текстовая часть */}
      <div className="text-section">
        <h1 className="title">Доставка прогрессивного питания для гурманов</h1>
        <div className="buttons">
          {/* Используем обычный тег <a> для якорной ссылки */}
          <a href="#programs" className="btn primary">
            Подобрать питание
          </a>
          <button className="btn secondary" onClick={openModal}>
            Получить консультацию
          </button>
        </div>
      </div>

      {/* Изображение */}
      <div className="image-section">
        <img
          src="/img/banner1.png"
          alt="Прогрессивное питание"
          className="food-image"
        />
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>

      {/* Рендерим модальное окно, если isModalOpen === true */}
      {isModalOpen && <ConsultationModal onClose={closeModal} />}
    </div>
  );
};
