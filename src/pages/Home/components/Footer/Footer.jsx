import React from 'react';
import { RiHome4Fill, RiFilePaper2Line, RiWalletLine, RiSettingsLine } from 'react-icons/ri';
import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-row">
          <div className="icon">
            <RiHome4Fill color="#31844e" />
            <p className="active">Home</p>
          </div>
          <div className="icon">
            <RiFilePaper2Line />
            <p>Voucer</p>
          </div>
          <div className="icon">
            <RiWalletLine />
            <p>Wallet</p>
          </div>
          <div className="icon">
            <RiSettingsLine />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer