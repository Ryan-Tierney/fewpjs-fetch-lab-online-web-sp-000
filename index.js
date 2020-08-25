function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
  const pages = document.querySelector('pages')
  json.forEach(book => { 
    const p = document.createElement('p')
    p.innerHTML = `<p>${book.numberOfPages}<p>`
    pages.appendChild(p)
  })
  
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
