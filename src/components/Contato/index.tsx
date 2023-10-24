import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Nome placeholder="Nome" />
    <S.Email placeholder="Email" />
    <S.Telefone placeholder="Telefone" />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
