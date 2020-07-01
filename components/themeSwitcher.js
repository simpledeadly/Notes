if (ls.getItem('darkTheme') == 'active') {
  body.classList.add('dark')
}

darkBtn.addEventListener('click', () => {
  body.classList.toggle('dark')

  if (ls.getItem('darkTheme') == 'active') {
    ls.removeItem("darkTheme", "active")
  } else {
    ls.setItem("darkTheme", "active")
  }
})