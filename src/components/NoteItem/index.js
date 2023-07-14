// Write your code her
import {NoteList, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails
  return (
    <NoteList>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </NoteList>
  )
}

export default NoteItem
