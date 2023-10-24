import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  email: string
  telefone: number
}

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Nome value={nome} placeholder="Nome Sobrenome" />
      <S.Email value={email} placeholder="email@email.com" />
      <S.Telefone value={telefone} placeholder="(21)98765-4321" />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao
              onClick={() => {
                setEstaEditando(false)
              }}
            >
              Cancelar
            </S.Botao>
          </>
        ) : (
          <>
            <S.Botao
              onClick={() => {
                setEstaEditando(true)
              }}
            >
              Editar
            </S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
