import Card from '../../components/Card'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <Card legenda="Favoritos" contador={5} />
        <Card legenda="Todos" contador={7} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
