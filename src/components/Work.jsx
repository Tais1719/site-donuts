import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseFloodWater, faUtensils, faTruck } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
  const WorkInfoData = [
    {
      image: <FontAwesomeIcon icon={faHouseFloodWater} />,
      title: 'Feito com amor como se fosse em casa',
      text: 'Todos os nossos donuts são preparados com carinho e atenção aos detalhes, como se fossem feitos na cozinha da sua casa. Utilizamos receitas tradicionais e técnicas artesanais para criar donuts frescos e saborosos, que lembram os melhores momentos em família.',
    },
    {
      image: <FontAwesomeIcon icon={faUtensils} />,
      title: 'Ingredientes selecionados',
      text: 'Nossos donuts são feitos com ingredientes cuidadosamente selecionados, sempre priorizando a qualidade e o sabor. Desde as farinhas até os recheios e coberturas, buscamos o melhor para garantir uma experiência deliciosa e marcante a cada mordida.',
    },
    {
      image: <FontAwesomeIcon icon={faTruck} />,
      title: 'Entrega em toda cidade',
      text: 'Levamos a doçura dos nossos donuts até você com agilidade e cuidado. Contamos com um serviço de entrega eficiente dentro da cidade, garantindo que seus pedidos cheguem fresquinhos e no capricho, direto da nossa cozinha para o seu momento especial.',
    },
  ];

  return (
    <div id="trabalho" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1>Como Servimos você</h1>
        <p className="primary-text">
          Nossa missão é te proporcionar uma experiência verdadeiramente única,
          saborosa e inesquecível! Mais do que vender donuts, queremos criar momentos especiais recheados de carinho,
          afeto e aquele gostinho de quero mais. Cada detalhe é pensado com cuidado: desde a escolha dos melhores 
          ingredientes até a preparação artesanal que dá vida a sabores irresistíveis. Acreditamos que um donut 
          pode ser muito mais do que um doce — pode ser um abraço, uma pausa merecida, um motivo para sorrir. Aqui, 
          tudo é feito com amor e dedicação, para que cada mordida desperte emoções e transforme o seu dia. Escolha o 
          seu favorito e permita-se viver essa experiência doce como nunca antes!
        </p>
      </div>

      <div className="work-section-button">
        {WorkInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="work-boxs-img-container">{data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
