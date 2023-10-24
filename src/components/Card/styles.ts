import styled from 'styled-components'

import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a4b0be')};
  background-color: ${(props) => (props.ativo ? '#ffffff' : '#f1f2f6')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#57606f')};
  border-radius: 8px;
`

export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
