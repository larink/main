document.querySelectorAll('.list__link').forEach(link => {
  link.addEventListener('mouseover', () => {
    document.querySelector('.content-img').setAttribute('src', `img/${link.dataset.image}.jpg`)
    document.querySelector('.content-img').parentNode.classList.add('active')
  })

  link.addEventListener('mouseleave', () => {
    document.querySelector('.content-img').parentNode.classList.remove('active')
  })
})