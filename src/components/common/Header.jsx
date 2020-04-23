import React from 'react'
import Translate from '../common/Translate'
import { OverlayTrigger, Popover } from 'react-bootstrap'

function LocaleSwitcher({ actions, locales }) {
  const selectedLocale = locales.find((locale) => locale.selected)

  return (
    <div className="locale-switcher">
      <OverlayTrigger
        placement="left"
        overlay={
          <Popover id={'popover-locale'}>
            <Popover.Content>
              <div className="locale-switcher__locale-list">
                {locales.map((locale) => (
                  <div
                    className="locale-switcher__locale"
                    key={`locale-${locale.code}`}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      actions.switchLocale(locale.code)
                    }}
                  >
                    <div className="locale-switcher__locale-flag">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/flag/${locale.code}.png`
                        }
                        alt={locale.name}
                      />
                    </div>
                    <div className="locale-switcher__locale-name">
                      {locale.name}
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Content>
          </Popover>
        }
      >
        <img
          src={
            process.env.PUBLIC_URL + `/images/flag/${selectedLocale.code}.png`
          }
          alt={selectedLocale.name}
        />
      </OverlayTrigger>
    </div>
  )
}

function Header(props) {
  return (
    <div className="header">
      <div className="header__title">
        <Translate lt="header.title" />
      </div>
      <div className="header__nav">
        <div className="header__nav-item">
          <Translate lt="header.nav.about" />
        </div>
        <div className="header__nav-item">
          <Translate lt="header.nav.login" />
        </div>
        <div className="header__nav-item">
          <LocaleSwitcher {...props} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
