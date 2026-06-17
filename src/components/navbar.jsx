import React from 'react';
import { useTranslation } from 'react-i18next';


export default function Navbar() {
  return (
    <>
      <button className="btn btn-primary d-md-none m-3"
        type="button" data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu">
        Menú
      </button>
      <div className="d-none d-md-flex flex-column bg-dark text-white vh-100 p-4 position-fixed" style={{ width: '225px' }}>
        <NavbarContent />
      </div>
      <div className="offcanvas offcanvas-start bg-dark text-white" tabIndex="-1"
        id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Daniel Cabero</h5>
          <button type="button" className="btn-close btn-close-white"       data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        <div className="offcanvas-body">
          <NavbarContent />
        </div>
      </div>
    </>
  );
}

function NavbarContent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="d-flex flex-column h-100">

      {/* Perfil */}
      <div className="text-center mb-5">

        {/*<img
          src="/profile.jpg"
          alt="Daniel Cabero"
          className="profile-image"
        />*/
}
        <h4 className="mt-3 mb-1">
          Daniel Cabero
        </h4>

        <p className="text-secondary small">
          QA Automation Engineer
          <br />
          Backend & Full Stack Developer
        </p>

      </div>

      {/* Menú */}
      <ul className="nav flex-column flex-grow-1">

        <li className="nav-item">
          <a className="nav-link custom-link" href="#home">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link custom-link" href="#experience">
            {t('experience')}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link custom-link" href="#projects">
            {t('projects')}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link custom-link" href="#education">
            {t('education')}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link custom-link" href="#skills">
            {t('skills')}
          </a>
        </li>

      </ul>

      {/* Redes */}
      <div className="text-center mb-4">

        <a
          href="https://github.com/caberos"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="bi bi-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/danielfcaberobarrios/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="bi bi-linkedin"></i>
        </a>

      </div>

      {/* Idiomas */}
      <div className="text-center">

        <hr />

        <div className="btn-group">

          <button
            onClick={() => changeLanguage('es')}
            className="btn btn-outline-light"
          >
            ES
          </button>

          <button
            onClick={() => changeLanguage('en')}
            className="btn btn-outline-light"
          >
            EN
          </button>

        </div>

      </div>

    </div>
  );
}