import {
  TypeContainer,
  TitleContext,
  Line,
  TypeDescription,
} from './info-row.styled'

interface InfoRowProps {
  label: string
  value: string | number
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <TypeContainer>
      <TitleContext>{label}</TitleContext>
      <Line />
      <TypeDescription>{value}</TypeDescription>
    </TypeContainer>
  )
}

export default InfoRow
