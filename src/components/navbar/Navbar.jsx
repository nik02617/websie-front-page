import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
    setShowSignInForm(false);
    setShowSignUpForm(false);
  };

  const handleSignInClick = () => {
    setShowSignInForm(!showSignInForm);
    setShowSignUpForm(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowSignInForm(false);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={handleSignInClick}>Sign in</p>
        <button type="button" onClick={handleSignUpClick}>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={handleMenuToggle} />
          : <RiMenu3Line color="#fff" size={27} onClick={handleMenuToggle} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p onClick={handleSignInClick}>Sign in</p>
              <button type="button" onClick={handleSignUpClick}>Sign up</button>
            </div>
          </div>
        )}
      </div>
      {showSignInForm && (
        <div className="gpt3__navbar-form">
          <form className="gpt3__navbar-menu_container-form">
            <h2>Sign In</h2>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />

            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
      {showSignUpForm && (
        <div className="gpt3__navbar-form">
          <form className="gpt3__navbar-menu_container-form">
            <h2>Sign Up</h2>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="newUsername">Username</label>
            <input type="text" id="newUsername" name="newUsername" placeholder="Choose a username" required />

            <label htmlFor="newPassword">Password</label>
            <input type="password" id="newPassword" name="newPassword" placeholder="Choose a password" required />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
