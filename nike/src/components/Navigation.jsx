const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Início</li>
        <li href="#">Localização</li>
        <li href="#">Sobre</li>
        <li href="#">Contato</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
