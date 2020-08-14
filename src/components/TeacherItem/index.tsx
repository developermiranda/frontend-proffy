import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/1785913?s=460&u=e6073ce5345a59f86270ae96e7dc725036ff501e&v=4"
          alt="Daniel Miranda"
        />
        <div>
          <strong>Daniel Miranda</strong>
          <span> Física Quântica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis
        tristique neque, feugiat aliquam nibh dictum sit amet. Aenean feugiat
        est non dui consectetur ornare. Proin arcu lacus, sagittis vel turpis
        id, fringilla molestie justo. <br />
        Sed sed aliquam risus, ut vestibulum libero. Suspendisse potenti. Donec
        diam enim, volutpat sed tortor id, mollis auctor ipsum.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong> R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
