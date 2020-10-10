if (ls.getItem('darkTheme') == 'active') {
  body.classList.add('dark')
}

if (ls.getItem('nordTheme') == 'active') {
  body.classList.add('nord')
}

function switchThemeDark() {
  body.classList.toggle('dark')

  if (ls.getItem('darkTheme') == 'active') {
    ls.removeItem("darkTheme", "active")
  } else {
    ls.setItem("darkTheme", "active")
  }
}

function switchThemeNord() {
  body.classList.toggle('nord')

  if (ls.getItem('nordTheme') == 'active') {
    ls.removeItem("nordTheme", "active")
  } else {
    ls.setItem("nordTheme", "active")
  }
}

darkBtn.addEventListener('click', () => switchThemeDark())

nordBtn.addEventListener('click', () => switchThemeNord())

numFunc(49, switchThemeDark)

numFunc(50, switchThemeNord)