import { DateText, DateTextShort } from './current-date.styled'
import { getCurrentTime } from '../../utils/getCurrentDate'

const CurrentDate = () => {
  return (
    <>
      <DateText>{getCurrentTime(true)}</DateText>
      <DateTextShort>{getCurrentTime(false)}</DateTextShort>
    </>
  )
}

export default CurrentDate
