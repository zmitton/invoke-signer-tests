(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.urlsafe = require('url-encode-decode')

window.render = () => {
  let h1 = document.getElementById('h1')
  let a1 = document.getElementById('a1')
  let e1 = document.getElementById('e1')
  let d1 = document.getElementById('d1')
  let l1 = document.getElementById('l1')
  let b1 = document.getElementById('b1')
  e1.innerHTML =  h1.innerHTML + window.urlsafe.encode(a1.value)
  d1.innerHTML =urlsafe.decode(e1.innerHTML)
  l1.setAttribute('href', e1.innerHTML)

  // let l2 = document.getElementById('link2')
  console.log("rendering area 1")

}

},{"url-encode-decode":2}],2:[function(require,module,exports){
function isStr (str) {
  return typeof str === 'string'
}

module.exports = {
  encode (str = '') {
    if (!isStr(str)) {
      throw new Error('Please provide string to encode.')
    }

    return encodeURIComponent(str).replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
      .replace(/%20/g, '+')
  },

  decode (str = '') {
    if (!isStr(str)) {
      throw new Error('Please provide string to decode')
    }

    return decodeURIComponent((str).replace(/\+/g, '%20'))
  }
}

},{}]},{},[1]);
