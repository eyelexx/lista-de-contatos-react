import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <p>1 contato encontrado</p>
      <ul>
        {itens.map((t) => (
          <li key={t.telefone}>
            <Contato nome={t.nome} email={t.email} telefone={t.telefone} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
