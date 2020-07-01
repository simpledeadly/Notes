const ls = localStorage

const find = selector => document.querySelector(selector)

const cE = element => document.createElement(element)

const addClass = (element, className) => {
  element.classList.add(className)
}

const removeClass = (element, className) => {
  element.classList.remove(className)
}

const render = (entry, template) => entry.innerHTML = template

const fadeOut = element => {
  element.style.opacity = 1
  
  let interpreloader = setInterval(() => {
    element.style.opacity = element.style.opacity - 0.05

    if (element.style.opacity <= 0.05) {
      clearInterval(interpreloader)
      element.style.display = 'none'
    }
  }, 16)
}