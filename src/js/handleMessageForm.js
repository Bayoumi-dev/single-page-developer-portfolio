import { checkField, checkValidName, checkValidEmail } from './validation'
import { errorElement, loadingElement, sentMsgStatus } from './htmlElements'

const handleMessageForm = _ => {
   const form = document.forms['ms-from']
   const inputs = [form.name, form.email, form.message]
   let formState = {
      status: 'idle',
      errorMsg: {},
      values: {
         name: '',
         email: '',
         message: '',
      },
   }

   /**
    * Function to handle form submit
    * @description Form validation
    * @param {MouseEvent} e
    */
   const formSubmit = e => {
      e.preventDefault()
      const formData = new FormData(form)
      for (const [key, value] of formData.entries()) {
         formState = {
            ...formState,
            values: {
               ...formState.values,
               [key]: value,
            },
         }
      }
      checkInputs(inputs)
      // If there are no errors, submit the form
      if (!CheckErrors()) {
         formState = {
            ...formState,
            status: 'submitted',
         }
         messageStatus() && (form.classList.add('hold'), resetForm(inputs))
      } else {
         formState = {
            ...formState,
            status: 'errors',
         }
      }
      console.log(formState)
   }
   // Add event listener to form to handle message form
   form.addEventListener('submit', formSubmit)
   // Add a change event to each input to check it when changing
   inputs.forEach(input =>
      input.addEventListener('change', e => inputChecker(e.target))
   )

   /**
    * @description CheckErrors
    * @returns {Boolean} true if there is an error, false otherwise.
    */
   const CheckErrors = _ => {
      let errors = false
      Object.values(formState.errorMsg).forEach(value => {
         if (value) errors = true
      })
      return errors
   }

   /**
    * @description Check inputs
    * @param {Array} inputs Array of inputs to check
    */
   const checkInputs = inputs => inputs.forEach(input => inputChecker(input))

   /**
    * @description Check input and set error message if needed
    * @param {HTMLInputElement} input
    * @returns {void}
    */
   const inputChecker = input => {
      const checkValid =
            input.name === 'name'
               ? checkValidName
               : input.name === 'email'
               ? checkValidEmail
               : checkField,
         errorMsg = checkValid(input.value),
         parentElement = input.parentElement

      formState = {
         ...formState,
         errorMsg: {
            ...formState.errorMsg,
            [input.name]: errorMsg,
         },
      }

      if (errorMsg) {
         parentElement.classList.remove('valid')
         parentElement.classList.add('error')
         removeErrorElement(parentElement)
         parentElement.insertAdjacentHTML('beforeend', errorElement(errorMsg))
      } else {
         parentElement.classList.remove('error')
         parentElement.classList.add('valid')
         removeErrorElement(parentElement)
      }
   }

   /**
    * @description Remove error element from DOM if it exists
    * @param {HTMLElement} parentElement Parent element of input checkField
    * @returns {void}
    */
   const removeErrorElement = errorElement => {
      errorElement.querySelector('.error-element') &&
         errorElement.querySelector('.error-element').remove()
   }

   /**
    * Message Status
    * @description Tell the user if the message has been received
    * @param {Boolean} status Status of the message send request.
    */
   const messageStatus = () => {
      const sentElement = document.getElementById('send')
      // Loading element indicates that the message is sent
      sentElement.innerHTML = loadingElement
      // Send the message after 1 second to give the loading element time to show
      setTimeout(
         () =>
            (sentElement.innerHTML = sentMsgStatus(
               'Your message has been received.'
            )),
         1000
      )
      return true
   }

   /**
    * @description Reset the form
    * @param {Array} inputs Array of inputs
    */
   const resetForm = inputs => {
      inputs.forEach(input => {
         input.value = ''
      })
      form
         .querySelectorAll('.valid')
         .forEach(el => el.classList.remove('valid'))
   }
}
export default handleMessageForm
