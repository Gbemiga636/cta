import './styles.css'

// Mobile menu
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open')
    mobileMenu.classList.toggle('open')
  })

  document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
      menuBtn.classList.remove('open')
      mobileMenu.classList.remove('open')
    })
  })
}

// Scroll fade-in animations
const scrollElements = document.querySelectorAll('.scroll-animate')

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
)

scrollElements.forEach(function (el) {
  // Skip hero top-level blocks — they animate on page load via CSS
  if (el.closest('.hero-text-block') || el.closest('.hero-image-col')) return
  observer.observe(el)
})
