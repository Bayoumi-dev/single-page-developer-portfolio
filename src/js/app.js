import handleScrollButton from './handleScrollButton'
import animation from './animation'

const app = () => {
   // Intro Section
   setTimeout(() => {
      document.body.querySelector('.intro-section').remove()
      document.body.style.overflow = 'auto'
   }, 0)

   // Execute scroll button
   handleScrollButton()

   // Execute Animation
   animation()
}

export default app
