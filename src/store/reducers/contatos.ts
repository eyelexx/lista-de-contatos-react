import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Kostelinha', 'kostelinha@gmail.com', 21911111111),
    new Contato('Tuniko', 'tuniko@gmail.com', 21922222222),
    new Contato('Karmela', 'karmela@gmail.com', 21933333333)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.telefone !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
