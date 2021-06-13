const slides = document.querySelectorAll('.slide')

function slidesPlugin(slideActive = 3) {
	slides[slideActive].classList.add('active')

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActiveClasses()

			slide.classList.add('active')
		})

		function clearActiveClasses() {
			slides.forEach((slide) => {
				slide.classList.remove('active')
			})
		}
	}
}

slidesPlugin(2)
