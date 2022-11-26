/**
 * @description Check the field
 * @param {string} value
 * @returns {string} field status
 *
 */
export const checkField = value => (!value ? `Please fill out this field` : '')

/**
 * @description Name Validation
 * @param {string} name
 * @returns {string} field status
 */
export const checkValidName = name =>
   !name
      ? 'Please fill out this field'
      : !/[a-zA-Z]/.test(name)
      ? 'Sorry, invalid format here'
      : ''

/**
 * @description Email Validation
 * @param {string} Email
 * @returns {string} field status
 */
export const checkValidEmail = email =>
   !email
      ? 'Please fill out this field'
      : !isValidEmail(email)
      ? 'Sorry, invalid format here'
      : ''
// is the email address valid
const isValidEmail = email =>
   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
   )
