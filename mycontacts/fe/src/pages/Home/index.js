import {Container, Header,ListContainer,Card,InputSearchContainer} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';


export default function Home(){
  return (

    <Container>

    <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..."/>
    </InputSearchContainer>
    <Header>
  <strong>3 Contatos</strong>
  <Link to="/new"> Novo Contato </Link>
  </Header>

  <ListContainer>

    <header>
      <button type="button">
        <span>Nome</span>
        <img src={arrow} alt="Arrow" />
      </button>
    </header>

    <Card>
    <div className="info">
      <div className="contact-name">
        <strong>Mateus Silva</strong>
        <small>Instagram</small>
      </div>
      <span>mateus@devacademy.com.br</span>
      <span>(41) 99999-9999</span>
    </div>

    <div className="actions">
      <Link to="/edit/123">
         <img src={edit} alt="Edit" />
      </Link>

      <button>
        <img src={trash} alt="Trash" />
      </button>
    </div>
    </Card>



  </ListContainer>

 </Container>
  )
  }
