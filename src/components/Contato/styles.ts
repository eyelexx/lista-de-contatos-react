import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Nome = styled.input`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 4px;
  background-color: transparent;
  border: none;
`

export const Email = styled.input`
  font-size: 18px;
  display: block;
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 4px;
  background-color: transparent;
  border: none;
`

export const Telefone = styled.input`
  font-size: 18px;
  display: block;
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 4px;
  background-color: transparent;
  border: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;
`
