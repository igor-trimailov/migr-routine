import React from 'react'
import { OverlayTrigger, Popover, Dropdown } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import isEmpty from 'lodash/isEmpty'

import { setLocale } from '../../utils'
import config from '../../configuration'

// TODO: move switcher to it's own file
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
  const { user, actions } = props

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <span
      className="header__user"
      ref={ref}
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}
    ></span>
  ))

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__title">{t('header.title')}</div>
        <div className="header__nav">
          <div className="header__nav-item">{t('header.nav.about')}</div>
          <div className="header__nav-item">
            {isEmpty(user) ? (
              <Link
                to={{
                  pathname: `${process.env.PUBLIC_URL}/account/login`,
                  state: { background: location },
                }}
              >
                {t('header.nav.login')}
              </Link>
            ) : (
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      actions.accountLogout()
                    }}
                  >
                    Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
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
