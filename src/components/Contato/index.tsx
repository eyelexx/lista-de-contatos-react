import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/contatos'

import ContatoClass from '../../models/Contato'

import * as S from './styles'
import { BotaoCancelarRemover, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Nome
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        disabled={!estaEditando}
      />
      <S.Email
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        disabled={!estaEditando}
      />
      <S.Telefone
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        disabled={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
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
            <BotaoCancelarRemover
              onClick={() => {
                dispatch(remover(id))
              }}
            >
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
