import Link from 'next/link';
import { StyledFooter } from './StyledFooter';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({ dataTestId, parentClass }) => {
  return (
    <StyledFooter
      data-testid={dataTestId}
      className={`footer-area ${parentClass}`}
    >
      <div className="container">
        <div className="footer-top"></div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Get in touch!</h2>
                  <p>
                    Fusce varius, dolor tempor interdum tristique, dui urna bib
                    endum magna, ut ullamcorper purus
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href={'/blog-grid'}>Blog</Link>
                        </li>
                        <li>
                          {' '}
                          <Link href={'/case-study'}>Case Studies</Link>
                        </li>
                        <li>
                          <Link href={'/project-grid-one'}>Portfolio</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Resourses</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href={'/blog-grid'}>Blog</Link>
                        </li>
                        <li>
                          {' '}
                          <Link href={'/case-study'}>Case Studies</Link>
                        </li>
                        <li>
                          <Link href={'/project-grid-one'}>Portfolio</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Support</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link href={'/contact'}>Contact</Link>
                        </li>
                        <li>
                          {' '}
                          <Link href={'/privacy-policy'}>Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href={'/terms-use'}>Terms of Use</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{' '}
                  <a href="https://axilthemes.com/">Axilthemes</a>.
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link href={'/privacy-policy'}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href={'/terms-use'}>Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
