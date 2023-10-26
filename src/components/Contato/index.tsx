import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover } from '../../store/reducers/contatos'

import * as S from './styles'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Nome value={nome} placeholder="Nome Sobrenome" />
      <S.Email value={email} placeholder="email@email.com" />
      <S.Telefone value={telefone} placeholder="(21)98765-4321" />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                setEstaEditando(false)
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
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
            <S.BotaoCancelarRemover
              onClick={() => {
                dispatch(remover(telefone))
              }}
            >
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
