const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>SEU PÉ MERECE O MELHOR!!!</h1>
        <p>
        SEUS PÉS MERECEM O MELHOR E ESTAMOS AQUI PARA AJUDÁ-LO COM NOSSOS SAPATOS.

        </p>

        <div className="hero-btn">
          <button>Compre Agora</button>
          <button className="secondary-btn">Categorias</button>
        </div>

        <div className="shopping">
          <p>Disponível em:</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
