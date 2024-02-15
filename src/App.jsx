import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/styles1.css';
import './css/styles2.css';
import './css/styles3.css';
import './css/styles4.css';
import './css/styles5.css';

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <div className="header-wrapper">
    <div className="header-inner-wrapper">
      <div className="header-left-section">
        <a className="header-logo" href="/">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%"
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%"
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2788%27%20height=%2724%27/%3e"
              />
            </span>
            <img
              alt=""
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoo-logo-small.7752f6f6.png&w=96&q=100 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoo-logo-small.7752f6f6.png&w=256&q=100 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoo-logo-small.7752f6f6.png&w=256&q=100"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "0% 0%",
                filter: "blur(20px)",
                backgroundImage: 'url("data:image/png'
              }}
            />
            <noscript>
              &lt;img alt=""
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoo-logo-small.7752f6f6.png&amp;amp;w=96&amp;amp;q=100
              1x,
              /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoo-logo-small.7752f6f6.png&amp;amp;w=256&amp;amp;q=100
              2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoo-logo-small.7752f6f6.png&amp;amp;w=256&amp;amp;q=100"
              decoding="async" data-nimg="intrinsic"
              style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
              /&gt;
            </noscript>
          </span>
        </a>
        <div style={{ width: 126 }} />
        <ul className="header-links-wrapper">
          <li className="header-link">
            <a
              className="external-link"
              href="https://x.woo.org/en/markets"
              target="_blank"
              rel="noopener noreferrer"
            >
              Markets
            </a>
          </li>
          <li className="header-link">
            <a
              className="external-link"
              href="https://x.woo.org/en/trade"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trade
            </a>
          </li>
          <li className="header-link">
            <span className="expandable-menu">
              Products{/* */}{" "}
              <svg width={12} height={12} viewBox="0 0 12 12" fill="white">
                <path d="M2.5575 3.42871L6 6.60743L9.4425 3.42871L10.5 4.40731L6 8.57157L1.5 4.40731L2.5575 3.42871Z"></path>
              </svg>
              <div className="expandable-menu-list-wrapper">
                <ul className="expandable-menu-list">
                  <li className="expandable-menu-section-wrapper">
                    <ul>
                      <li className="expandable-menu-list-inner-link">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://x.woo.org/en/staking/earn"
                        >
                          Earn
                        </a>
                        <div className="tag-new">New</div>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://x.woo.org/en/staking"
                        >
                          WOO Staking
                        </a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://x.woo.org/en/wallet/buy-crypto"
                        >
                          Buy Crypto
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </span>
          </li>
          <li className="header-link">
            <a
              className="external-link"
              href="/blog/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li className="header-link">
            <a
              className="external-link"
              href="https://x.woo.org/en/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leaderboard
            </a>
          </li>
          <li className="header-link">
            <span className="expandable-menu">
              More{/* */}{" "}
              <svg width={12} height={12} viewBox="0 0 12 12" fill="white">
                <path d="M2.5575 3.42871L6 6.60743L9.4425 3.42871L10.5 4.40731L6 8.57157L1.5 4.40731L2.5575 3.42871Z"></path>
              </svg>
              <div className="expandable-menu-list-wrapper">
                <ul className="expandable-menu-list">
                  <li className="expandable-menu-section-wrapper">
                    <span className="expandable-menu-section-name">
                      Services
                    </span>
                    <ul>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/token">WOO Token</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a href="https://bit.ly/3HCBsIB">Affiliates</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/brokers">Broker Program</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/designated-market-makers">
                          Designated Market Makers
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="expandable-menu-section-wrapper">
                    <span className="expandable-menu-section-name">Other</span>
                    <ul>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/network">About Us</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/team">Our Team</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/careers">Careers</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/proof-of-reserves">Transparency Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="expandable-menu-section-wrapper">
                    <span className="expandable-menu-section-name">
                      Resources
                    </span>
                    <ul>
                      <li className="expandable-menu-list-inner-link">
                        <a href="/blog/en">News and Insights</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a href="https://bit.ly/3Z29MEW">Brand Kit</a>
                      </li>
                      <li className="expandable-menu-list-inner-link">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://learn.woo.org/"
                        >
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </span>
          </li>
        </ul>
      </div>
      <div className="header-right-section">
        <a
          style={{ cursor: "pointer" }}
          href="https://x.woo.org/register"
          className="css-13plqt"
        >
          GET STARTED
        </a>
        <div
          style={{ cursor: "pointer" }}
          className="header-right-download-button css-13plqt"
        >
          <svg width={24} height={24} viewBox="0 0 24 24" fill="white">
            <path
              d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z"
              fillOpacity="0.98"
            />
          </svg>
          <div className="header-right-qr-code-container">
            <div className="qr-code-wrapper">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%"
                  }}
                />
                <noscript>
                  &lt;img alt=""
                  srcSet="/_next/image?url=%2Fimages%2Fhome%2Fqrcode-website.png&amp;amp;w=256&amp;amp;q=75
                  1x,
                  /_next/image?url=%2Fimages%2Fhome%2Fqrcode-website.png&amp;amp;w=384&amp;amp;q=75
                  2x"
                  src="/_next/image?url=%2Fimages%2Fhome%2Fqrcode-website.png&amp;amp;w=384&amp;amp;q=75"
                  decoding="async" data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  loading="lazy" /&gt;
                </noscript>
              </span>
              <div className="qr-code-description">
                'Scan to Download WOO X Mobile'
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-hamburger">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <rect y={1} width={24} height={2} rx={1} fill="white" />
          <rect y={11} width={24} height={2} rx={1} fill="white" />
          <rect y={21} width={24} height={2} rx={1} fill="white" />
        </svg>
      </div>
    </div>
  </div>
  <div>
    <div className="custom-container" style={{ backgroundColor: "#07080A" }}>
      <div
        className="custom-inner-container"
        style={{ overflow: "visible", width: "100%", padding: 0 }}
      >
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="css-rt0uza"
        >
          <div className="css-15zu1xr">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}
            >
              <img
                sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=640&q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=750&q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=828&q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=1080&q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=1200&q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=1920&q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=2048&q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=3840&q=100 3840w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&w=3840&q=100"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  backgroundSize: "cover",
                  backgroundPosition: "0% 0%",
                  filter: "blur(20px)",
                  backgroundImage: 'url("data:image/png'
                }}
              />
              <noscript>
                &lt;img sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=640&amp;amp;q=100
                640w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=750&amp;amp;q=100
                750w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=828&amp;amp;q=100
                828w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=1080&amp;amp;q=100
                1080w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=1200&amp;amp;q=100
                1200w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=1920&amp;amp;q=100
                1920w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=2048&amp;amp;q=100
                2048w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=3840&amp;amp;q=100
                3840w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Desktop.0271547e.png&amp;amp;w=3840&amp;amp;q=100"
                decoding="async" data-nimg="fill"
                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
                /&gt;
              </noscript>
            </span>
          </div>
          <div className="css-u4d34y">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}
            >
              <img
                sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=640&q=100 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=750&q=100 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=828&q=100 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=1080&q=100 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=1200&q=100 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=1920&q=100 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=2048&q=100 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=3840&q=100 3840w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&w=3840&q=100"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  backgroundSize: "cover",
                  backgroundPosition: "0% 0%",
                  filter: "blur(20px)",
                  backgroundImage: 'url("data:image/png'
                }}
              />
              <noscript>
                &lt;img sizes="100vw"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=640&amp;amp;q=100
                640w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=750&amp;amp;q=100
                750w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=828&amp;amp;q=100
                828w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=1080&amp;amp;q=100
                1080w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=1200&amp;amp;q=100
                1200w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=1920&amp;amp;q=100
                1920w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=2048&amp;amp;q=100
                2048w,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=3840&amp;amp;q=100
                3840w"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWebsite_banner_0912_Mobile.257cb529.png&amp;amp;w=3840&amp;amp;q=100"
                decoding="async" data-nimg="fill"
                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
                /&gt;
              </noscript>
            </span>
          </div>
          <div
            className="custom-container"
            style={{ backgroundColor: "#07080A" }}
          >
            <div
              className="custom-inner-container"
              style={{ overflow: "visible" }}
            >
              <div className="css-570gu">
                <div type="h1" color="dark98" className="css-1pnqm3e">
                  Trade easier
                  <br />
                  on WOO X
                </div>
                <div type="h2" color="dark98" className="css-nhuxso">
                  Benefit from our superior execution
                  <br />
                  and unrivaled transparency.
                </div>
                <div className="css-13x3yzz">
                  <div className="css-pajjho">
                    <div color="jade2" type="h1" className="css-1ldsu6p">
                      -
                    </div>
                    <div type="caption1" color="dark80" className="css-yncfm5">
                      Spot Markets
                    </div>
                  </div>
                  <div className="css-pajjho">
                    <div color="jade2" type="h1" className="css-1ldsu6p">
                      -
                    </div>
                    <div type="caption1" color="dark80" className="css-yncfm5">
                      Futures Markets
                    </div>
                  </div>
                </div>
                <div className="css-kp27k2">
                  <a
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.woo.org/register"
                    className="css-c5tg0j"
                  >
                    Get started
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/us/app/woo-x-zero-fee-crypto-trading/id1576648404"
                    className="css-1vgaz4w"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.942 19.6147C22.619 20.3677 22.2198 21.0858 21.7508 21.7578C21.1243 22.6527 20.6098 23.271 20.2155 23.6152C19.603 24.1775 18.945 24.4668 18.2415 24.4832C17.7375 24.4832 17.1285 24.3397 16.4192 24.048C15.7075 23.7575 15.0542 23.6152 14.4557 23.6152C13.8292 23.6152 13.1572 23.7575 12.4373 24.048C11.7187 24.3397 11.1377 24.4925 10.6932 24.5065C10.02 24.5357 9.34685 24.2393 8.67601 23.6152C8.24785 23.2418 7.71235 22.6002 7.06951 21.6925C6.38118 20.7253 5.81535 19.5995 5.37201 18.3197C4.89718 16.9348 4.65918 15.5955 4.65918 14.2982C4.65918 12.813 4.98001 11.5308 5.62285 10.4575C6.10905 9.61453 6.80415 8.91099 7.64118 8.41465C8.46656 7.9196 9.40878 7.65304 10.3712 7.64232C10.9078 7.64232 11.6113 7.80798 12.4828 8.13465C13.3543 8.46132 13.9143 8.62699 14.1582 8.62699C14.3425 8.62699 14.962 8.43215 16.0167 8.04598C17.0118 7.68782 17.8518 7.53965 18.5402 7.59798C20.4068 7.74848 21.808 8.48348 22.7402 9.80882C21.0718 10.8203 20.247 12.2355 20.2633 14.052C20.2773 15.4672 20.7918 16.6443 21.7998 17.5788C22.2455 18.0053 22.7654 18.3465 23.334 18.5857C23.2103 18.9438 23.0797 19.2857 22.942 19.6147ZM18.6638 2.77848C18.6638 3.88682 18.2578 4.92282 17.4517 5.88065C16.4763 7.01932 15.298 7.67848 14.0205 7.57465C14.0038 7.43528 13.9956 7.29502 13.996 7.15465C13.996 6.08948 14.458 4.95082 15.2828 4.01865C15.6935 3.54732 16.2162 3.15415 16.8497 2.84148C17.482 2.53348 18.0793 2.36315 18.6417 2.33398C18.6568 2.48332 18.6638 2.63148 18.6638 2.77848Z"
                        fill="white"
                        fillOpacity="0.98"
                      />
                    </svg>
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=network.woo.mobile"
                    className="css-1vgaz4w"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.02996 3.11035L15.916 13.9996L5.03102 24.8889C4.83746 24.8075 4.67228 24.6707 4.55625 24.4957C4.44022 24.3208 4.37852 24.1154 4.37891 23.9054V4.09387C4.37899 3.88415 4.44076 3.67908 4.55652 3.5042C4.67228 3.32932 4.83693 3.19235 5.02996 3.11035ZM16.6718 14.7554L19.1328 17.2164L7.44065 23.9866L16.6718 14.7554ZM20.0917 11.3366L23.0925 13.0749C23.2545 13.1689 23.389 13.3038 23.4825 13.4661C23.5759 13.6283 23.6251 13.8123 23.6251 13.9996C23.6251 14.1869 23.5759 14.3709 23.4825 14.5332C23.389 14.6955 23.2545 14.8304 23.0925 14.9243L20.0906 16.6626L17.4277 13.9996L20.0917 11.3366ZM7.44065 4.01262L19.1338 10.7818L16.6718 13.2438L7.44065 4.01262Z"
                        fill="white"
                        fillOpacity="0.98"
                      />
                    </svg>
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    href="https://docs.woo.org/#introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="css-1vgaz4w"
                  >
                    <div type="subtitle1" color="dark98" className="css-l7zwc7">
                      API
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="custom-container" style={{ backgroundColor: "#F4F7F9" }}>
      <div className="custom-inner-container" style={{ overflow: "hidden" }}>
        <div className="campaign-slider">
          <section
            className="slider nuka-carousel-slider-with-dots campaign-slider-arrows"
            aria-label="carousel-slider"
            role="region"
            tabIndex={0}
            style={{
              boxSizing: "border-box",
              display: "block",
              height: "inherit",
              MozBoxSizing: "border-box",
              position: "relative",
              width: "100%"
            }}
          >
            <div
              className="slider-frame"
              style={{
                boxSizing: "border-box",
                display: "block",
                height: "100%",
                margin: 0,
                MozBoxSizing: "border-box",
                msTransform: "translate(0, 0)",
                overflow: "visible",
                padding: 0,
                position: "relative",
                touchAction: "pinch-zoom pan-y",
                transform: "translate3d(0, 0, 0)",
                WebkitTransform: "translate3d(0, 0, 0)"
              }}
            >
              <div
                className="slider-list"
                style={{
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "block",
                  height: 214,
                  margin: "0px -15px",
                  padding: 0,
                  position: "relative",
                  MozBoxSizing: "border-box",
                  msTransform: "translate(0px, 0px)",
                  touchAction: "pinch-zoom pan-y",
                  transform: "translate3d(0px, 0px, 0)",
                  WebkitTransform: "translate3d(0px, 0px, 0)",
                  width: "auto",
                  transition: "0s"
                }}
              ></div>
            </div>
            <div
              className="slider-control-centerleft"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-prev"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "0.3",
                  cursor: "not-allowed"
                }}
                disabled=""
                aria-label="previous"
                type="button"
              >
                Prev
              </button>
            </div>
            <div
              className="slider-control-centerright"
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-next"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "0.3",
                  cursor: "not-allowed"
                }}
                disabled=""
                aria-label="next"
                type="button"
              >
                Next
              </button>
            </div>
            <div
              className="slider-control-bottomcenter"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                WebkitTransform: "translateX(-50%)",
                msTransform: "translateX(-50%)"
              }}
            >
              <ul
                style={{
                  position: "relative",
                  top: "-10px",
                  display: "flex",
                  margin: 0,
                  padding: 0,
                  listStyleType: "none"
                }}
              >
                <li className="paging-item active">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: 1,
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 1 bullet"
                    aria-selected="true"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                .slider-slide>img {\n                                    width: 100%;\n                                    display: block;\n                                }\n\n                                .slider-slide>img:focus {\n                                    margin: auto;\n                                }\n                            "
              }}
            />
          </section>
        </div>
      </div>
    </div>
    <div
      className="custom-container home-proof-reserves-container"
      style={{ backgroundColor: "#F4F7F9" }}
    >
      <div
        className="custom-inner-container"
        style={{ overflow: "visible", display: "block" }}
      >
        <div className="home-proof-header">
          <div className="home-section-title home-section-title-dark home-section-title-centered">
            Proof of reserves and liabilities
          </div>
          <p className="description">
            Market-leading transparency to inspire user confidence and create
            unparalleled trust in centralized trading products.
          </p>
        </div>
        <div style={{ marginTop: 60 }}>
          <div className="Space-root updated-time css-vjbnex">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                defaultChecked=""
                className="react-switch-checkbox"
                id="react-switch-new"
              />
              <label
                style={{ background: "#608CFF" }}
                className="react-switch-label"
                htmlFor="react-switch-new"
              >
                <span
                  className="react-switch-button"
                  style={{ background: "#97B9FD" }}
                />
              </label>
              <h6
                className="Typography-root Typography--h6 Typography--light85"
                style={{ marginLeft: 10 }}
              >
                Include WOO Token
              </h6>
            </div>
            <p className="Typography-root Typography--body11 Typography--light85 css-1rwognp">
              Updated:
              <b>--</b>
            </p>
          </div>
          <div className="Card-root css-wszwt2">
            <div className="Grid-root css-1ylqiy1">
              <div className="GridItem-root css-1eac692">
                <div className="Space-root css-q8o03w">
                  <div className="Space-root css-vw8kts">
                    <div className="Space-root css-9z5d3z">
                      <h5 className="Typography-root Typography--h5 Typography--dark98">
                        Reserve ratio
                      </h5>
                      <p className="Typography-root Typography--subtitle1 Typography--dark54">
                        Total assets / Total liabilities{/* */}{" "}
                        <span className="Typography-root Typography--subtitle2 Typography--dark20">
                          (in millions USD)
                        </span>
                      </p>
                    </div>
                    <div
                      className="Space-root css-441tri"
                      style={{ textAlign: "right", flex: "1 0 auto" }}
                    >
                      <h4
                        className="Typography-root Typography--h4 Typography--navy4"
                        style={{ fontFamily: '"DIN 2014"' }}
                      >
                        --{/* */}%
                      </h4>
                      <p
                        className="Typography-root Typography--subtitle1 Typography--dark54"
                        style={{ fontFamily: '"DIN 2014"' }}
                      >
                        0.0{/* */} / {/* */}0.0
                      </p>
                    </div>
                  </div>
                  <div className="Space-root css-vw8kts">
                    <div className="Space-root css-9z5d3z">
                      <h5 className="Typography-root Typography--h5 Typography--dark98">
                        Custody ratio
                      </h5>
                      <p className="Typography-root Typography--subtitle1 Typography--dark54">
                        Custodial storage / Total liabilities{/* */}{" "}
                        <span className="Typography-root Typography--subtitle2 Typography--dark20">
                          (in millions USD)
                        </span>
                      </p>
                    </div>
                    <div
                      className="Space-root css-441tri"
                      style={{ textAlign: "right", flex: "1 0 auto" }}
                    >
                      <h4
                        className="Typography-root Typography--h4 Typography--navy4"
                        style={{ fontFamily: '"DIN 2014"' }}
                      >
                        --{/* */}%
                      </h4>
                      <p
                        className="Typography-root Typography--subtitle1 Typography--dark54"
                        style={{ fontFamily: '"DIN 2014"' }}
                      >
                        0.0{/* */} / {/* */}0.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="GridItem-root css-1os4k0j">
                <p className="Typography-root Typography--subtitle2 Typography--dark54 css-wfdj8r">
                  Data updated every{" "}
                  <span className="Typography-root Typography--subtitle2 Typography--navy4">
                    15
                  </span>
                  mins
                </p>
                <a
                  className="Typography-root Typography--button1 Typography--light85 css-1kt6stx"
                  href="/proof-of-reserves"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="custom-container"
      style={{ backgroundColor: "#F4F7F9", paddingTop: 120, paddingBottom: 32 }}
      id="execution-quality"
    >
      <div className="custom-inner-container" style={{ overflow: "hidden" }}>
        <div className="home-section-title home-section-title-dark home-section-title-centered">
          Execution quality analytics
        </div>
        <p
          className="Typography-root Typography--subtitle1 Typography--light85"
          style={{ textAlign: "center", marginTop: 32, marginBottom: 84 }}
        >
          Explore live data that verifies WOO X can lower your trading cost by
          minimizing slippage and trading fees.
        </p>
        <div className="Card-root css-xypcvm">
          <div className="css-y5mj83">
            <div style={{ marginBottom: 16 }} className="css-rsnu2t">
              <div className="MuiBox-root css-90mxih">
                <div className="ShareButtonRoot">
                  <div className="ShareButtonInner">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15476_232040)">
                        <path
                          d="M16 2.875C16 4.46282 14.7128 5.75 13.125 5.75C12.4765 5.75 11.8782 5.53529 11.3972 5.17309C11.1364 4.97673 10.7876 4.90291 10.4966 5.05076L6.16506 7.25153C5.89149 7.39053 5.75 7.69314 5.75 8C5.75 8.3333 5.9007 8.66417 6.19784 8.81514L10.4682 10.9848C10.7569 11.1315 11.1032 11.0556 11.3586 10.8565C11.846 10.4764 12.4591 10.25 13.125 10.25C14.7128 10.25 16 11.5372 16 13.125C16 14.7128 14.7128 16 13.125 16C11.5372 16 10.25 14.7128 10.25 13.125C10.25 12.8017 10.1027 12.4817 9.81455 12.3352L5.6499 10.2192C5.28443 10.0336 4.84704 10.1317 4.51005 10.3651C4.04585 10.6866 3.48242 10.875 2.875 10.875C1.28718 10.875 0 9.58782 0 8C0 6.41218 1.28718 5.125 2.875 5.125C3.49479 5.125 4.06877 5.32112 4.53827 5.65469C4.87679 5.8952 5.32012 5.99832 5.69034 5.81022L9.78232 3.73117C10.0939 3.57286 10.25 3.22449 10.25 2.875C10.25 1.28718 11.5372 0 13.125 0C14.7128 0 16 1.28718 16 2.875Z"
                          fill="url(#paint0_linear_15476_232040)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_15476_232040"
                          x1={16}
                          y1="16.25"
                          x2="-1.87265"
                          y2="13.7755"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#40FF80" />
                          <stop offset={1} stopColor="#39E6D7" />
                        </linearGradient>
                        <clipPath id="clip0_15476_232040">
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="ShareButtonText">Share</div>
                  </div>
                </div>
              </div>
              <div className="token execution-quality-input css-g2620z">
                <div className="css-i9gxme">
                  <div
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                        />
                      </span>
                      <img
                        title="BTC"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          marginRight: 8,
                          top: 0,
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%"
                        }}
                      />
                      <noscript>
                        &lt;img title="BTC"
                        srcSet="/_next/image?url=https%3A%2F%2Foss.woo.network%2Fstatic%2Fsymbol_logo%2FBTC.png&amp;amp;w=16&amp;amp;q=100
                        1x,
                        /_next/image?url=https%3A%2F%2Foss.woo.network%2Fstatic%2Fsymbol_logo%2FBTC.png&amp;amp;w=32&amp;amp;q=100
                        2x"
                        src="/_next/image?url=https%3A%2F%2Foss.woo.network%2Fstatic%2Fsymbol_logo%2FBTC.png&amp;amp;w=32&amp;amp;q=100"
                        decoding="async" data-nimg="intrinsic"
                        style="margin-right:8px;top:0;position:absolute;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                        loading="lazy" /&gt;
                      </noscript>
                    </span>
                    <div>
                      <span className="css-1iq1323">BTC{/* */} </span>
                      <span className="css-5k5rjw">-PERP</span>
                    </div>
                  </div>
                </div>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(0deg)" }}
                  className="css-1dznso7"
                >
                  <path
                    d="M6.82 9.14289L16 17.6195L25.18 9.14289L28 11.7525L16 22.8572L4 11.7525L6.82 9.14289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="execution-quality-input css-g2620z">
                <div className="css-i9gxme">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between"
                    }}
                  >
                    ${/* */}10K{/* */}
                    <p className="Typography-root Typography--body10 Typography--dark20">
                      USDT
                    </p>
                  </div>
                </div>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(0deg)" }}
                  className="css-1dznso7"
                >
                  <path
                    d="M6.82 9.14289L16 17.6195L25.18 9.14289L28 11.7525L16 22.8572L4 11.7525L6.82 9.14289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="execution-quality-input css-g2620z">
                <div className="css-i9gxme">7 days</div>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(0deg)" }}
                  className="css-1dznso7"
                >
                  <path
                    d="M6.82 9.14289L16 17.6195L25.18 9.14289L28 11.7525L16 22.8572L4 11.7525L6.82 9.14289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="MuiBox-root css-1xgrzn5">
              <div className="css-3ayzi">
                <button className="css-zep0ax">$</button>
                <button className="css-o699qn">%</button>
              </div>
              <p
                className="Typography-root Typography--body11 Typography--dark54 css-1y990lg"
                style={{ lineHeight: 20 }}
              >
                Fee methodology{" "}
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="InfoOutlinedIcon"
                >
                  <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </p>
            </div>
            <div className="ant-spin-nested-loading">
              <div>
                <div
                  className="ant-spin ant-spin-spinning"
                  aria-live="polite"
                  aria-busy="true"
                >
                  <span className="ant-spin-dot ant-spin-dot-spin">
                    <i className="ant-spin-dot-item" />
                    <i className="ant-spin-dot-item" />
                    <i className="ant-spin-dot-item" />
                    <i className="ant-spin-dot-item" />
                  </span>
                </div>
              </div>
              <div className="ant-spin-container ant-spin-blur">
                <div className="css-ie9cda">
                  <div />
                </div>
              </div>
            </div>
            <div className="css-wsm2gw">
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
                className="css-1iq1323"
              >
                Further details and instructions
                <div style={{ transform: "rotate(0deg)", display: "flex" }}>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="rgba(255, 255, 255, 0.54)"
                  >
                    <path
                      d="M5.115 6.85712L12 13.2146L18.885 6.85712L21 8.81432L12 17.1428L3 8.81432L5.115 6.85712Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3"
                style={{ minHeight: 0 }}
              >
                <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                  <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                    <ul className="css-1il890p">
                      <li>
                        Review the{/* */}{" "}
                        <span
                          style={{ cursor: "pointer" }}
                          className="css-1ilu96a"
                        >
                          fee methodology
                        </span>{" "}
                        {/* */}used in computing execution quality
                      </li>
                      <li>
                        Choose between spot or perpetual swaps, then input the
                        order size and time period for the data&nbsp;
                      </li>
                      <li>
                        Observe total slippage and fees to determine the
                        execution quality across exchanges, where a lower number
                        indicates better price execution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="custom-container best-five-tables-container"
      style={{ backgroundColor: "#F4F7F9" }}
    >
      <div
        className="custom-inner-container best-five-tables-inner-container"
        style={{ overflow: "visible" }}
      >
        <div className="best-five-tables-wrapper">
          <h2 className="best-five-tables-header">
            Trade like a professional
            <div
              className="green-hr best-five-tables-divider"
              style={{ backgroundColor: "#27DEC8" }}
            />
          </h2>
          <div className="best-five-tables-content-desktop">
            <div className="table-card-wrapper">
              <div className="table-card-header">
                <div className="table-card-title">Top Gainers</div>
              </div>
              <div className="table-card-body">
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
              </div>
              <div className="table-card-footer">
                <a
                  href="https://x.woo.org/en/markets"
                  className="home-section-link pt-link"
                >
                  View more
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="table-card-wrapper">
              <div className="table-card-header">
                <div className="table-card-title">Hot Futures</div>
              </div>
              <div className="table-card-body">
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
              </div>
              <div className="table-card-footer">
                <a
                  href="https://x.woo.org/en/markets?tab=PERP"
                  className="home-section-link pt-link"
                >
                  View more
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="table-card-wrapper" style={{ cursor: "pointer" }}>
              <div className="table-card-header">
                <div className="table-card-title">Master Traders</div>
              </div>
              <div className="table-card-body">
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
                <div className="table-info-loader">
                  <div className="table-info-loader-avatar skeleton-box" />
                  <div className="table-info-loader-lines">
                    <div className="table-info-loader-line1 skeleton-box" />
                    <div className="table-info-loader-line2 skeleton-box" />
                  </div>
                </div>
              </div>
              <div className="table-card-footer">
                <a
                  href="https://x.woo.org/en/leaderboard"
                  className="home-section-link pt-link"
                >
                  View more
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <section
            className="slider nuka-carousel-slider slider-tablet"
            aria-label="carousel-slider"
            role="region"
            tabIndex={0}
            style={{
              boxSizing: "border-box",
              display: "block",
              height: "inherit",
              MozBoxSizing: "border-box",
              position: "relative",
              width: "100%"
            }}
          >
            <div
              aria-live="polite"
              aria-atomic="true"
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                padding: 0,
                margin: "-1px",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0
              }}
              tabIndex={-1}
            >
              Slide 1 of 3
            </div>
            <div
              className="slider-frame"
              style={{
                boxSizing: "border-box",
                display: "block",
                height: "100%",
                margin: 0,
                MozBoxSizing: "border-box",
                msTransform: "translate(0, 0)",
                overflow: "visible",
                padding: 0,
                position: "relative",
                touchAction: "pinch-zoom pan-y",
                transform: "translate3d(0, 0, 0)",
                WebkitTransform: "translate3d(0, 0, 0)"
              }}
            >
              <div
                className="slider-list"
                style={{
                  boxSizing: "border-box",
                  cursor: "inherit",
                  display: "block",
                  height: 521,
                  margin: "0px -18px",
                  padding: 0,
                  position: "relative",
                  MozBoxSizing: "border-box",
                  msTransform: "translate(0px, 0px)",
                  touchAction: "pinch-zoom pan-y",
                  transform: "translate3d(0px, 0px, 0)",
                  WebkitTransform: "translate3d(0px, 0px, 0)",
                  width: "auto",
                  transition: "0s"
                }}
              >
                <div
                  className="slider-slide slide-visible slide-current"
                  aria-label="slide 1 of 3"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 521,
                    left: 0,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 18,
                    marginRight: 18,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 1023
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="table-card-wrapper">
                    <div className="table-card-header">
                      <div className="table-card-title">Top Gainers</div>
                    </div>
                    <div className="table-card-body">
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                    </div>
                    <div className="table-card-footer">
                      <a
                        href="https://x.woo.org/en/markets"
                        className="home-section-link pt-link"
                      >
                        View more
                        <svg
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-slide"
                  aria-label="slide 2 of 3"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 521,
                    left: 1059,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 18,
                    marginRight: 18,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 1023
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="table-card-wrapper">
                    <div className="table-card-header">
                      <div className="table-card-title">Hot Futures</div>
                    </div>
                    <div className="table-card-body">
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                    </div>
                    <div className="table-card-footer">
                      <a
                        href="https://x.woo.org/en/markets?tab=PERP"
                        className="home-section-link pt-link"
                      >
                        View more
                        <svg
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-slide"
                  aria-label="slide 3 of 3"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 521,
                    left: 2118,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 18,
                    marginRight: 18,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 1023
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div
                    className="table-card-wrapper"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="table-card-header">
                      <div className="table-card-title">Master Traders</div>
                    </div>
                    <div className="table-card-body">
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                    </div>
                    <div className="table-card-footer">
                      <a
                        href="https://x.woo.org/en/leaderboard"
                        className="home-section-link pt-link"
                      >
                        View more
                        <svg
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slider-control-centerleft"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-prev nuka-carousel-nav-prev-second"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "0.3",
                  cursor: "not-allowed"
                }}
                disabled=""
                aria-label="previous"
                type="button"
              >
                Prev
              </button>
            </div>
            <div
              className="slider-control-centerright"
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-next nuka-carousel-nav-next-second"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "",
                  cursor: "pointer"
                }}
                aria-label="next"
                type="button"
              >
                Next
              </button>
            </div>
            <div
              className="slider-control-bottomcenter"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                WebkitTransform: "translateX(-50%)",
                msTransform: "translateX(-50%)"
              }}
            >
              <ul
                style={{
                  position: "relative",
                  top: "-10px",
                  display: "flex",
                  margin: 0,
                  padding: 0,
                  listStyleType: "none"
                }}
              >
                <li className="paging-item active">
                  <button
                    className="nuka-carousel-no-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: 1,
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 1 bullet"
                    aria-selected="true"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
                <li className="paging-item">
                  <button
                    className="nuka-carousel-no-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: "0.5",
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 2 bullet"
                    aria-selected="false"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
                <li className="paging-item">
                  <button
                    className="nuka-carousel-no-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: "0.5",
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 3 bullet"
                    aria-selected="false"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                .slider-slide>img {\n                                    width: 100%;\n                                    display: block;\n                                }\n\n                                .slider-slide>img:focus {\n                                    margin: auto;\n                                }\n                            "
              }}
            />
          </section>
          <section
            className="slider nuka-carousel-slider-with-dots slider-mobile"
            aria-label="carousel-slider"
            role="region"
            tabIndex={0}
            style={{
              boxSizing: "border-box",
              display: "block",
              height: "inherit",
              MozBoxSizing: "border-box",
              position: "relative",
              width: "100%"
            }}
          >
            <div
              aria-live="polite"
              aria-atomic="true"
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                padding: 0,
                margin: "-1px",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0
              }}
              tabIndex={-1}
            >
              Slide 1 of 3
            </div>
            <div
              className="slider-frame"
              style={{
                boxSizing: "border-box",
                display: "block",
                height: "100%",
                margin: 0,
                MozBoxSizing: "border-box",
                msTransform: "translate(0, 0)",
                overflow: "visible",
                padding: 0,
                position: "relative",
                touchAction: "pinch-zoom pan-y",
                transform: "translate3d(0, 0, 0)",
                WebkitTransform: "translate3d(0, 0, 0)"
              }}
            >
              <div
                className="slider-list"
                style={{
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "block",
                  height: 483,
                  margin: "0px -110px",
                  padding: 0,
                  position: "relative",
                  MozBoxSizing: "border-box",
                  msTransform: "translate(-383.5px, 0px)",
                  touchAction: "pinch-zoom pan-y",
                  transform: "translate3d(-383.5px, 0px, 0)",
                  WebkitTransform: "translate3d(-383.5px, 0px, 0)",
                  width: "auto",
                  transition: "0s"
                }}
              >
                <div
                  className="slider-slide slide-visible slide-current"
                  aria-label="slide 1 of 3"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 483,
                    left: 0,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 110,
                    marginRight: 110,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 767
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="table-card-wrapper">
                    <div className="table-card-header">
                      <div className="table-card-title">Top Gainers</div>
                    </div>
                    <div className="table-card-body">
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                    </div>
                    <div className="table-card-footer">
                      <a
                        href="https://x.woo.org/en/markets"
                        className="home-section-link pt-link"
                      >
                        View more
                        <svg
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-slide"
                  aria-label="slide 2 of 3"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 483,
                    left: 987,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 110,
                    marginRight: 110,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 767
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="table-card-wrapper">
                    <div className="table-card-header">
                      <div className="table-card-title">Hot Futures</div>
                    </div>
                    <div className="table-card-body">
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                    </div>
                    <div className="table-card-footer">
                      <a
                        href="https://x.woo.org/en/markets?tab=PERP"
                        className="home-section-link pt-link"
                      >
                        View more
                        <svg
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-slide"
                  aria-label="slide 3 of 3"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 483,
                    left: 1974,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 110,
                    marginRight: 110,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 767
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div
                    className="table-card-wrapper"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="table-card-header">
                      <div className="table-card-title">Master Traders</div>
                    </div>
                    <div className="table-card-body">
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                      <div className="table-info-loader">
                        <div className="table-info-loader-avatar skeleton-box" />
                        <div className="table-info-loader-lines">
                          <div className="table-info-loader-line1 skeleton-box" />
                          <div className="table-info-loader-line2 skeleton-box" />
                        </div>
                      </div>
                    </div>
                    <div className="table-card-footer">
                      <a
                        href="https://x.woo.org/en/leaderboard"
                        className="home-section-link pt-link"
                      >
                        View more
                        <svg
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slider-control-centerleft"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-hidden"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "0.3",
                  cursor: "not-allowed"
                }}
                disabled=""
                aria-label="previous"
                type="button"
              >
                Prev
              </button>
            </div>
            <div
              className="slider-control-centerright"
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-hidden"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "",
                  cursor: "pointer"
                }}
                aria-label="next"
                type="button"
              >
                Next
              </button>
            </div>
            <div
              className="slider-control-bottomcenter"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                WebkitTransform: "translateX(-50%)",
                msTransform: "translateX(-50%)"
              }}
            >
              <ul
                style={{
                  position: "relative",
                  top: "-10px",
                  display: "flex",
                  margin: 0,
                  padding: 0,
                  listStyleType: "none"
                }}
              >
                <li className="paging-item active">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: 1,
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 1 bullet"
                    aria-selected="true"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
                <li className="paging-item">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: "0.5",
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 2 bullet"
                    aria-selected="false"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
                <li className="paging-item">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: "0.5",
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 3 bullet"
                    aria-selected="false"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                .slider-slide>img {\n                                    width: 100%;\n                                    display: block;\n                                }\n\n                                .slider-slide>img:focus {\n                                    margin: auto;\n                                }\n                            "
              }}
            />
          </section>
        </div>
      </div>
    </div>
    <div className="home-section" style={{ backgroundColor: "#F4F7F9" }}>
      <div className="home-section-wrapper">
        <div className="why-woo-x">
          <div className="home-section-title home-section-title-dark home-section-title-centered">
            Maximize your trading performance on WOO X
          </div>
          <div className="img-wrapper">
            <div className="img-item">
              <img
                src="/images/why-woo-x/ic_zero_fees.gif"
                alt=""
                width={296}
                height={296}
              />
              <p className="img-desc">
                <span>Zero Fee</span> Zone
              </p>
            </div>
            <div className="img-item">
              <img
                src="/images/why-woo-x/ic_deep_liquidity.gif"
                alt=""
                width={296}
                height={296}
              />
              <p className="img-desc">
                <span>Deep liquidity</span> and order book depth
              </p>
            </div>
            <div className="img-item">
              <img
                src="/images/why-woo-x/ic_customizable_workspaces.gif"
                alt=""
                width={296}
                height={296}
              />
              <p className="img-desc">
                <span>Powerful tools</span> and analytics
              </p>
            </div>
            <div className="img-item">
              <img
                src="/images/why-woo-x/ic_customer_care.gif"
                alt=""
                width={296}
                height={296}
              />
              <p className="img-desc">
                <span>High quality</span> customer care
              </p>
            </div>
          </div>
          <a
            style={{ cursor: "pointer" }}
            href="https://x.woo.org/register"
            className="css-hhlsq5"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
    <div className="home-section" style={{ backgroundColor: "#181C23" }}>
      <div className="home-section-wrapper">
        <div className="powerful-tools">
          <div className="home-section-title home-section-title-centered">
            Powerful tools for traders
          </div>
          <div className="pt-item pt-item-slider">
            <div className="pt-image">
              <section
                className="slider"
                aria-label="carousel-slider"
                role="region"
                tabIndex={0}
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  height: "inherit",
                  MozBoxSizing: "border-box",
                  position: "relative",
                  width: "100%"
                }}
              >
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    padding: 0,
                    margin: "-1px",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    border: 0
                  }}
                  tabIndex={-1}
                >
                  Slide 1 of 2
                </div>
                <div
                  className="slider-frame"
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    height: "100%",
                    margin: 0,
                    MozBoxSizing: "border-box",
                    msTransform: "translate(0, 0)",
                    overflow: "hidden",
                    padding: 0,
                    position: "relative",
                    touchAction: "pinch-zoom pan-y",
                    transform: "translate3d(0, 0, 0)",
                    WebkitTransform: "translate3d(0, 0, 0)"
                  }}
                >
                  <div
                    className="slider-list"
                    style={{
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      height: 0,
                      margin: "0px 0px",
                      padding: 0,
                      position: "relative",
                      MozBoxSizing: "border-box",
                      msTransform: "translate(0px, 0px)",
                      touchAction: "pinch-zoom pan-y",
                      transform: "translate3d(0px, 0px, 0)",
                      WebkitTransform: "translate3d(0px, 0px, 0)",
                      width: "auto",
                      transition: "0s"
                    }}
                  >
                    <div
                      className="slider-slide slide-visible slide-current"
                      aria-label="slide 1 of 2"
                      role="group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        height: "auto",
                        left: 0,
                        listStyleType: "none",
                        marginBottom: "auto",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "auto",
                        MozBoxSizing: "border-box",
                        position: "absolute",
                        top: 0,
                        transform: "scale(1)",
                        transition: "transform .4s linear",
                        verticalAlign: "top",
                        width: 0
                      }}
                      tabIndex={-1}
                      inert="true"
                    >
                      <img
                        src="/images/home/powerful-tools/trade-ahead-fs8.png"
                        width={1000}
                        height={1096}
                        alt=""
                        aria-hidden="false"
                        tabIndex={0}
                      />
                    </div>
                    <div
                      className="slider-slide"
                      aria-label="slide 2 of 2"
                      role="group"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        height: "auto",
                        left: 0,
                        listStyleType: "none",
                        marginBottom: "auto",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "auto",
                        MozBoxSizing: "border-box",
                        position: "absolute",
                        top: 0,
                        transform: "scale(1)",
                        transition: "transform .4s linear",
                        verticalAlign: "top",
                        width: 0
                      }}
                      tabIndex={-1}
                      inert="true"
                    >
                      <img
                        src="/images/home/powerful-tools/order_entry_pro-fs8.png"
                        width={756}
                        height={1096}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="slider-control-centerleft"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    WebkitTransform: "translateY(-50%)",
                    msTransform: "translateY(-50%)"
                  }}
                >
                  <button
                    className="home-slider-nav-prev"
                    style={{
                      border: 0,
                      background: "rgba(0,0,0,0.4)",
                      color: "white",
                      padding: 10,
                      textTransform: "uppercase",
                      opacity: "0.3",
                      cursor: "not-allowed"
                    }}
                    disabled=""
                    aria-label="previous"
                    type="button"
                  >
                    Prev
                  </button>
                </div>
                <div
                  className="slider-control-centerright"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    WebkitTransform: "translateY(-50%)",
                    msTransform: "translateY(-50%)"
                  }}
                >
                  <button
                    className="home-slider-nav-next"
                    style={{
                      border: 0,
                      background: "rgba(0,0,0,0.4)",
                      color: "white",
                      padding: 10,
                      textTransform: "uppercase",
                      opacity: "0.3",
                      cursor: "not-allowed"
                    }}
                    disabled=""
                    aria-label="next"
                    type="button"
                  >
                    Next
                  </button>
                </div>
                <div
                  className="slider-control-bottomcenter"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    WebkitTransform: "translateX(-50%)",
                    msTransform: "translateX(-50%)"
                  }}
                >
                  <ul
                    className="home-slider-dots"
                    style={{
                      position: "relative",
                      top: "-10px",
                      display: "flex",
                      margin: 0,
                      padding: 0,
                      listStyleType: "none"
                    }}
                  >
                    <li className="paging-item active">
                      <button
                        type="button"
                        style={{
                          cursor: "pointer",
                          opacity: 1,
                          background: "transparent",
                          border: "none",
                          fill: "black"
                        }}
                        aria-label="slide 1 bullet"
                        aria-selected="true"
                      >
                        <svg
                          className="paging-dot"
                          width={6}
                          height={6}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                      </button>
                    </li>
                    <li className="paging-item">
                      <button
                        type="button"
                        style={{
                          cursor: "pointer",
                          opacity: "0.5",
                          background: "transparent",
                          border: "none",
                          fill: "black"
                        }}
                        aria-label="slide 2 bullet"
                        aria-selected="false"
                      >
                        <svg
                          className="paging-dot"
                          width={6}
                          height={6}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                        .slider-slide>img {\n                                            width: 100%;\n                                            display: block;\n                                        }\n\n                                        .slider-slide>img:focus {\n                                            margin: auto;\n                                        }\n                                    "
                  }}
                />
              </section>
            </div>
            <div className="pt-text">
              <div className="pt-title">Trade ahead</div>
              <div className="pt-desc">
                Advanced trading tools built to help you get ahead.
              </div>
              <a
                href="https://x.woo.org/register"
                className="home-section-link pt-link"
              >
                Get started
                <svg
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                </svg>
              </a>
            </div>
            <div className="pt-info-wrapper pt-info-wrapper-price-ladder">
              <div className="pt-info-stats">
                1{/* */}/{/* */}2
              </div>
              <section
                className="slider"
                aria-label="carousel-slider"
                role="region"
                tabIndex={0}
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  height: "inherit",
                  MozBoxSizing: "border-box",
                  position: "relative",
                  width: "100%"
                }}
              >
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    padding: 0,
                    margin: "-1px",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    border: 0
                  }}
                  tabIndex={-1}
                >
                  Slide 1 of 2
                </div>
                <div
                  className="slider-frame"
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    height: "100%",
                    margin: 0,
                    MozBoxSizing: "border-box",
                    msTransform: "translate(0, 0)",
                    overflow: "hidden",
                    padding: 0,
                    position: "relative",
                    touchAction: "pinch-zoom pan-y",
                    transform: "translate3d(0, 0, 0)",
                    WebkitTransform: "translate3d(0, 0, 0)"
                  }}
                >
                  <div
                    className="slider-list"
                    style={{
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      height: 0,
                      margin: "0px 0px",
                      MozBoxSizing: "border-box",
                      padding: 0,
                      touchAction: "pinch-zoom pan-y",
                      width: 0
                    }}
                  >
                    <div
                      className="slider-slide slide-visible slide-current"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        height: "auto",
                        left: 0,
                        listStyleType: "none",
                        marginBottom: "auto",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "auto",
                        MozBoxSizing: "border-box",
                        opacity: 1,
                        position: "absolute",
                        top: 0,
                        verticalAlign: "top",
                        visibility: "inherit",
                        width: 0
                      }}
                      aria-label="slide 1 of 2"
                      role="group"
                      tabIndex={-1}
                    >
                      <div className="pt-info" aria-hidden="false" tabIndex={0}>
                        <p className="pt-info-title">Price ladder</p>
                        <p className="pt-info-desc">
                          Quickly place orders, delete orders, and edit orders
                          in the order book
                        </p>
                      </div>
                    </div>
                    <div
                      className="slider-slide"
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        height: "auto",
                        left: 0,
                        listStyleType: "none",
                        marginBottom: "auto",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "auto",
                        MozBoxSizing: "border-box",
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        verticalAlign: "top",
                        visibility: "hidden",
                        width: 0
                      }}
                      aria-label="slide 2 of 2"
                      role="group"
                      tabIndex={-1}
                    >
                      <div className="pt-info" aria-hidden="true">
                        <p className="pt-info-title">Order entry for pros</p>
                        <p className="pt-info-desc">
                          Make quick trades through the buttons on either side,
                          or enter the quantity and price for limit orders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-control-centerleft"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    WebkitTransform: "translateY(-50%)",
                    msTransform: "translateY(-50%)"
                  }}
                >
                  <button
                    style={{
                      border: 0,
                      background: "rgba(0,0,0,0.4)",
                      color: "white",
                      padding: 10,
                      textTransform: "uppercase",
                      opacity: "0.3",
                      cursor: "not-allowed"
                    }}
                    disabled=""
                    aria-label="previous"
                    type="button"
                  >
                    Prev
                  </button>
                </div>
                <div
                  className="slider-control-centerright"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    WebkitTransform: "translateY(-50%)",
                    msTransform: "translateY(-50%)"
                  }}
                >
                  <button
                    style={{
                      border: 0,
                      background: "rgba(0,0,0,0.4)",
                      color: "white",
                      padding: 10,
                      textTransform: "uppercase",
                      opacity: "0.3",
                      cursor: "not-allowed"
                    }}
                    disabled=""
                    aria-label="next"
                    type="button"
                  >
                    Next
                  </button>
                </div>
                <div
                  className="slider-control-bottomcenter"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    WebkitTransform: "translateX(-50%)",
                    msTransform: "translateX(-50%)"
                  }}
                >
                  <ul
                    className="home-slider-dots"
                    style={{
                      position: "relative",
                      top: "-10px",
                      display: "flex",
                      margin: 0,
                      padding: 0,
                      listStyleType: "none"
                    }}
                  >
                    <li className="paging-item active">
                      <button
                        type="button"
                        style={{
                          cursor: "pointer",
                          opacity: 1,
                          background: "transparent",
                          border: "none",
                          fill: "black"
                        }}
                        aria-label="slide 1 bullet"
                        aria-selected="true"
                      >
                        <svg
                          className="paging-dot"
                          width={6}
                          height={6}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                      </button>
                    </li>
                    <li className="paging-item">
                      <button
                        type="button"
                        style={{
                          cursor: "pointer",
                          opacity: "0.5",
                          background: "transparent",
                          border: "none",
                          fill: "black"
                        }}
                        aria-label="slide 2 bullet"
                        aria-selected="false"
                      >
                        <svg
                          className="paging-dot"
                          width={6}
                          height={6}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                        .slider-slide>img {\n                                            width: 100%;\n                                            display: block;\n                                        }\n\n                                        .slider-slide>img:focus {\n                                            margin: auto;\n                                        }\n                                    "
                  }}
                />
              </section>
            </div>
          </div>
          <div className="pt-item pt-item-even">
            <div className="pt-text">
              <div className="pt-title">Trade with flexibility</div>
              <div className="pt-desc">
                Leverage your existing assets at ease with
                cross-collateralization.
              </div>
              <a
                href="https://x.woo.org/register"
                className="home-section-link pt-link"
              >
                Get started
                <svg
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                </svg>
              </a>
            </div>
            <div className="pt-image">
              <img
                src="/images/home/powerful-tools/trade-with-flexibility-fs8.png"
                width={1000}
                height={626}
                alt=""
              />
            </div>
          </div>
          <div className="pt-item pt-item-odd">
            <div className="pt-text">
              <div className="pt-title">Trade efficiently</div>
              <div className="pt-desc">
                Manage and trade all of your spot and futures positions in one
                place.
              </div>
              <a
                href="https://x.woo.org/register"
                className="home-section-link pt-link"
              >
                Get started
                <svg
                  width={20}
                  height={21}
                  viewBox="0 0 20 21"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                </svg>
              </a>
            </div>
            <div className="pt-image">
              <img
                src="/images/home/powerful-tools/trade_efficiently-fs8.png"
                width={1000}
                height={544}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="custom-container" style={{ backgroundColor: "#F4F7F9" }}>
      <div className="custom-inner-container" style={{ overflow: "hidden" }}>
        <div className="specialized-cards">
          <div className="home-section-title home-section-title-dark home-section-title-centered specialized-cards-title">
            Specialized for serious traders and investors
          </div>
          <div className="specialized-cards-wrapper">
            <div className="specialized-card">
              <div className="specialized-card-tittle-wrapper">
                Buy Crypto
                <div className="rainbow-tag-wrapper">Best for Beginner</div>
              </div>
              <div className="specialized-card-content">
                <div className="specialized-card-left-column">
                  <div className="specialized-card-description">
                    Easily buy cryptocurrencies with credit or debit cards.
                  </div>
                  <a
                    href="https://x.woo.org/en/wallet/buy-crypto"
                    className="section-link-button"
                  >
                    Buy now
                    <svg
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="specialized-card-right-column">
                  <svg
                    width={148}
                    height={148}
                    viewBox="0 0 148 148"
                    fill="none"
                  >
                    <path
                      d="M27.75 35.1496C27.75 32.0844 30.2348 29.5996 33.3 29.5996H118.4C121.465 29.5996 123.95 32.0844 123.95 35.1496V40.6996H33.3C30.2348 40.6996 27.75 38.2148 27.75 35.1496Z"
                      fill="#53A5F0"
                    />
                    <path
                      d="M27.75 35.1504H42.55V40.7004H74H129.5C132.565 40.7004 135.05 43.1852 135.05 46.2504V105.45C135.05 108.516 132.565 111 129.5 111H33.3C30.2348 111 27.75 108.516 27.75 105.45V35.1504Z"
                      fill="#535E7B"
                    />
                    <path
                      d="M27.75 35.1496C27.75 32.0844 30.2348 29.5996 33.3 29.5996H37C40.0652 29.5996 42.55 32.0844 42.55 35.1496V40.6996H33.3C30.2348 40.6996 27.75 38.2148 27.75 35.1496Z"
                      fill="#53A5F0"
                    />
                    <path
                      d="M105.45 70.3C105.45 67.2348 107.935 64.75 111 64.75H135.05V83.25H111C107.935 83.25 105.45 80.7652 105.45 77.7V70.3Z"
                      fill="#53A5F0"
                    />
                    <circle cx="114.7" cy="73.9998" r="3.7" fill="#535E7B" />
                    <circle
                      cx="42.5502"
                      cy="86.9496"
                      r="29.6"
                      fill="#535E7B"
                      stroke="#71D98D"
                      strokeWidth="5.55"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M33.2998 80.7563C33.2998 78.385 34.028 76.5248 35.4844 75.1756C36.9539 73.8128 38.8564 72.9951 41.1918 72.7226V68.4502H43.5338V72.6817C45.7381 72.7635 47.9292 73.3903 50.1073 74.5623V79.448C48.008 78.0579 45.8168 77.3493 43.5338 77.322V84.2723C44.5048 84.5857 45.292 84.8515 45.8955 85.0695C46.4991 85.2876 47.2142 85.6487 48.0408 86.153C48.8805 86.6572 49.5365 87.2091 50.0088 87.8088C50.4943 88.4084 50.9142 89.1988 51.2684 90.18C51.6227 91.1612 51.7998 92.2787 51.7998 93.5325C51.7998 95.6312 51.006 97.3824 49.4184 98.7861C47.8308 100.19 45.8693 100.987 43.5338 101.178V105.45H41.1918V101.178C38.3184 100.987 35.8058 100.21 33.6541 98.8474V93.7369C35.937 95.4949 38.4496 96.3876 41.1918 96.4148V88.6673C40.1947 88.3539 39.4271 88.1018 38.8892 87.911C38.3512 87.7202 37.6624 87.3999 36.8227 86.9502C35.9961 86.5005 35.3663 86.0235 34.9333 85.5193C34.5135 85.015 34.133 84.3541 33.7918 83.5364C33.4638 82.7187 33.2998 81.792 33.2998 80.7563ZM38.1216 80.6336C38.1216 81.3559 38.3775 81.9351 38.8892 82.3712C39.4009 82.7937 40.1684 83.1889 41.1918 83.5568V77.5673C39.145 78.017 38.1216 79.0391 38.1216 80.6336ZM43.5338 96.2513C45.8168 95.8833 46.9583 94.8612 46.9583 93.185C46.9583 91.536 45.8168 90.2822 43.5338 89.4237V96.2513Z"
                      fill="#71D98D"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="specialized-card">
              <div className="specialized-card-tittle-wrapper">
                Spot / Futures
              </div>
              <div className="specialized-card-content">
                <div className="specialized-card-left-column">
                  <div className="specialized-card-description">
                    Trade with the lowest fees for 0 spot markets and 0 futures
                    markets
                  </div>
                  <a href="https://x.woo.org" className="section-link-button">
                    Trade now
                    <svg
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="specialized-card-right-column">
                  <svg
                    width={148}
                    height={148}
                    viewBox="0 0 148 148"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2858 99.6542C10.3119 100.183 9.14059 102.212 9.66947 104.186C10.1984 106.16 12.2272 107.331 14.201 106.802L63.8035 93.5111L44.0485 118.673C41.1892 122.315 43.7837 127.65 48.4138 127.65H99.5866C104.217 127.65 106.811 122.315 103.952 118.673L80.6524 88.9965L135.714 74.2426C137.688 73.7137 138.86 71.6849 138.331 69.7111C137.802 67.7372 135.773 66.5659 133.799 67.0948L12.2858 99.6542Z"
                      fill="#535E7B"
                    />
                    <circle cx="109.15" cy="44.3996" r="24.05" fill="#53A5F0" />
                    <circle
                      cx="29.5998"
                      cy="75.8498"
                      r="12.025"
                      stroke="#71D98D"
                      strokeWidth="5.55"
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="specialized-card">
              <div className="specialized-card-tittle-wrapper">
                Leaderboard<div className="rainbow-tag-wrapper">New</div>
              </div>
              <div className="specialized-card-content">
                <div className="specialized-card-left-column">
                  <div className="specialized-card-description">
                    Learn from top traders and benchmark yourself against the
                    best.
                  </div>
                  <a
                    href="https://x.woo.org/en/leaderboard"
                    className="section-link-button"
                  >
                    View more
                    <svg
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="specialized-card-right-column">
                  <svg
                    width={148}
                    height={148}
                    viewBox="0 0 148 148"
                    fill="none"
                  >
                    <path
                      d="M59.2002 51.8C59.2002 48.7348 61.685 46.25 64.7502 46.25H86.9502C90.0154 46.25 92.5002 48.7348 92.5002 51.8V138.75H59.2002V51.8Z"
                      fill="#53A5F0"
                    />
                    <path
                      d="M22.2002 66.5998C22.2002 63.5346 24.685 61.0498 27.7502 61.0498H49.9502C53.0154 61.0498 55.5002 63.5346 55.5002 66.5998V138.75H22.2002V66.5998Z"
                      fill="#535E7B"
                    />
                    <path
                      d="M96.2002 81.3996C96.2002 78.3344 98.685 75.8496 101.75 75.8496H123.95C127.015 75.8496 129.5 78.3344 129.5 81.3996V138.75H96.2002V81.3996Z"
                      fill="#535E7B"
                    />
                    <path
                      d="M74.1911 12.6114C74.8697 11.2364 76.8305 11.2364 77.5091 12.6114L80.8567 19.3944C81.1261 19.9404 81.647 20.3189 82.2496 20.4065L89.7351 21.4942C91.2525 21.7146 91.8584 23.5794 90.7604 24.6497L85.3438 29.9295C84.9078 30.3545 84.7089 30.9669 84.8118 31.567L86.0905 39.0223C86.3497 40.5335 84.7634 41.686 83.4062 40.9725L76.711 37.4526C76.172 37.1692 75.5282 37.1692 74.9892 37.4526L68.294 40.9725C66.9368 41.686 65.3505 40.5335 65.6097 39.0223L66.8884 31.567C66.9913 30.9669 66.7924 30.3545 66.3564 29.9295L60.9398 24.6497C59.8418 23.5794 60.4477 21.7146 61.9651 21.4942L69.4506 20.4065C70.0532 20.3189 70.574 19.9404 70.8435 19.3944L74.1911 12.6114Z"
                      fill="#71D98D"
                    />
                    <rect
                      x="9.25"
                      y="131.35"
                      width="129.5"
                      height="7.4"
                      rx="3.7"
                      fill="#535E7B"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="specialized-card">
              <div className="specialized-card-tittle-wrapper">Launchpad</div>
              <div className="specialized-card-content">
                <div className="specialized-card-left-column">
                  <div className="specialized-card-description">
                    Be the first to get your hands on promising new projects.
                  </div>
                  <div className="specialized-cards-wrapper-coming-soon">
                    Coming Soon
                  </div>
                </div>
                <div className="specialized-card-right-column">
                  <svg
                    width={148}
                    height={148}
                    viewBox="0 0 148 148"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M74.0002 107.298C92.3913 107.298 107.3 92.3893 107.3 73.9982C107.3 55.6072 92.3913 40.6982 74.0002 40.6982C55.6091 40.6982 40.7002 55.6072 40.7002 73.9982C40.7002 92.3893 55.6091 107.298 74.0002 107.298ZM65.5215 59.8687C63.7738 61.4877 62.9 63.72 62.9 66.5655C62.9 67.8084 63.0968 68.9204 63.4904 69.9016C63.8998 70.8828 64.3564 71.676 64.8602 72.2811C65.3798 72.8861 66.1355 73.4585 67.1274 73.9982C68.1351 74.5379 68.9617 74.9222 69.6072 75.1511C70.2528 75.3801 71.1738 75.6826 72.3704 76.0587V85.3558C69.0798 85.3231 66.0647 84.2519 63.3251 82.1423V88.2749C65.9072 89.9102 68.9223 90.8424 72.3704 91.0713V96.1982H75.1808V91.0713C77.9834 90.8424 80.3372 89.8857 82.2423 88.2013C84.1474 86.5169 85.1 84.4154 85.1 81.897C85.1 80.3924 84.8874 79.0515 84.4623 77.874C84.0372 76.6965 83.5334 75.748 82.9508 75.0285C82.384 74.3089 81.5968 73.6466 80.5891 73.0415C79.5972 72.4364 78.7391 72.0031 78.0149 71.7414C77.2906 71.4797 76.346 71.1608 75.1808 70.7847V62.4444C77.9204 62.4771 80.5498 63.3275 83.0689 64.9955V59.1328C80.4553 57.7264 77.826 56.9741 75.1808 56.876V51.7982H72.3704V56.925C69.5679 57.2521 67.2849 58.2333 65.5215 59.8687ZM69.6072 68.5034C68.9932 67.9801 68.6862 67.285 68.6862 66.4183C68.6862 64.5049 69.9143 63.2784 72.3704 62.7387V69.9261C71.1423 69.4846 70.2213 69.0103 69.6072 68.5034ZM79.2902 81.48C79.2902 83.4915 77.9204 84.718 75.1808 85.1595V76.9664C77.9204 77.9966 79.2902 79.5012 79.2902 81.48Z"
                      fill="#535E7B"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M88.8 14.7992C88.8 16.3858 88.5503 17.9141 88.0881 19.3469C107.931 24.4467 123.553 40.0681 128.653 59.9108C130.086 59.4488 131.614 59.1992 133.2 59.1992C133.538 59.1992 133.873 59.2105 134.206 59.2328C128.739 36.8663 111.133 19.2606 88.7664 13.7939C88.7887 14.1261 88.8 14.4613 88.8 14.7992ZM59.2335 134.204C59.2113 133.872 59.2 133.537 59.2 133.199C59.2 131.612 59.4497 130.084 59.912 128.651C40.0697 123.551 24.4487 107.929 19.3488 88.087C17.9156 88.5494 16.387 88.7992 14.8 88.7992C14.4625 88.7992 14.1277 88.7879 13.7959 88.7656C19.2628 111.132 36.8678 128.737 59.2335 134.204ZM134.206 88.7655C128.739 111.132 111.133 128.738 88.7664 134.204C88.7887 133.872 88.8 133.537 88.8 133.199C88.8 131.613 88.5503 130.084 88.0881 128.651C107.931 123.552 123.553 107.93 128.653 88.0875C130.086 88.5496 131.614 88.7992 133.2 88.7992C133.538 88.7992 133.873 88.7878 134.206 88.7655ZM59.2335 13.7944C36.8678 19.2616 19.2628 36.8668 13.7959 59.2327C14.1277 59.2105 14.4625 59.1992 14.8 59.1992C16.387 59.1992 17.9156 59.449 19.3488 59.9114C24.4487 40.069 40.0697 24.4476 59.912 19.3473C59.4497 17.9144 59.2 16.3859 59.2 14.7992C59.2 14.4615 59.2113 14.1264 59.2335 13.7944Z"
                      fill="#71D98D"
                    />
                    <circle cx={74} cy="14.7998" r="9.25" fill="#53A5F0" />
                    <circle cx="14.7998" cy={74} r="9.25" fill="#53A5F0" />
                    <circle cx={74} cy="133.2" r="9.25" fill="#53A5F0" />
                    <circle cx="133.2" cy={74} r="9.25" fill="#53A5F0" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <section
            className="slider nuka-carousel-slider-with-dots specialized-cards-slider"
            aria-label="carousel-slider"
            role="region"
            tabIndex={0}
            style={{
              boxSizing: "border-box",
              display: "block",
              height: "inherit",
              MozBoxSizing: "border-box",
              position: "relative",
              width: "100%"
            }}
          >
            <div
              aria-live="polite"
              aria-atomic="true"
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                padding: 0,
                margin: "-1px",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0
              }}
              tabIndex={-1}
            >
              Slide 1 of 4
            </div>
            <div
              className="slider-frame"
              style={{
                boxSizing: "border-box",
                display: "block",
                height: "100%",
                margin: 0,
                MozBoxSizing: "border-box",
                msTransform: "translate(0, 0)",
                overflow: "visible",
                padding: 0,
                position: "relative",
                touchAction: "pinch-zoom pan-y",
                transform: "translate3d(0, 0, 0)",
                WebkitTransform: "translate3d(0, 0, 0)"
              }}
            >
              <div
                className="slider-list"
                style={{
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "block",
                  height: 237,
                  margin: "0px -110px",
                  padding: 0,
                  position: "relative",
                  MozBoxSizing: "border-box",
                  msTransform: "translate(0px, 0px)",
                  touchAction: "pinch-zoom pan-y",
                  transform: "translate3d(0px, 0px, 0)",
                  WebkitTransform: "translate3d(0px, 0px, 0)",
                  width: "auto",
                  transition: "0s"
                }}
              >
                <div
                  className="slider-slide slide-visible slide-current"
                  aria-label="slide 1 of 4"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 237,
                    left: 0,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 110,
                    marginRight: 110,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 767
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="specialized-card specialized-card-dark">
                    <div className="specialized-card-tittle-wrapper">
                      Buy Crypto
                      <div className="rainbow-tag-wrapper">
                        Best for Beginner
                      </div>
                    </div>
                    <div className="specialized-card-content">
                      <div className="specialized-card-left-column">
                        <div className="specialized-card-description">
                          Easily buy cryptocurrencies with credit or debit
                          cards.
                        </div>
                        <a
                          style={{ cursor: "pointer" }}
                          className="specialized-card-buy-now-button css-kw1gcl"
                          href="https://x.woo.org/en/wallet/buy-crypto"
                        >
                          Buy now{/* */}
                          <div className="specialized-card-buy-now-button-arrow">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="specialized-card-right-column">
                        <svg
                          width={148}
                          height={148}
                          viewBox="0 0 148 148"
                          fill="none"
                        >
                          <path
                            d="M27.75 35.1496C27.75 32.0844 30.2348 29.5996 33.3 29.5996H118.4C121.465 29.5996 123.95 32.0844 123.95 35.1496V40.6996H33.3C30.2348 40.6996 27.75 38.2148 27.75 35.1496Z"
                            fill="#53A5F0"
                          />
                          <path
                            d="M27.75 35.1504H42.55V40.7004H74H129.5C132.565 40.7004 135.05 43.1852 135.05 46.2504V105.45C135.05 108.516 132.565 111 129.5 111H33.3C30.2348 111 27.75 108.516 27.75 105.45V35.1504Z"
                            fill="#535E7B"
                          />
                          <path
                            d="M27.75 35.1496C27.75 32.0844 30.2348 29.5996 33.3 29.5996H37C40.0652 29.5996 42.55 32.0844 42.55 35.1496V40.6996H33.3C30.2348 40.6996 27.75 38.2148 27.75 35.1496Z"
                            fill="#53A5F0"
                          />
                          <path
                            d="M105.45 70.3C105.45 67.2348 107.935 64.75 111 64.75H135.05V83.25H111C107.935 83.25 105.45 80.7652 105.45 77.7V70.3Z"
                            fill="#53A5F0"
                          />
                          <circle
                            cx="114.7"
                            cy="73.9998"
                            r="3.7"
                            fill="#535E7B"
                          />
                          <circle
                            cx="42.5502"
                            cy="86.9496"
                            r="29.6"
                            fill="#535E7B"
                            stroke="#71D98D"
                            strokeWidth="5.55"
                            strokeMiterlimit={10}
                          ></circle>
                          <path
                            d="M33.2998 80.7563C33.2998 78.385 34.028 76.5248 35.4844 75.1756C36.9539 73.8128 38.8564 72.9951 41.1918 72.7226V68.4502H43.5338V72.6817C45.7381 72.7635 47.9292 73.3903 50.1073 74.5623V79.448C48.008 78.0579 45.8168 77.3493 43.5338 77.322V84.2723C44.5048 84.5857 45.292 84.8515 45.8955 85.0695C46.4991 85.2876 47.2142 85.6487 48.0408 86.153C48.8805 86.6572 49.5365 87.2091 50.0088 87.8088C50.4943 88.4084 50.9142 89.1988 51.2684 90.18C51.6227 91.1612 51.7998 92.2787 51.7998 93.5325C51.7998 95.6312 51.006 97.3824 49.4184 98.7861C47.8308 100.19 45.8693 100.987 43.5338 101.178V105.45H41.1918V101.178C38.3184 100.987 35.8058 100.21 33.6541 98.8474V93.7369C35.937 95.4949 38.4496 96.3876 41.1918 96.4148V88.6673C40.1947 88.3539 39.4271 88.1018 38.8892 87.911C38.3512 87.7202 37.6624 87.3999 36.8227 86.9502C35.9961 86.5005 35.3663 86.0235 34.9333 85.5193C34.5135 85.015 34.133 84.3541 33.7918 83.5364C33.4638 82.7187 33.2998 81.792 33.2998 80.7563ZM38.1216 80.6336C38.1216 81.3559 38.3775 81.9351 38.8892 82.3712C39.4009 82.7937 40.1684 83.1889 41.1918 83.5568V77.5673C39.145 78.017 38.1216 79.0391 38.1216 80.6336ZM43.5338 96.2513C45.8168 95.8833 46.9583 94.8612 46.9583 93.185C46.9583 91.536 45.8168 90.2822 43.5338 89.4237V96.2513Z"
                            fill="#71D98D"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-slide"
                  aria-label="slide 2 of 4"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 237,
                    left: 987,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 110,
                    marginRight: 110,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 767
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="specialized-card specialized-card-dark">
                    <div className="specialized-card-tittle-wrapper">
                      Spot / Futures
                    </div>
                    <div className="specialized-card-content">
                      <div className="specialized-card-left-column">
                        <div className="specialized-card-description">
                          Trade with the lowest fees for 0 spot markets and 0
                          futures markets
                        </div>
                        <a
                          style={{ cursor: "pointer" }}
                          className="specialized-card-buy-now-button css-kw1gcl"
                          href="https://x.woo.org"
                        >
                          Trade now
                          <div className="specialized-card-buy-now-button-arrow">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="specialized-card-right-column">
                        <svg
                          width={148}
                          height={148}
                          viewBox="0 0 148 148"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.2858 99.6542C10.3119 100.183 9.14059 102.212 9.66947 104.186C10.1984 106.16 12.2272 107.331 14.201 106.802L63.8035 93.5111L44.0485 118.673C41.1892 122.315 43.7837 127.65 48.4138 127.65H99.5866C104.217 127.65 106.811 122.315 103.952 118.673L80.6524 88.9965L135.714 74.2426C137.688 73.7137 138.86 71.6849 138.331 69.7111C137.802 67.7372 135.773 66.5659 133.799 67.0948L12.2858 99.6542Z"
                            fill="#535E7B"
                          />
                          <circle
                            cx="109.15"
                            cy="44.3996"
                            r="24.05"
                            fill="#53A5F0"
                          ></circle>
                          <circle
                            cx="29.5998"
                            cy="75.8498"
                            r="12.025"
                            stroke="#71D98D"
                            strokeWidth="5.55"
                            strokeMiterlimit={10}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-slide"
                  aria-label="slide 3 of 4"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 237,
                    left: 1974,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 110,
                    marginRight: 110,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 767
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="specialized-card specialized-card-dark">
                    <div className="specialized-card-tittle-wrapper">
                      Leaderboard<div className="rainbow-tag-wrapper">New</div>
                    </div>
                    <div className="specialized-card-content">
                      <div className="specialized-card-left-column">
                        <div className="specialized-card-description">
                          Learn from top traders and benchmark yourself against
                          the best.
                        </div>
                        <a
                          style={{ cursor: "pointer" }}
                          className="specialized-card-buy-now-button css-kw1gcl"
                          href="https://x.woo.org/en/leaderboard"
                        >
                          View more
                          <div className="specialized-card-buy-now-button-arrow">
                            <svg
                              width={20}
                              height={21}
                              viewBox="0 0 20 21"
                              fill="current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div className="specialized-card-right-column">
                        <svg
                          width={148}
                          height={148}
                          viewBox="0 0 148 148"
                          fill="none"
                        >
                          <path
                            d="M59.2002 51.8C59.2002 48.7348 61.685 46.25 64.7502 46.25H86.9502C90.0154 46.25 92.5002 48.7348 92.5002 51.8V138.75H59.2002V51.8Z"
                            fill="#53A5F0"
                          />
                          <path
                            d="M22.2002 66.5998C22.2002 63.5346 24.685 61.0498 27.7502 61.0498H49.9502C53.0154 61.0498 55.5002 63.5346 55.5002 66.5998V138.75H22.2002V66.5998Z"
                            fill="#535E7B"
                          />
                          <path
                            d="M96.2002 81.3996C96.2002 78.3344 98.685 75.8496 101.75 75.8496H123.95C127.015 75.8496 129.5 78.3344 129.5 81.3996V138.75H96.2002V81.3996Z"
                            fill="#535E7B"
                          />
                          <path
                            d="M74.1911 12.6114C74.8697 11.2364 76.8305 11.2364 77.5091 12.6114L80.8567 19.3944C81.1261 19.9404 81.647 20.3189 82.2496 20.4065L89.7351 21.4942C91.2525 21.7146 91.8584 23.5794 90.7604 24.6497L85.3438 29.9295C84.9078 30.3545 84.7089 30.9669 84.8118 31.567L86.0905 39.0223C86.3497 40.5335 84.7634 41.686 83.4062 40.9725L76.711 37.4526C76.172 37.1692 75.5282 37.1692 74.9892 37.4526L68.294 40.9725C66.9368 41.686 65.3505 40.5335 65.6097 39.0223L66.8884 31.567C66.9913 30.9669 66.7924 30.3545 66.3564 29.9295L60.9398 24.6497C59.8418 23.5794 60.4477 21.7146 61.9651 21.4942L69.4506 20.4065C70.0532 20.3189 70.574 19.9404 70.8435 19.3944L74.1911 12.6114Z"
                            fill="#71D98D"
                          />
                          <rect
                            x="9.25"
                            y="131.35"
                            width="129.5"
                            height="7.4"
                            rx="3.7"
                            fill="#535E7B"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-slide"
                  aria-label="slide 4 of 4"
                  role="group"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    height: 237,
                    left: 2961,
                    listStyleType: "none",
                    marginBottom: "auto",
                    marginLeft: 110,
                    marginRight: 110,
                    marginTop: "auto",
                    MozBoxSizing: "border-box",
                    position: "absolute",
                    top: 0,
                    transform: "scale(1)",
                    transition: "transform .4s linear",
                    verticalAlign: "top",
                    width: 767
                  }}
                  tabIndex={-1}
                  inert="true"
                >
                  <div className="specialized-card specialized-card-dark">
                    <div className="specialized-card-tittle-wrapper">
                      Launchpad
                    </div>
                    <div className="specialized-card-content">
                      <div className="specialized-card-left-column">
                        <div className="specialized-card-description">
                          Be the first to get your hands on promising new
                          projects.
                        </div>
                        <div className="specialized-cards-wrapper-coming-soon">
                          Coming Soon
                        </div>
                      </div>
                      <div className="specialized-card-right-column">
                        <svg
                          width={148}
                          height={148}
                          viewBox="0 0 148 148"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M74.0002 107.298C92.3913 107.298 107.3 92.3893 107.3 73.9982C107.3 55.6072 92.3913 40.6982 74.0002 40.6982C55.6091 40.6982 40.7002 55.6072 40.7002 73.9982C40.7002 92.3893 55.6091 107.298 74.0002 107.298ZM65.5215 59.8687C63.7738 61.4877 62.9 63.72 62.9 66.5655C62.9 67.8084 63.0968 68.9204 63.4904 69.9016C63.8998 70.8828 64.3564 71.676 64.8602 72.2811C65.3798 72.8861 66.1355 73.4585 67.1274 73.9982C68.1351 74.5379 68.9617 74.9222 69.6072 75.1511C70.2528 75.3801 71.1738 75.6826 72.3704 76.0587V85.3558C69.0798 85.3231 66.0647 84.2519 63.3251 82.1423V88.2749C65.9072 89.9102 68.9223 90.8424 72.3704 91.0713V96.1982H75.1808V91.0713C77.9834 90.8424 80.3372 89.8857 82.2423 88.2013C84.1474 86.5169 85.1 84.4154 85.1 81.897C85.1 80.3924 84.8874 79.0515 84.4623 77.874C84.0372 76.6965 83.5334 75.748 82.9508 75.0285C82.384 74.3089 81.5968 73.6466 80.5891 73.0415C79.5972 72.4364 78.7391 72.0031 78.0149 71.7414C77.2906 71.4797 76.346 71.1608 75.1808 70.7847V62.4444C77.9204 62.4771 80.5498 63.3275 83.0689 64.9955V59.1328C80.4553 57.7264 77.826 56.9741 75.1808 56.876V51.7982H72.3704V56.925C69.5679 57.2521 67.2849 58.2333 65.5215 59.8687ZM69.6072 68.5034C68.9932 67.9801 68.6862 67.285 68.6862 66.4183C68.6862 64.5049 69.9143 63.2784 72.3704 62.7387V69.9261C71.1423 69.4846 70.2213 69.0103 69.6072 68.5034ZM79.2902 81.48C79.2902 83.4915 77.9204 84.718 75.1808 85.1595V76.9664C77.9204 77.9966 79.2902 79.5012 79.2902 81.48Z"
                            fill="#535E7B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M88.8 14.7992C88.8 16.3858 88.5503 17.9141 88.0881 19.3469C107.931 24.4467 123.553 40.0681 128.653 59.9108C130.086 59.4488 131.614 59.1992 133.2 59.1992C133.538 59.1992 133.873 59.2105 134.206 59.2328C128.739 36.8663 111.133 19.2606 88.7664 13.7939C88.7887 14.1261 88.8 14.4613 88.8 14.7992ZM59.2335 134.204C59.2113 133.872 59.2 133.537 59.2 133.199C59.2 131.612 59.4497 130.084 59.912 128.651C40.0697 123.551 24.4487 107.929 19.3488 88.087C17.9156 88.5494 16.387 88.7992 14.8 88.7992C14.4625 88.7992 14.1277 88.7879 13.7959 88.7656C19.2628 111.132 36.8678 128.737 59.2335 134.204ZM134.206 88.7655C128.739 111.132 111.133 128.738 88.7664 134.204C88.7887 133.872 88.8 133.537 88.8 133.199C88.8 131.613 88.5503 130.084 88.0881 128.651C107.931 123.552 123.553 107.93 128.653 88.0875C130.086 88.5496 131.614 88.7992 133.2 88.7992C133.538 88.7992 133.873 88.7878 134.206 88.7655ZM59.2335 13.7944C36.8678 19.2616 19.2628 36.8668 13.7959 59.2327C14.1277 59.2105 14.4625 59.1992 14.8 59.1992C16.387 59.1992 17.9156 59.449 19.3488 59.9114C24.4487 40.069 40.0697 24.4476 59.912 19.3473C59.4497 17.9144 59.2 16.3859 59.2 14.7992C59.2 14.4615 59.2113 14.1264 59.2335 13.7944Z"
                            fill="#71D98D"
                          />
                          <circle
                            cx={74}
                            cy="14.7998"
                            r="9.25"
                            fill="#53A5F0"
                          />
                          <circle
                            cx="14.7998"
                            cy={74}
                            r="9.25"
                            fill="#53A5F0"
                          />
                          <circle cx={74} cy="133.2" r="9.25" fill="#53A5F0" />
                          <circle cx="133.2" cy={74} r="9.25" fill="#53A5F0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slider-control-centerleft"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-hidden"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "0.3",
                  cursor: "not-allowed"
                }}
                disabled=""
                aria-label="previous"
                type="button"
              >
                Prev
              </button>
            </div>
            <div
              className="slider-control-centerright"
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                WebkitTransform: "translateY(-50%)",
                msTransform: "translateY(-50%)"
              }}
            >
              <button
                className="nuka-carousel-nav-hidden"
                style={{
                  border: 0,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  padding: 10,
                  textTransform: "uppercase",
                  opacity: "",
                  cursor: "pointer"
                }}
                aria-label="next"
                type="button"
              >
                Next
              </button>
            </div>
            <div
              className="slider-control-bottomcenter"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                WebkitTransform: "translateX(-50%)",
                msTransform: "translateX(-50%)"
              }}
            >
              <ul
                style={{
                  position: "relative",
                  top: "-10px",
                  display: "flex",
                  margin: 0,
                  padding: 0,
                  listStyleType: "none"
                }}
              >
                <li className="paging-item active">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: 1,
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 1 bullet"
                    aria-selected="true"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
                <li className="paging-item">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: "0.5",
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 2 bullet"
                    aria-selected="false"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
                <li className="paging-item">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: "0.5",
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 3 bullet"
                    aria-selected="false"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
                <li className="paging-item">
                  <button
                    className="nuka-carousel-dots"
                    type="button"
                    style={{
                      cursor: "pointer",
                      opacity: "0.5",
                      background: "transparent",
                      border: "none",
                      fill: "black"
                    }}
                    aria-label="slide 4 bullet"
                    aria-selected="false"
                  >
                    <svg
                      className="paging-dot"
                      width={6}
                      height={6}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx={3} cy={3} r={3} />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                .slider-slide>img {\n                                    width: 100%;\n                                    display: block;\n                                }\n\n                                .slider-slide>img:focus {\n                                    margin: auto;\n                                }\n                            "
              }}
            />
          </section>
        </div>
      </div>
    </div>
    <div className="custom-container" style={{ backgroundColor: "#E3E7EA" }}>
      <div className="custom-inner-container" style={{ overflow: "visible" }}>
        <div className="trade-anywhere">
          <div className="trade-anywhere-image-wrapper">
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative",
                maxWidth: "100%"
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: "100%"
                }}
              >
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27828%27%20height=%27660%27/%3e"
                />
              </span>
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "0% 0%",
                  filter: "blur(20px)",
                  backgroundImage: 'url("data:image/png'
                }}
              />
              <noscript>
                &lt;img alt=""
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrade-anywhere.0cbd6f6c.png&amp;amp;w=828&amp;amp;q=100
                1x,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrade-anywhere.0cbd6f6c.png&amp;amp;w=1920&amp;amp;q=100
                2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrade-anywhere.0cbd6f6c.png&amp;amp;w=1920&amp;amp;q=100"
                decoding="async" data-nimg="intrinsic"
                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                loading="lazy" /&gt;
              </noscript>
            </span>
          </div>
          <div className="trade-anywhere-content">
            <div className="home-section-title home-section-title-dark trade-anywhere-content-title">
              Trade anywhere with WOO X
            </div>
            <div className="trade-anywhere-image-wrapper-mobile">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27552%27%20height=%27440%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("data:image/png'
                  }}
                />
                <noscript>
                  &lt;img alt=""
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrade-anywhere-mobile.7234b5bd.png&amp;amp;w=640&amp;amp;q=100
                  1x,
                  /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrade-anywhere-mobile.7234b5bd.png&amp;amp;w=1200&amp;amp;q=100
                  2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrade-anywhere-mobile.7234b5bd.png&amp;amp;w=1200&amp;amp;q=100"
                  decoding="async" data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  loading="lazy" /&gt;
                </noscript>
              </span>
            </div>
            <div className="trade-anywhere-qr-wrapper">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%"
                  }}
                />
                <noscript>
                  &lt;img
                  srcSet="/_next/image?url=%2Fimages%2Fhome%2Fqr-new.png&amp;amp;w=128&amp;amp;q=100
                  1x,
                  /_next/image?url=%2Fimages%2Fhome%2Fqr-new.png&amp;amp;w=256&amp;amp;q=100
                  2x"
                  src="/_next/image?url=%2Fimages%2Fhome%2Fqr-new.png&amp;amp;w=256&amp;amp;q=100"
                  decoding="async" data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  loading="lazy" /&gt;
                </noscript>
              </span>
              <p>
                Scan to download
                <br />
                WOO X Mobile
              </p>
            </div>
            <div className="trade-anywhere-app-links">
              <a
                href="https://apps.apple.com/us/app/woo-x-zero-fee-crypto-trading/id1576648404"
                className="trade-anywhere-app-link"
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27180%27%20height=%2754%27/%3e"
                    />
                  </span>
                  <img
                    alt="App store"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript>
                    &lt;img alt="App store"
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappstore_icon.14042712.png&amp;amp;w=256&amp;amp;q=95
                    1x,
                    /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappstore_icon.14042712.png&amp;amp;w=384&amp;amp;q=95
                    2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappstore_icon.14042712.png&amp;amp;w=384&amp;amp;q=95"
                    decoding="async" data-nimg="intrinsic"
                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    loading="lazy" /&gt;
                  </noscript>
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=network.woo.mobile"
                className="trade-anywhere-app-link"
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27180%27%20height=%2754%27/%3e"
                    />
                  </span>
                  <img
                    alt="Google play"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  <noscript>
                    &lt;img alt="Google play"
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogleplay_icon.c4204738.png&amp;amp;w=256&amp;amp;q=95
                    1x,
                    /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogleplay_icon.c4204738.png&amp;amp;w=384&amp;amp;q=95
                    2x"
                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogleplay_icon.c4204738.png&amp;amp;w=384&amp;amp;q=95"
                    decoding="async" data-nimg="intrinsic"
                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    loading="lazy" /&gt;
                  </noscript>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home-section" style={{ backgroundColor: "#1B2028" }}>
      <div className="home-section-wrapper">
        <div className="trusted-by">
          <div className="trusted-by-wrapper">
            <div className="by-the-best">
              <div className="home-section-title home-section-title-centered">
                Partnered with the best
              </div>
              <div className="img-holder">
                <div className="img-item">
                  <img
                    src="/images/home/trusted-by/binance.png"
                    alt="Binance"
                    width={225}
                    height={46}
                  />
                </div>
                <div className="img-item">
                  <img
                    src="/images/home/trusted-by/wintermute.png"
                    alt="wintermute"
                    width={244}
                    height={40}
                  />
                </div>
                <div className="img-item">
                  <img
                    src="/images/home/trusted-by/kronos.png"
                    alt="Kronos"
                    width={165}
                    height={62}
                  />
                </div>
                <div className="img-item">
                  <img
                    src="/images/home/trusted-by/selini.png"
                    alt="selini"
                    width={189}
                    height={48}
                  />
                </div>
                <div className="img-item">
                  <img
                    src="/images/home/trusted-by/avalanche.png"
                    alt="Avalanche"
                    width={246}
                    height={50}
                  />
                </div>
                <div className="img-item">
                  <img
                    src="/images/home/trusted-by/fireblocks.png"
                    alt="fireblocks"
                    width={217}
                    height={38}
                  />
                </div>
              </div>
            </div>
            <div className="industry-leading">
              <div className="home-section-title home-section-title-centered">
                Industry-leading security
              </div>
              <div className="content">
                <div className="text-holder">
                  <div className="text-section">
                    <h3 className="title">Advanced Access control</h3>
                    <p className="desc">
                      We provide an additional layer of security when signing
                      in, ensuring that only you have access to your account.
                    </p>
                  </div>
                  <div className="text-section">
                    <h3 className="title">Active Bug Bounty Program</h3>
                    <p className="desc">
                      We encourage everyone to help us identify vulnerabilities
                      in our web applications and API.
                    </p>
                    <a
                      href="https://bugcrowd.com/woo-network"
                      className="home-section-link"
                    >
                      View more
                      <svg
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.5858 9.5L10.293 5.20718L11.7072 3.79297L18.4143 10.5001L11.7072 17.2072L10.293 15.793L14.5859 11.5H1V9.5H14.5858Z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="text-section">
                    <h3 className="title">Certification to ISO/IEC 27001</h3>
                    <p className="desc">
                      Our platform meets the standards for information security
                      (ISO/IEC 27001) as certified by BSI.
                    </p>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src="/images/home/industry-leading-security.png"
                    alt=""
                    width={540}
                    height={520}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="custom-container" style={{ backgroundColor: "#131519" }}>
      <div className="custom-inner-container" style={{ overflow: "hidden" }}>
        <div className="get-involved-wrapper">
          <div className="get-involved-info-wrapper">
            <div className="home-section-title get-involved-header">
              Get involved
            </div>
            <div className="get-involved-social-wrapper">
              <a
                className="get-involved-social-element"
                href="https://x.com/WOO_ecosystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width={60}
                  height={60}
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_21815_162395)">
                    <path
                      d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                      fill="black"
                    />
                    <path
                      d="M32.6053 27.8561L42.8048 16H40.3878L31.5316 26.2945L24.4582 16H16.2998L26.9962 31.5671L16.2998 44H18.7169L28.0693 33.1287L35.5394 44H43.6977L32.6047 27.8561H32.6053ZM29.2948 31.7042L28.211 30.1541L19.5878 17.8196H23.3003L30.2593 27.7739L31.3431 29.324L40.389 42.2632H36.6765L29.2948 31.7048V31.7042Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21815_162395">
                      <rect width={60} height={60} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="get-involved-social-element-text">Twitter</div>
              </a>
              <a
                className="get-involved-social-element"
                href="https://medium.com/wooecosystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={60} height={60} viewBox="0 0 60 60" fill="none">
                  <g clipPath="url(#clip0_7711_116157)">
                    <path
                      d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.4445 30.1631C32.4445 36.1738 27.6049 41.0465 21.6353 41.0465C15.6657 41.0465 10.8257 36.1738 10.8257 30.1631C10.8257 24.1523 15.6653 19.2793 21.6353 19.2793C27.6053 19.2793 32.4445 24.1523 32.4445 30.1631ZM44.3028 30.1623C44.3028 35.8201 41.883 40.4085 38.898 40.4085C35.913 40.4085 33.4932 35.8201 33.4932 30.1623C33.4932 24.5044 35.9126 19.916 38.8976 19.916C41.8826 19.916 44.3024 24.503 44.3024 30.1623H44.3028ZM47.2521 39.3424C48.302 39.3424 49.153 35.2314 49.153 30.1634C49.153 25.0939 48.3017 20.9844 47.2521 20.9844C46.2025 20.9844 45.3516 25.0943 45.3516 30.1634C45.3516 35.2325 46.2021 39.3424 47.2521 39.3424Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7711_116157">
                      <rect width={60} height={60} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="get-involved-social-element-text">Medium</div>
              </a>
              <a
                className="get-involved-social-element"
                href="https://t.me/woo_english"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width={60}
                  height={60}
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7711_116163)">
                    <path
                      d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                      fill="url(#paint0_linear_7711_116163)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5795 29.6839C22.3252 25.8735 28.1569 23.3615 31.0749 22.1479C39.4062 18.6826 41.1374 18.0806 42.2657 18.0608C42.5139 18.0564 43.0688 18.1179 43.4282 18.4095C43.7317 18.6558 43.8152 18.9885 43.8552 19.222C43.8952 19.4555 43.9449 19.9874 43.9054 20.403C43.4539 25.1467 41.5003 36.6584 40.5065 41.9715C40.086 44.2196 39.2579 44.9734 38.4563 45.0472C36.7141 45.2075 35.3912 43.8958 33.7038 42.7897C31.0635 41.0589 29.5718 39.9815 27.0088 38.2925C24.0469 36.3407 25.967 35.2679 27.655 33.5147C28.0968 33.0558 35.7727 26.0739 35.9213 25.4406C35.9399 25.3614 35.9571 25.0661 35.7817 24.9102C35.6063 24.7543 35.3474 24.8076 35.1606 24.85C34.8958 24.9101 30.6777 27.6981 22.5064 33.2139C21.3091 34.0361 20.2247 34.4366 19.253 34.4156C18.1819 34.3925 16.1214 33.81 14.5897 33.3121C12.7109 32.7014 11.2177 32.3785 11.3477 31.3413C11.4155 30.8011 12.1594 30.2486 13.5795 29.6839Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_7711_116163"
                      x1={30}
                      y1={0}
                      x2={30}
                      y2="59.555"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2AABEE" />
                      <stop offset={1} stopColor="#229ED9" />
                    </linearGradient>
                    <clipPath id="clip0_7711_116163">
                      <rect width={60} height={60} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="get-involved-social-element-text">Telegram</div>
              </a>
              <a
                className="get-involved-social-element"
                href="https://discord.com/invite/woonetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={60} height={60} viewBox="0 0 60 60" fill="none">
                  <g clipPath="url(#clip0_7711_116166)">
                    <path
                      d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
                      fill="#5865F2"
                    />
                    <path
                      d="M42.4755 18.4836C40.181 17.4308 37.7205 16.6551 35.1478 16.2108C35.101 16.2023 35.0542 16.2237 35.0301 16.2666C34.7136 16.8294 34.3631 17.5636 34.1176 18.1407C31.3506 17.7265 28.5978 17.7265 25.8875 18.1407C25.642 17.5508 25.2787 16.8294 24.9609 16.2666C24.9367 16.2251 24.8899 16.2037 24.8431 16.2108C22.2719 16.6537 19.8113 17.4294 17.5154 18.4836C17.4955 18.4922 17.4785 18.5065 17.4672 18.525C12.8001 25.4976 11.5216 32.2987 12.1488 39.0156C12.1516 39.0484 12.1701 39.0799 12.1956 39.0998C15.2748 41.3611 18.2576 42.734 21.1849 43.6439C21.2318 43.6582 21.2814 43.6411 21.3112 43.6025C22.0037 42.6568 22.621 41.6597 23.1502 40.6112C23.1814 40.5498 23.1516 40.4769 23.0878 40.4526C22.1087 40.0812 21.1764 39.6284 20.2796 39.1141C20.2087 39.0727 20.203 38.9713 20.2682 38.9227C20.457 38.7813 20.6457 38.6341 20.8259 38.4856C20.8585 38.4584 20.904 38.4527 20.9423 38.4698C26.8339 41.1597 33.2123 41.1597 39.0344 38.4698C39.0728 38.4513 39.1182 38.457 39.1522 38.4841C39.3325 38.6327 39.5212 38.7813 39.7113 38.9227C39.7766 38.9713 39.7723 39.0727 39.7014 39.1141C38.8046 39.6384 37.8723 40.0812 36.8918 40.4512C36.8279 40.4755 36.7995 40.5498 36.8308 40.6112C37.3714 41.6583 37.9887 42.6554 38.6683 43.6011C38.6967 43.6411 38.7478 43.6582 38.7946 43.6439C41.7362 42.734 44.7189 41.3611 47.7981 39.0998C47.8251 39.0799 47.8422 39.0498 47.845 39.017C48.5956 31.2516 46.5877 24.5062 42.5223 18.5264C42.5124 18.5065 42.4954 18.4922 42.4755 18.4836ZM24.03 34.9257C22.2562 34.9257 20.7947 33.2972 20.7947 31.2973C20.7947 29.2974 22.2279 27.6689 24.03 27.6689C25.8463 27.6689 27.2937 29.3117 27.2653 31.2973C27.2653 33.2972 25.8321 34.9257 24.03 34.9257ZM35.9921 34.9257C34.2184 34.9257 32.7568 33.2972 32.7568 31.2973C32.7568 29.2974 34.19 27.6689 35.9921 27.6689C37.8084 27.6689 39.2558 29.3117 39.2275 31.2973C39.2275 33.2972 37.8084 34.9257 35.9921 34.9257Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7711_116166">
                      <rect width={60} height={60} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="get-involved-social-element-text">Discord</div>
              </a>
            </div>
          </div>
          <div className="get-involved-card-wrapper">
            <div className="get-involved-card-text">Start trading on WOO X</div>
            <a
              style={{ cursor: "pointer" }}
              href="https://x.woo.org/register"
              className="css-zh3x0s"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="cookieBar" style={{ transform: "translateY(100%)" }}>
    <div className="cookieBox">
      <p>
        We use cookies to improve your experience. To find out more, please read
        our Privacy Policy. By clicking "Accept", you consent to our cookie and
        {/* */} <span className="css-dc64p2">Privacy Policy</span>. Or you may
        click “Decline”to refuse to consent.
      </p>
      <div className="cookieButton">
        <button>Decline</button>
        <button>Accept</button>
      </div>
    </div>
  </div>
  <div className="bottom-nav-bg">
    <div className="bottom-nav-wrapper">
      <div className="bottom-logo">
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 68.62 46.47"
        >
          <g id="Layer_6">
            <path
              className="cls-1"
              d="m0,0h11.68l9.18,30.01,6.26-15.49c.82-2.03,2.79-3.35,4.97-3.35h4.45c2.19,0,4.15,1.33,4.97,3.35l6.26,15.49,3.44-11.25h11.68l-7.31,23.91c-.69,2.25-2.77,3.79-5.13,3.79h-4.1c-2.19,0-4.15-1.33-4.97-3.35l-7.07-17.49-7.07,17.49c-.82,2.03-2.79,3.35-4.97,3.35h-4.1c-2.36,0-4.44-1.54-5.13-3.79L0,0Z"
            ></path>
            <polygon
              className="cls-1"
              points="56.94 0 53.52 11.17 65.2 11.17 68.62 0 56.94 0"
            />
          </g>
        </svg>
        <i className="css-dn4pk6" />
        <p className="bottom-logo-des">
          WOO connects traders, exchanges, institutions, and DeFi platforms with
          democratized access to the best-in-class liquidity and trading
          execution at zero or low cost.
        </p>
      </div>
      <div className="bottom-nav-bar">
        <ul>
          <h3>Services</h3>
          <a
            className="external-link"
            href="https://x.woo.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>WOO X</li>
          </a>
          <li>
            <a href="/token">WOO Token</a>
          </li>
          <a
            className="external-link"
            href="https://bit.ly/3HCBsIB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Affiliates</li>
          </a>
          <a
            className="external-link"
            href="https://support.woo.org/hc/en-001/articles/4407178433049-How-to-get-your-coin-listed-on-WOO-X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Listing Application</li>
          </a>
          <li>
            <a href="/brokers">Broker Program</a>
          </li>
          <li>
            <a href="/designated-market-makers">Designated Market Makers</a>
          </li>
        </ul>
        <ul>
          <h3>Support</h3>
          <a
            className="external-link"
            href="https://support.woo.org/hc/en-001/articles/4404611795353--Trading-Fees"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Trading Fees</li>
          </a>
          <a
            className="external-link"
            href="https://support.woo.org/hc/en-001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Support Center</li>
          </a>
          <a
            className="external-link"
            href="https://docs.woo.org/#introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>API Documentation</li>
          </a>
          <a
            className="external-link"
            href="https://bugcrowd.com/woo-network"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Bug Bounty Program</li>
          </a>
          <a
            className="external-link"
            href="https://learn.woo.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>FAQ</li>
          </a>
        </ul>
        <ul>
          <h3>Other</h3>
          <li>
            <a href="/network">About Us</a>
          </li>
          <li>
            <a href="/blog/en">News and Insights</a>
          </li>
          <li>
            <a href="/team">Our Team</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/proof-of-reserves">Transparency Dashboard</a>
          </li>
          <a
            className="external-link"
            href="https://bit.ly/3Z29MEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Brand Kit</li>
          </a>
        </ul>
      </div>
      <div className="bottom-connect">
        <div className="connect-title">Stay Connected</div>
        <ul>
          <li>
            <a
              aria-label="Twitter"
              className="bottom-connect-icon"
              href="https://x.com/WOO_ecosystem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9026 10.4696L21.343 2H19.5805L13.1172 9.35254L7.95885 2H2.00781L9.80998 13.1194L2.00781 22H3.77034L10.5913 14.2338L16.0401 22H21.9912M4.40648 3.30158H7.11422L19.5792 20.7624H16.8708"
                  fill="#A4A4A4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="Medium"
              className="bottom-connect-icon"
              href="https://medium.com/wooecosystem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={24} height={24} viewBox="0 0 60 60" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.5233 30.0003C33.5233 38.2844 26.5784 45 18.0119 45C9.44542 45 2.5 38.2829 2.5 30.0003C2.5 21.7176 9.44489 15 18.0119 15C26.5789 15 33.5233 21.7161 33.5233 30.0003ZM50.54 30.0005C50.54 37.7982 47.0675 44.1221 42.784 44.1221C38.5005 44.1221 35.0281 37.7982 35.0281 30.0005C35.0281 22.2027 38.5 15.8789 42.7835 15.8789C47.067 15.8789 50.5395 22.2007 50.5395 30.0005H50.54ZM54.7719 42.6513C56.2786 42.6513 57.4997 36.9854 57.4997 30.0006C57.4997 23.0137 56.2781 17.3499 54.7719 17.3499C53.2658 17.3499 52.0447 23.0142 52.0447 30.0006C52.0447 36.9869 53.2652 42.6513 54.7719 42.6513Z"
                  fill="current"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="Telegram"
              className="bottom-connect-icon"
              href="https://t.me/woo_english"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path d="M9.43307 15.1339L18.0681 7.21971C18.4471 6.87802 17.9853 6.71158 17.4822 7.02144L6.8254 13.8497L2.22227 12.3905C1.22833 12.0814 1.22104 11.3876 2.44542 10.8888L20.3828 3.86411C21.2022 3.48633 21.9928 4.06411 21.6801 5.33757L18.6254 19.9576C18.412 20.9964 17.7941 21.2449 16.9376 20.765L12.2843 17.2734L10.0476 19.4823C10.0405 19.4893 10.0334 19.4963 10.0263 19.5033C9.77621 19.7506 9.5693 19.9551 9.11653 19.9551L9.43307 15.1339Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="Discord"
              className="bottom-connect-icon"
              href="https://discord.com/invite/woonetwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 3.65789C18.7873 2.89053 17.147 2.32516 15.4319 2.00136C15.4007 1.99511 15.3695 2.01073 15.3534 2.04196C15.1424 2.45218 14.9087 2.98735 14.7451 3.40799C12.9004 3.10606 11.0652 3.10606 9.25832 3.40799C9.09465 2.978 8.85248 2.45218 8.64057 2.04196C8.62449 2.01177 8.59328 1.99615 8.56205 2.00136C6.84791 2.32413 5.20756 2.88949 3.67693 3.65789C3.66368 3.66414 3.65233 3.67456 3.64479 3.68808C0.533392 8.77013 -0.31895 13.7273 0.0991801 18.6229C0.101072 18.6469 0.11337 18.6698 0.130398 18.6843C2.18321 20.3325 4.17171 21.3331 6.12328 21.9964C6.15451 22.0068 6.18761 21.9943 6.20748 21.9662C6.66913 21.2769 7.08064 20.5502 7.43348 19.7859C7.4543 19.7412 7.43442 19.688 7.39186 19.6703C6.73913 19.3996 6.1176 19.0696 5.51973 18.6948C5.47244 18.6646 5.46865 18.5906 5.51216 18.5552C5.63797 18.4521 5.76382 18.3449 5.88396 18.2366C5.90569 18.2168 5.93598 18.2127 5.96153 18.2252C9.88928 20.1857 14.1415 20.1857 18.023 18.2252C18.0485 18.2116 18.0788 18.2158 18.1015 18.2356C18.2216 18.3439 18.3475 18.4521 18.4742 18.5552C18.5177 18.5906 18.5149 18.6646 18.4676 18.6948C17.8697 19.0769 17.2482 19.3996 16.5945 19.6693C16.552 19.687 16.533 19.7412 16.5538 19.7859C16.9143 20.5491 17.3258 21.2759 17.7789 21.9651C17.7978 21.9943 17.8319 22.0068 17.8631 21.9964C19.8241 21.3331 21.8126 20.3325 23.8654 18.6843C23.8834 18.6698 23.8948 18.6479 23.8967 18.624C24.3971 12.964 23.0585 8.04755 20.3482 3.68912C20.3416 3.67456 20.3303 3.66414 20.317 3.65789ZM8.02002 15.642C6.8375 15.642 5.86313 14.455 5.86313 12.9974C5.86313 11.5397 6.8186 10.3528 8.02002 10.3528C9.23087 10.3528 10.1958 11.5501 10.1769 12.9974C10.1769 14.455 9.22141 15.642 8.02002 15.642ZM15.9947 15.642C14.8123 15.642 13.8379 14.455 13.8379 12.9974C13.8379 11.5397 14.7933 10.3528 15.9947 10.3528C17.2056 10.3528 18.1705 11.5501 18.1516 12.9974C18.1516 14.455 17.2056 15.642 15.9947 15.642Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="Youtube"
              className="bottom-connect-icon"
              href="https://www.youtube.com/channel/UCVZ8JjcsKe_9Ebwu5ToUgvA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width={24}
                height={17}
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.1875 4.58265L16.687 8.24312L9.1875 11.9174V4.58265ZM23.25 8.25C23.2219 2.58052 22.7958 0.41201 19.1395 0.16862C15.7603 -0.0568938 8.23547 -0.0555187 4.86187 0.16862C1.20844 0.41201 0.778125 2.57089 0.75 8.25C0.778125 13.9195 1.20422 16.088 4.86047 16.3314C8.23406 16.5555 15.7589 16.5569 19.1381 16.3314C22.7916 16.088 23.2219 13.9291 23.25 8.25Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="Facebook"
              className="bottom-connect-icon"
              href="https://www.facebook.com/WOOecosystem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path d="M22.5 11.6867C22.5 6.06013 17.7996 1.5 12 1.5C6.20039 1.5 1.5 6.06013 1.5 11.6867C1.5 16.7721 5.33906 20.986 10.3594 21.75V14.6313H7.69336V11.6867H10.3594V9.44242C10.3594 6.88979 11.9262 5.47917 14.3256 5.47917C15.474 5.47917 16.6758 5.67813 16.6758 5.67813V8.18501H15.351C14.0467 8.18501 13.6406 8.97089 13.6406 9.77668V11.6867H16.5527L16.0872 14.6313H13.6406V21.75C18.6609 20.986 22.5 16.7721 22.5 11.6867Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="Linkedin"
              className="bottom-connect-icon"
              href="https://www.linkedin.com/company/wooxexchange/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.6875 1.5H6.3125C4.06919 1.5 2.25 3.31919 2.25 5.5625V16.9375C2.25 19.1808 4.06919 21 6.3125 21H17.6875C19.9316 21 21.75 19.1808 21.75 16.9375V5.5625C21.75 3.31919 19.9316 1.5 17.6875 1.5ZM8.75 16.9375H6.3125V8H8.75V16.9375ZM7.53125 6.96975C6.74638 6.96975 6.10938 6.32788 6.10938 5.5365C6.10938 4.74513 6.74638 4.10325 7.53125 4.10325C8.31612 4.10325 8.95312 4.74513 8.95312 5.5365C8.95312 6.32788 8.31694 6.96975 7.53125 6.96975ZM18.5 16.9375H16.0625V12.3842C16.0625 9.64775 12.8125 9.85494 12.8125 12.3842V16.9375H10.375V8H12.8125V9.43406C13.9467 7.33294 18.5 7.17775 18.5 11.4458V16.9375Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="Instagram"
              className="bottom-connect-icon"
              href="https://www.instagram.com/woo_ecosystem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9958 6.60936C9.02083 6.60936 6.60416 9.02234 6.60416 12.0021C6.60416 14.9819 9.01666 17.3948 11.9958 17.3948C14.975 17.3948 17.3875 14.9819 17.3875 12.0021C17.3875 9.02234 14.975 6.60936 11.9958 6.60936ZM11.9958 15.4986C10.0625 15.4986 8.49583 13.9316 8.49583 11.9979C8.49583 10.0642 10.0625 8.49723 11.9958 8.49723C13.9292 8.49723 15.4958 10.0642 15.4958 11.9979C15.4958 13.9316 13.9292 15.4986 11.9958 15.4986Z"></path>
                <path d="M18.8583 6.39263C18.8583 7.08773 18.2949 7.65122 17.6 7.65122C16.905 7.65122 16.3416 7.08773 16.3416 6.39263C16.3416 5.69754 16.905 5.13405 17.6 5.13405C18.2949 5.13405 18.8583 5.69754 18.8583 6.39263Z"></path>
                <path d="M11.9958 1.5C9.14583 1.5 8.7875 1.5125 7.66667 1.56251C6.55 1.61252 5.7875 1.79172 5.12083 2.05011C4.42917 2.31683 3.84583 2.6794 3.2625 3.26285C2.67917 3.8463 2.32083 4.43392 2.05 5.12155C1.79167 5.78835 1.6125 6.551 1.5625 7.67206C1.5125 8.78895 1.5 9.14735 1.5 11.9979C1.5 14.8485 1.5125 15.2069 1.5625 16.3279C1.6125 17.4448 1.79167 18.2075 2.05 18.8784C2.31667 19.5703 2.67917 20.1537 3.2625 20.7372C3.84583 21.3206 4.43333 21.679 5.12083 21.9499C5.7875 22.2083 6.55 22.3875 7.67083 22.4375C8.79167 22.4875 9.14583 22.5 12 22.5C14.8542 22.5 15.2083 22.4875 16.3292 22.4375C17.4458 22.3875 18.2083 22.2083 18.8792 21.9499C19.5708 21.6832 20.1542 21.3206 20.7375 20.7372C21.3208 20.1537 21.6792 19.5661 21.95 18.8784C22.2083 18.2116 22.3875 17.449 22.4375 16.3279C22.4875 15.2069 22.5 14.8526 22.5 11.9979C22.5 9.14318 22.4875 8.78895 22.4375 7.66789C22.3875 6.551 22.2083 5.78835 21.95 5.11738C21.6833 4.42558 21.3208 3.84213 20.7375 3.25868C20.1542 2.67523 19.5667 2.31683 18.8792 2.04594C18.2125 1.78756 17.45 1.60835 16.3292 1.55834C15.2042 1.5125 14.8458 1.5 11.9958 1.5ZM11.9958 3.39204C14.8 3.39204 15.1292 3.40454 16.2375 3.45455C17.2625 3.5004 17.8167 3.67126 18.1875 3.81713C18.6792 4.00883 19.0292 4.23388 19.3958 4.60062C19.7625 4.96735 19.9917 5.31742 20.1792 5.80919C20.3208 6.1801 20.4958 6.73437 20.5417 7.75958C20.5917 8.86813 20.6042 9.19736 20.6042 12.0021C20.6042 14.8068 20.5917 15.136 20.5417 16.2446C20.4958 17.2698 20.325 17.8241 20.1792 18.195C19.9875 18.6867 19.7625 19.0368 19.3958 19.4036C19.0292 19.7703 18.6792 19.9995 18.1875 20.187C17.8167 20.3287 17.2625 20.5038 16.2375 20.5496C15.1292 20.5996 14.8 20.6121 11.9958 20.6121C9.19167 20.6121 8.8625 20.5996 7.75417 20.5496C6.72917 20.5038 6.175 20.3329 5.80417 20.187C5.3125 19.9953 4.9625 19.7703 4.59583 19.4036C4.22917 19.0368 4 18.6867 3.8125 18.195C3.67083 17.8241 3.49583 17.2698 3.45 16.2446C3.4 15.136 3.3875 14.8068 3.3875 12.0021C3.3875 9.19736 3.4 8.86813 3.45 7.75958C3.49583 6.73437 3.66667 6.1801 3.8125 5.80919C4.00417 5.31742 4.22917 4.96735 4.59583 4.60062C4.9625 4.23388 5.3125 4.00466 5.80417 3.81713C6.175 3.67543 6.72917 3.5004 7.75417 3.45455C8.8625 3.40038 9.19583 3.39204 11.9958 3.39204Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="CoinMarketCap"
              className="bottom-connect-icon"
              href="https://coinmarketcap.com/cryptown/profile/WOOnetwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_4587_30544)">
                  <path
                    d="M23.9929 12V11.9535C23.9693 5.37209 18.5851 0 11.9965 0C5.40785 0 0 5.37209 0 12C0 18.6279 5.38424 24 11.9965 24C15.0428 24 17.9238 22.8605 20.1437 20.7907C20.5923 20.3721 20.616 19.6977 20.1909 19.2558C19.7894 18.814 19.1046 18.7907 18.6559 19.186L18.6323 19.2093C16.8375 20.8837 14.4288 21.8372 11.9492 21.8372C9.04457 21.8372 6.44691 20.5814 4.65217 18.5814L9.77664 10.4884V14.2326C9.77664 16.0233 10.4851 16.6047 11.0755 16.7674C11.6658 16.9302 12.5632 16.814 13.5314 15.3023L16.3416 10.814C16.4361 10.6744 16.5069 10.5349 16.6014 10.4419V12.7209C16.6014 14.3953 17.2862 15.7442 18.467 16.3953C19.5297 17 20.8757 16.9302 21.9856 16.2558C23.3553 15.3721 24.0874 13.8372 23.9929 12ZM20.8757 14.3488C20.4506 14.6047 19.9547 14.6512 19.5769 14.4419C19.1046 14.1628 18.8212 13.5349 18.8212 12.6744V10.0465C18.8212 8.7907 18.3253 7.88372 17.4752 7.65116C16.0346 7.23256 14.9483 8.97674 14.5469 9.62791L11.9965 13.6512V8.69767C11.9728 7.55814 11.595 6.88372 10.8865 6.67442C10.4142 6.53488 9.70579 6.60465 9.02096 7.62791L3.32972 16.6047C2.57404 15.186 2.17259 13.6047 2.17259 12C2.17259 6.5814 6.5886 2.18605 11.9965 2.18605C17.4043 2.18605 21.8203 6.5814 21.8203 12V12.0465C21.8676 13.093 21.5369 13.9302 20.8757 14.3488Z"
                    fill="#A4A4A4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4587_30544">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
        <p className="bottom-des">
          WOO connects traders, exchanges, institutions, and DeFi platforms with
          democratized access to the best-in-class liquidity and trading
          execution at zero or low cost.
        </p>
        <p className="bottom-copyright">
          Copyright © 2024 WOO. All Rights Reserved.
        </p>
        <p className="bottom-policy">
          <span>Terms of Service</span> {/* */}｜{/* */}{" "}
          <span>Privacy Policy</span>｜{/* */}{" "}
          <span className="bottom-security-statement">
            Information Security Statement
          </span>
        </p>
      </div>
    </div>
  </div>
</>
  )
}

export default App
