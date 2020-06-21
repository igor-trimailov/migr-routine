import React, { useCallback } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import LocaleSwitcher from './LocaleSwitcher'
import Authenticated from './Authenticated'

function Header(props) {
  const location = useLocation()
  const { t } = useTranslation()
  const { actions } = props

  const handleLogout = useCallback(() => {
    actions.accountLogout()
  }, [actions])

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <span
      className="fc-header__user"
      ref={ref}
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}
    ></span>
  ))

  const HomeLink = () => (
    <Link to={`${process.env.PUBLIC_URL}/`}>{t('header.title')}</Link>
  )

  const AboutLink = () => (
    <Link to={`${process.env.PUBLIC_URL}/about`}>{t('header.nav.about')}</Link>
  )

  const LoginLink = () => (
    <Link
      to={{
        pathname: `${process.env.PUBLIC_URL}/account/login`,
        state: { background: location },
      }}
    >
      {t('header.nav.login')}
    </Link>
  )

  return (
    <div className="fc-header">
      <div className="fc-header__content">
        <div className="fc-header__title">{<HomeLink />}</div>
        <div className="fc-header__nav">
          <div className="fc-header__nav-item">{<AboutLink />}</div>
          <div className="fc-header__nav-item">
            <Authenticated unauthenticated={<LoginLink />}>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Authenticated>
          </div>
          <div className="fc-header__nav-item">
            <LocaleSwitcher {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
