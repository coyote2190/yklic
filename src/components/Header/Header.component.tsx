import { useState } from 'react';
import Logo from '../Logo/Logo.component';
import OffcanvasMenu from '../OffcanvasMenu';
import StickyHeader from '../StickyHeader';
import SwitcherHeader from '../SwitcherHeader';
import { StyledHeader } from './StyledHeader';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ dataTestId }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);
  const OffcanvasHandleShow = () => setShowOffcanvas(true);

  const sticky = StickyHeader(100);

  return (
    <>
      <StyledHeader className="header axil-header header-style-3">
        <div className={`axil-mainmenu ${sticky ? 'axil-sticky' : ''}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  limage="/images/logo.svg"
                  dimage="/images/logo-3.svg"
                  simage="/images/logo-2.svg"
                />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="sidemenu-btn">
                    <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </StyledHeader>
      <OffcanvasMenu
        offcanvasShow={showOffcanvas}
        offcanvasHide={OffcanvasHandleClose}
      />
    </>
  );
};

export default Header;
