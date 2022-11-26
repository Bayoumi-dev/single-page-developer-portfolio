const scrollButton = document.body.querySelector('#scroll-button'),
   handleScrollButton = () => {
      /**
       * @description Show & hide Scroll button
       */
      const scrollButtonVisibility = _ =>
         scrollY > 500
            ? scrollButton.classList.add('--visible')
            : scrollButton.classList.remove('--visible')
      // Listen for scroll events
      addEventListener('scroll', scrollButtonVisibility)

      /**
       * @description Scroll to Top when click on button
       */
      const scrollToTop = _ => {
         scroll({
            top: 0,
            behavior: 'smooth',
         })
      }
      scrollButton.addEventListener('click', scrollToTop)
   }
export default handleScrollButton
