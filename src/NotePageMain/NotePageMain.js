import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import { findNote } from '../notes-helpers'
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes=[] } = this.context
    const { noteId } = this.props.match.params
    console.log('this is the result for this.props.match.params',this.props.match.params)
    console.log('this is the nodeID passed from params', noteId)
    console.log('this is what is inside of notes', notes)
    const note = findNote(notes, noteId) || { content: '' }
    console.log('this is the note that the helper function found', note)
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.note_name}
          modified={note.date_added}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}
