import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Index() {
    const { t } = useTranslation();

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <section className="resume-section text-center" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0 fw-bold">  
              <span className="text-primary">{t('greeting')}</span>
            </h1>
            <h5 className='mb-3 fs-2'> <span className="text-primary">{t('work')}</span></h5>
            <div className="subheading mb-3 fs-4">
              {t('street')}
              <a href="mailto:cabernaldo010788@email.com" className="ms-1">{t('email')}</a>
              <p><a href="https://www.linkedin.com/in/danielfcaberobarrios" target="_blank" rel="noopener noreferrer" className="text-decoration-none"> {t('linkedin')} </a>
              <a href="https://github.com/Dcaberob" target="_blank" rel="noopener noreferrer" className="text-decoration-none"> {t('github')} </a>
              </p>
              
            </div>
            <p className="lead text-justify text-center mb-5 fw-bold">
            {t('description')}
            </p>
           
          </div>
        </section>
      </div>
    );
  }
  
