// import React from "react";
// import "./country.css";
// import Antaliya from "../../images/antalya2.jpg";

// const Country = () => {
//   const bgStyle = {
//     backgroundImage: `url(${Antaliya})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   return (
//     <div className="content" style={bgStyle}>
//       
//       <button className="ant-btn">Перейти</button>
//       <div className="ant-box">
//         <div>
//           <div>
//             <i class="fa-solid fa-user"></i>
//           </div>
//           <div>
//             <p>Население:</p>
//             <h3>8,66 млн</h3>
//           </div>
//         </div>
//         <div>
//           <div>
//             <i class="fa-solid fa-globe"></i>
//           </div>
//           <div>
//             <p>Территория:</p>
//             <h3>41 290 км</h3>
//           </div>
//         </div>

//         <div>
//           <div>
//             <i class="fa-solid fa-house"></i>
//           </div>
//           <div>
//             <p>Средняя цена:</p>
//             <h3>$1 100 200</h3>
//           </div>
//         </div>
//         <div>
//           <button>Узнать больше</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Country;


// import React, { useEffect, useState } from "react";

// const BackgroundChanger = () => {
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   // 4 ta background rasm manzillari
//   const backgrounds = [
//     
//   ];

//   // backgroundni har 4 soniyada o'zgartirish
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 4000); // 4 soniyada backgroundni almashtirish

//     // component unmount bo'lganda intervalni to'xtatish
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: backgrounds[backgroundIndex],
//         transition: "background-image 1s ease-in-out", // backgroundning o'zgarishini yumshoq qilish
//       }}
//     >
//       {/* Sayt mazmunini shu yerga qo'shishingiz mumkin */}
//     </div>
//   );
// };

// export default BackgroundChanger;




import React, { useEffect, useState } from "react";
import "./styles.css"; // CSS faylini ulash

const BackgroundChanger = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // 4 ta fon tasvirlari
  const backgrounds = [
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/dubai2.jpg)",
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/sharm.jpg)",
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/istanbul.jpg)",
    "url(https://effervescent-valkyrie-b42824.netlify.app/assets/images/antalya2.jpg)",
  ];

  // Har bir fon uchun shahar nomlari
  const cities = [
    "Дубай", // 1-chi fon
    "Шарм-эль-Шейх", // 2-chi fon
    "Стамбул", // 3-chi fon
    "Анталия", // 4-chi fon
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000); // Har 4 soniyada fonni almashtirish

    return () => clearInterval(interval); // Component unmount bo'lganda intervalni to'xtatish
  }, []);

  return (
    <div
      style={{
        height: "100vh", // To'liq ekranni qamrab olish
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: backgrounds[backgroundIndex],
        transition: "background-image 1s ease-in-out",
        position: "relative",
      }}
    >
      <p className="city">Загляните в красивый город:</p>
      <h1 className="ant-h1">{cities[backgroundIndex]}</h1>{" "}
      {/* Har bir fon uchun shahar nomini ko'rsatish */}
      <button className="ant-btn">Перейти</button>
      <div className="ant-box">
        <div className="info">
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <p>Население:</p>
            <h3>8,66 млн</h3>
          </div>
        </div>
        <div className="info">
          <div>
            <i className="fa-solid fa-globe"></i>
          </div>
          <div>
            <p>Территория:</p>
            <h3>41 290 км</h3>
          </div>
        </div>
        <div className="info">
          <div>
            <i className="fa-solid fa-house"></i>
          </div>
          <div>
            <p>Средняя цена:</p>
            <h3>$1 100 200</h3>
          </div>
        </div>
        <div>
          <button>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;




