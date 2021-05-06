import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text" 
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happended today"
                    className="notes__text-area"
                >
                </textarea>
                <div className="notes__image">
                    <img 
                        src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
