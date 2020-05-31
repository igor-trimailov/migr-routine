import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { setLocale } from '../../utils'
import config from '../../configuration'

function LocaleSwitcher() {
  const { i18n } = useTranslation()
  const selectedLanguage = i18n.language
  const availableLanguages = i18n.languages
  const { locales } = config

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLocale(language)
  }

  return (
    <div className="locale-switcher">
      <OverlayTrigger
        placement="left"
        trigger="click"
        rootClose
        overlay={
          <Popover id={'popover-locale'}>
            <Popover.Content>
              <div className="locale-switcher__locale-list">
                {availableLanguages.map((language) => (
                  <div
                    className="locale-switcher__locale"
                    key={`locale-${language}`}
                    onClick={() => {
                      document.body.click()
                      changeLanguage(language)
                    }}
                  >
                    <div className="locale-switcher__locale-flag">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/flag/${language}.png`
                        }
                        alt={language}
                      />
                    </div>
                    <div className="locale-switcher__locale-name">
                      {locales[language].name}
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Content>
          </Popover>
        }
      >
        {
          <img
            src={
              process.env.PUBLIC_URL + `/images/flag/${selectedLanguage}.png`
            }
            alt={selectedLanguage}
          />
        }
      </OverlayTrigger>
    </div>
  )
}

function Header(props) {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__title">{t('header.title')}</div>
        <div className="header__nav">
          <div className="header__nav-item">{t('header.nav.about')}</div>
          <div className="header__nav-item">
            <Link
              to={{
                pathname: `${process.env.PUBLIC_URL}/account/login`,
                state: { background: location },
              }}
            >
              {t('header.nav.login')}
            </Link>
          </div>
          <div className="header__nav-item">
            <LocaleSwitcher {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
