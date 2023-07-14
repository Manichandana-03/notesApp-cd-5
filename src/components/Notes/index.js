// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  NotesContainer,
  NotesHeading,
  TitleInput,
  NoteForm,
  NoteTextArea,
  AddButton,
  NotesUlList,
  EmptyNotesViewContainer,
  Image,
  EmptyNotesHeading,
  Description,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeTakeNote = event => {
    setNote(event.target.value)
  }

  const addNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevNotes => [...prevNotes, newNote])
    setTitle('')
    setNote('')
  }

  const renderNotes = () => (
    <NotesUlList>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesUlList>
  )

  const renderEmptyNoteView = () => (
    <EmptyNotesViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <Description>Notes you add will appear here</Description>
    </EmptyNotesViewContainer>
  )

  return (
    <MainContainer>
      <NotesContainer>
        <NotesHeading>Notes</NotesHeading>
        <NoteForm onSubmit={addNote}>
          <TitleInput
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <NoteTextArea
            type="text"
            placeholder="Take a Note..."
            onChange={onChangeTakeNote}
            value={note}
            rows="3"
          />
          <AddButton type="submit" onClick={addNote}>
            Add
          </AddButton>
        </NoteForm>
        {notesList.length === 0 ? renderEmptyNoteView() : renderNotes()}
      </NotesContainer>
    </MainContainer>
  )
}

export default Notes
