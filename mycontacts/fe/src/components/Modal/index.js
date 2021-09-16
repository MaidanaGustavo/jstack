import { Overlay,Container,Footer } from "./styles";
import Button from '../Button';
import PropTypes from 'prop-types';
import reactDom from "react-dom";
export default function Modal({danger}){
 return  reactDom.createPortal (
  <Overlay>

    <Container danger={danger}>
    <h1>
      Titulo do Modal
    </h1>
    <p>
      Corpo do Modal
    </p>
    <Footer>
      <button className="cancel-button">
        Cancelar
      </button>

      <Button type="button" danger={danger}>
        Deletar
      </Button>
    </Footer>
    </Container>
  </Overlay>,document.getElementById('modal-root')

 );
}

Modal.propTypes = {
  danger: PropTypes.bool,
}

Modal.defaultProps = {
  danger : false,
}
