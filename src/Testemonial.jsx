import ProfilePic from './assets/John-doe-image.png';
import { AiFillStar } from "react-icons/ai";

const Testemonial = () => {
  return (
    <section id="avaliacao">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Avaliação</p>
          <h1 className="primary-text">O que dizem sobre nós</h1>
          <p className="primary-text">
            Nossos clientes se encantam com a qualidade, o sabor e o cuidado que colocamos em cada donut. 
            Cada mordida é uma explosão de sabor que traz alegria e satisfação. 
            Recebemos elogios constantes pela variedade deliciosa que oferecemos e pela dedicação no atendimento.
          </p>
        </div>

        <div className="testeminal-section-botton">
          <img src={ProfilePic} alt="Foto do cliente João Paulo" />
          <p>
            “Descobrir essa loja de donuts foi uma das melhores surpresas! Os donuts são sempre fresquinhos, macios e incrivelmente saborosos. 
            O atendimento é excelente e a entrega sempre pontual. Recomendo para todos que querem uma experiência doce, acolhedora e inesquecível.”
          </p>
          <div className="testeminal-start-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>João Paulo</h2>
        </div>
      </div>
    </section>
  );
};

export default Testemonial;
