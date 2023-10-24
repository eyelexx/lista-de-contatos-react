import BarraLateral from './containers/BarraLateral'
import Contatos from './containers/Contatos/contatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <Contatos />
      </Container>
    </>
  )
}

export default App
