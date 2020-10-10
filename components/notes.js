if (ls.getItem('notes') == undefined) {
	let notesArray = []
	ls.setItem('notes', JSON.stringify(notesArray))
}

if (ls.getItem('notes') == []) {
	clearBtn.removeClass(clearBtnDisplay)
	img.removeClass(imgHide)
	noNotes.removeClass(noNotesHide)
}

let notesEX = ls.getItem('notes')
let notesArray = JSON.parse(notesEX)

class Note {
	constructor(text) {
		this.createNote(text)
	}

	createNote(text) {
		let note = cE('div')
		addClass(note, 'note')

		let noteContent = cE('p')
		noteContent.contentEditable = false
		noteContent.textContent = text
		addClass(noteContent, 'note_input')

		note.addEventListener('dblclick', () => this.removeNote(note, text))

		note.addEventListener('mousedown', e => {
			if (e.which === 2) { this.editNote(noteContent, text) }
		})

		notes.appendChild(note)
		note.appendChild(noteContent)

		clearBtn.addClass(clearBtnDisplay)
		img.addClass(imgHide)
		noNotes.addClass(noNotesHide)
	}

	editNote(note, text) {
		if (note.contentEditable === false) {
			note.contentEditable = true
		} else {
			note.contentEditable = true
			let indexof = notesArray.indexOf(text)
			notesArray[indexof] = note.textContent
			ls.setItem('notes', JSON.stringify(notesArray))
		}
	}

	removeNote(note, text) {
		note.parentNode.removeChild(note)
		let index = notesArray.indexOf(text)
		notesArray.splice(index, 1)
		ls.setItem('notes', JSON.stringify(notesArray))
	}
}

const middlewares = () => {
	switch (input.value) {
		case 'clear()':
			return clearNotes()
		case 'Date.now()':
			return input.value = new Date().toLocaleDateString()
		case 'Help':
			return (
				input.value = '',
				alert('1) clear() - Delete all notes.\n2) Date.now() - Time now.\n3) numFuncsList() - list of  num funcs.')
			)
		case 'numFuncsList':
			return (
				input.value = '',
				alert('1) 1 - switch theme to dark.\n2) 2 - clear all notes.')
			)
	}
}

function addNote() {
	middlewares()

	if (input.value != '' && input.value.length <= 100) {
		new Note(input.value)
		notesArray.push(input.value)
		ls.setItem('notes', JSON.stringify(notesArray))
		input.value = ''
	}
}

function clearNotes() {
	ls.clear()
  
  input.value = ''
	render(notes, '')
	
  img.removeClass(imgHide)
  clearBtn.removeClass(clearBtnDisplay)
  noNotes.removeClass(noNotesHide)
}

form.addEventListener('keydown', e => {
	if (e.which === 13) {
		e.preventDefault()
		addNote()
	}
})

clearBtn.on('click', () => clearNotes())

numFunc(50, clearNotes)

for (let n = 0; n < notesArray.length; n++) {
	new Note(notesArray[n])
}