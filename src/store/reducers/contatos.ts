import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Kostelinha',
      email: 'kostelinha@gmail.com',
      telefone: 21911111111
    },
    {
      nome: 'Tuniko',
      email: 'tuniko@gmail.com',
      telefone: 21922222222
    },
    {
      nome: 'Karmela',
      email: 'karmela@gmail.com',
      telefone: 21933333333
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.telefone !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer

// new Contato('Kostelinha', 'kostelinha@gmail.com', 21911111111),
// new Contato('Tuniko', 'tuniko@gmail.com', 21922222222),
// new Contato('Karmela', 'karmela@gmail.com', 21933333333)
