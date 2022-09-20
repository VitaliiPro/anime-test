import { Container } from './main.styled'
import { MainProps } from '../../interfaces/main'

const Main: React.FC<MainProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Main
