if (ls.getItem('darkTheme') == 'active') {
  body.classList.add('dark')
}

function switchTheme() {
  body.classList.toggle('dark')

  if (ls.getItem('darkTheme') == 'active') {
    ls.removeItem("darkTheme", "active")
  } else {
    ls.setItem("darkTheme", "active")
  }
}

darkBtn.addEventListener('click', () => switchTheme())

numFunc(49, switchTheme)