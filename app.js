window.urlsafe = require('url-encode-decode')

window.render = () => {
  let a1 = document.getElementById('a1')
  let a2 = document.getElementById('a2')
  let e1 = document.getElementById('e1')
  let d1 = document.getElementById('d1')
  let l1 = document.getElementById('l1')
  let b1 = document.getElementById('b1')
  e1.innerHTML =  a1.value + window.urlsafe.encode(a2.value)
  d1.innerHTML =urlsafe.decode(e1.innerHTML)
  l1.setAttribute('href', e1.innerHTML)

  let l2 = document.getElementById('link2')

  console.log("rendering area 1")

}
window.invoke = () => {
  window.render()
  window.location = document.getElementById('e1').innerHTML
}

