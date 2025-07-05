import Navbar from '../components/Navbar'; // <-- ajuste esse caminho se necessário
import BannerBackground from '../assets/home-banner-background.png';
import { FiArrowRight } from 'react-icons/fi';
import BannerImagem from '../assets/home-banner-image.png';

function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner">
        <div className="home-image">
          <img src={BannerBackground} alt="imagem de fundo do home" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            Seu Donut Favorito Entregue em sua casa
          </h1>
          <p className="primary-text">
            Diversos sabores deliciosos para adoçar seus melhores momentos. Peça já o seu
            e receba um mimo surpresa.
          </p>
          <button className="button-ecomenda">
            Faça seu pedido <FiArrowRight />
          </button>
          <p className="primary-text">
            Ou venha comer conosco em um ambiente climatizado e aconchegante, com
            várias opções para seu pedido.
          </p>
        </div>

        <div className="home-image-section">
          <div className='home-primay-image'>
          <img src={BannerImagem} alt="donuts" />
        </div>
        </div>
        </div>
      </div>
  
  );
}

export default Home;
