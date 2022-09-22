import {
  Container,
  Name,
  NameContainer,
  Description,
  Arrow,
  Wrapper,
} from './footer.styled'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <NameContainer>
          <Name>Your name</Name>
          <Description>
            A few words about how you found Coinable and how did you feel about
            this task :)
          </Description>
        </NameContainer>
        <Arrow alt="Arrow image" />
      </Wrapper>
    </Container>
  )
}

export default Footer
