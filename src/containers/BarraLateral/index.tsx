import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <Card legenda="Favoritos" contador={5} />
          <Card legenda="Todos" contador={7} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
