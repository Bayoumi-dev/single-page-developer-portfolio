const animation = () => {
   /**
    * Animation On Scroll (with IntersectionObserver)
    * @description Start the animation when the element is on the viewport
    */
   const animations = document.body.querySelectorAll('.animate'),
      animateOptions = {
         threshold: 0.3,
      },
      animateOnScrolling = new IntersectionObserver(elements => {
         elements.forEach(element => {
            if (
               element.isIntersecting &&
               !element.target.classList.contains('animated')
            ) {
               let duration =
                     getStyle(element.target, 'animation-duration').replace(
                        's',
                        ''
                     ) * 1000,
                  animateTimeout = duration + 100
               startAnimate(element.target, animateTimeout)
            }
         })
      }, animateOptions)
   // Execute the animateOnScrolling(observer)
   animations.forEach(animate => {
      animateOnScrolling.observe(animate)
   })

   /**
    * @description get element style
    * @param {HTMLElement} element - The element to get style for
    * @param {string} property - The property to get style for
    * @returns {string} - The style of the element for the property given, empty string if
    */
   function getStyle(element, property) {
      return getComputedStyle(element).getPropertyValue(property)
   }

   /**
    * @description Start the animations
    * @param {HTMLElement} element - The element to animate
    * @param {Number} timeout - The timeout to wait before starting the animation
    */
   const startAnimate = (element, animateTimeout) => {
      // Add the animated class to the elements that are in the viewport
      element.classList.add('animated')
      // Remove the animated class to the elements that are animated after the timeout
      setTimeout(_ => element.classList.remove('animate'), animateTimeout)
   }
}
export default animation

