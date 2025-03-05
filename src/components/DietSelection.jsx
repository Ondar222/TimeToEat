import React, { useState, useEffect } from "react";
import "../styles/DietSelection.css";

export const DietSelection = () => {
  // Состояния для всех полей
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("low");
  const [goal, setGoal] = useState("maintain");
  const [calories, setCalories] = useState(0); // Результат расчета

  // Функция для расчета калорий
  const calculateCalories = () => {
    // Формула для расчета базового метаболизма (BMR)
    let bmr;
    if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }

    // Учет уровня активности
    let activityMultiplier;
    switch (activity) {
      case "low":
        activityMultiplier = 1.2;
        break;
      case "medium":
        activityMultiplier = 1.55;
        break;
      case "high":
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    // Учет цели
    let goalMultiplier;
    switch (goal) {
      case "lose":
        goalMultiplier = 0.8; // Уменьшение калорий для похудения
        break;
      case "maintain":
        goalMultiplier = 1; // Поддержание веса
        break;
      case "gain":
        goalMultiplier = 1.2; // Увеличение калорий для набора массы
        break;
      default:
        goalMultiplier = 1;
    }

    // Итоговый расчет калорий
    const totalCalories = bmr * activityMultiplier * goalMultiplier;
    setCalories(Math.round(totalCalories)); // Округляем до целого числа
  };

  // Автоматический пересчет при изменении данных
  useEffect(() => {
    if (weight && height && age) {
      calculateCalories();
    }
  }, [gender, weight, height, age, activity, goal]);

  return (
    <div className="nutrition-container">
      <h2>Подберите рацион для своих целей</h2>
      <div className="input-group">
        {/* Выбор пола */}
        <div className="gender-selection">
          <span>Пол</span>
          <div className="gender-selection-container">
            <button
              className={gender === "female" ? "selected" : ""}
              onClick={() => setGender("female")}
            >
              Ж
            </button>
            <button
              className={gender === "male" ? "selected" : ""}
              onClick={() => setGender("male")}
            >
              М
            </button>
          </div>
        </div>

        {/* Поля ввода */}
        <input
          type="number"
          placeholder="Ваш вес (кг)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ваш рост (см)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ваш возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        {/* Уровень активности */}
        <div className="levels">
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="low">Низкая активность</option>
            <option value="medium">Средняя активность</option>
            <option value="high">Высокая активность</option>
          </select>
        </div>

        {/* Цель */}
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="lose">Похудеть</option>
          <option value="maintain">Поддержать вес</option>
          <option value="gain">Набрать массу</option>
        </select>

        {/* Отображение результата */}
        <div className="result">
          <h3>Рекомендуемое количество калорий в день:</h3>
          <p>{calories} ккал</p>
        </div>
      </div>
    </div>
  );
};
