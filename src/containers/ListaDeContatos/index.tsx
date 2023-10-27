import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>1 contato encontrado: {termo}</p>
      <ul>
        {filtraContatos().map((t) => (
          <li key={t.telefone}>
            <Contato
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
