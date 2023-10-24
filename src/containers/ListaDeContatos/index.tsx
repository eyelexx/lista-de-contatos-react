import Contato from '../../components/Contato'
import { Container } from './styles'

const Contatos = [
  {
    nome: 'Kostelinha',
    email: 'kostelinha@gmail.com',
    telefone: 21911111111
  },
  {
    nome: 'Tuniko',
    email: 'tuniko@gmail.com',
    telefone: 21922222222
  },
  {
    nome: 'Karmela',
    email: 'karmela@gmail.com',
    telefone: 21933333333
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>1 contato encontrado</p>
    <ul>
      {Contatos.map((t) => (
        <li key={t.telefone}>
          <Contato nome={t.nome} email={t.email} telefone={t.telefone} />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
