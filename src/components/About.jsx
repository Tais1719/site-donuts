
import AboutBackground from '../assets/about-background1.jpg';
import AboutBackgroundImage from '../assets/about-image.png';

const About = () => {
  return (
    <section id="sobre" className="about-section-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="fundo de donuts" />
      </div>

      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="mão segurando donuts" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre nós</p>
        <h1 className="primary-heading">
          É importante conhecer quem alimenta você
        </h1>
        <p className="primary-text">
          Somos uma doceria local dedicada a trazer a você os donuts mais deliciosos da cidade.
        </p>
        <p className="primary-text">
          Nossa história é feita com paixão e o desejo de criar um espaço onde amigos e familiares possam se reunir e desfrutar de momentos doces juntos.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leia mais</button>
         
        </div>
      </div>
    </section>
  );
};

export default About;
