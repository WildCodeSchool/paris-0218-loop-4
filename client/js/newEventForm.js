/* global fetch */
import { createNavbarElement } from './component/nav.js'
import { createHeadElement } from './component/head.js'
import { createScriptElement } from './component/scriptbootstrap.js'

document.getElementById('scriptbootstrap').innerHTML = createScriptElement()
document.getElementById('head').innerHTML = createHeadElement()
document.getElementById('navDyn').innerHTML = createNavbarElement()

const form = document.getElementById('add-new-event')

form.addEventListener('submit', e => {
  e.preventDefault()

  const event = {
    title: document.getElementById('add-event-title').value,
    description: document.getElementById('add-event-description').value,
    address: document.getElementById('add-event-address').value,
    date: document.getElementById('add-event-date').value,
    people: document.getElementById('add-people-number').value,
    game: document.getElementById('choix_jeux').value,
    style: document.getElementById('choix_style').value,
    sexe: document.getElementById('choix_sexe').value
  }

  fetch('http://localhost:8080/newEvent', {
    method: 'post',
    body: JSON.stringify(event)
  }).then(res => console.log(res.status))
})
