import Bound from 'bounds.js'

const boundary = Bound({
  margins: { bottom: -400 }
})

const image = document.querySelectorAll('img')
const whenImageEnters = (image) => {
  return () => {
    image.src = image.dataset.src
    boundary.unWatch(image)
    console.log('show!')
  }
}

image.forEach(img => {
  boundary.watch(img, whenImageEnters(img))
})

