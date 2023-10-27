import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover } from '../../store/reducers/contatos'

import * as S from './styles'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)

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
    if (telefoneOriginal > 0) {
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
        placeholder="Nome Sobrenome"
      />
      <S.Email
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        disabled={!estaEditando}
        placeholder="email@email.com"
      />
      <S.Telefone
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        disabled={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
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
