import React from "react";
import "../styles/Programs.css";

export const Programs = () => {
  return (
    <div id="programs" className="programs">
      {/* Добавлен id */}
      <div className="programs-title">
        <h1>Программа ПремиумБоул</h1>
        <p>
          <img
            src="/img/foodIcon.png"
            alt="Описание изображения"
            width={35}
            height={22}
          />
          <a href="/some-link">Каждый день новое меню</a>
        </p>
      </div>
      <div className="calories-duration-container">
        <div className="calories-section">
          <h2>Калорийность</h2>
          <div className="calories-options">
            <div className="option">
              <span className="calories">900 ккал</span>
              <span className="dishes">3 блюда</span>
            </div>
            <div className="option">
              <span className="calories">1250 ккал</span>
              <span className="dishes">4 блюда</span>
            </div>
            <div className="option">
              <span className="calories">1600 ккал</span>
              <span className="dishes">5 блюд</span>
            </div>
            <div className="option">
              <span className="calories">2050 ккал</span>
              <span className="dishes">6 блюд</span>
            </div>
            <div className="option custom">
              <span className="calories-custom">Индивидуально подобрать</span>
            </div>
          </div>
        </div>

        <div className="duration-section">
          <h2>Продолжительность</h2>
          <div className="duration-options">
            <div className="option">
              <span className="duration">Пробные 2 дня</span>
              <span className="price">за 2900 ₽</span>
            </div>
            <div className="option">
              <span className="duration">1 неделя</span>
              <span className="price">1700 ₽ в день</span>
            </div>
            <div className="option">
              <span className="duration">2 недели</span>
              <span className="price">1600 ₽ в день</span>
            </div>
            <div className="option">
              <span className="duration">3 недели</span>
              <span className="price">1520 ₽ в день</span>
            </div>
            <div className="option">
              <span className="duration">4 недели</span>
              <span className="price">1450 ₽ в день</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
