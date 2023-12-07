import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { notesSelectors, notesSlice } from './noteSlice';

const Notes = () => {
   const notes = useSelector(notesSelectors.selectAll);
   const dispatch = useDispatch();

   const handleNoteSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const note = form.note?.value;
      dispatch(
         notesSlice.actions.addNote({
            content: note,
            id: nanoid(),
         })
      );
   };

   const handleRemoveNote = (id) => {
      dispatch(notesSlice.actions.removeNote(id));
   };

   return (
      <div className="Notes">
         <h2>Notes pour la cuisine</h2>
         <form onSubmit={handleNoteSubmit}>
            <label>
               Saisir une Note
               <textarea name="note"></textarea>
            </label>
            <button type="submit" className="AddNote">
               Ajouter
            </button>
         </form>
         <ul className="NoteList">
            {notes &&
               notes?.map((el) => (
                  <li key={el.id} id={el.id}>
                     {el.content}
                     <button onClick={() => handleRemoveNote(el.id)}>
                        Supprimer
                     </button>
                  </li>
               ))}
         </ul>
      </div>
   );
};

export default Notes;
