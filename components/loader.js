const preloader = find('#preloader')

window.onload = () => {
  setTimeout(() => {
    fadeOut(preloader)
  }, 500)
}