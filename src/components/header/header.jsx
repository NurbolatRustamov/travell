// import React from "react";
// import "./header.css";
// const Header = () => {
//   return (
//     <div>
//       <header className="header">
//         <div className="header-logo">
//           <h1>Travel</h1>
//         </div>
//         <ul className="header-menu">
//           <li>
//             <a href="#">Главная</a>
//           </li>
//           <li>
//             <a href="#transpo">О нас</a>
//           </li>
//           <li>
//             <a href="#swp">Туры</a>
//           </li>
//           <li>
//             <a href="#contact">Контакты</a>
//           </li>
//         </ul>
//         <ul className="header-langs">
//           <li>
//             <a href="#">UZ</a>
//           </li>
//           <li>
//             <a href="#">ENG</a>
//           </li>
//           <li>
//             <a href="#">RU</a>
//           </li>
//           <li>
//             <a href="#">
//               <i class="fa-brands fa-telegram"></i>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i class="fa-brands fa-instagram"></i>
//             </a>
//           </li>
//         </ul>
//         <div className="header-bars">
//           <i class="fa-solid fa-bars"></i>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Burger menyusi holati

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menyu holatini almashtirish
  };

  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <h1>Travel</h1>
        </div>
        <ul className={`header-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#transpo">О нас</a>
          </li>
          <li>
            <a href="#swp">Туры</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
        <ul className="header-langs">
          <li>
            <a href="#">UZ</a>
          </li>
          <li>
            <a href="#">ENG</a>
          </li>
          <li>
            <a href="#">RU</a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="header-bars" onClick={toggleMenu}>
          <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
