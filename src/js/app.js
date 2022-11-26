import handleScrollButton from './handleScrollButton'
import animation from './animation'
import handleMessageForm from './handleMessageForm'

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

   // Execute handle message form
   handleMessageForm()
}

export default app
