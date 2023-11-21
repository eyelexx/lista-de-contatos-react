import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

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
    <MainContainer>
      <Titulo>Meus Contatos</Titulo>
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
    </MainContainer>
  )
}

export default ListaDeContatos
