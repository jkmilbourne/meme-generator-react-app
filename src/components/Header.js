import Logo from "../images/trollFace.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header--logo" src={Logo} alt="logo" />
      <p className="header--logo-text">Meme Generator</p>
      <p className="header--title">React Course - Project 3</p>
    </header>
  );
}
