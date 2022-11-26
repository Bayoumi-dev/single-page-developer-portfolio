/**
 * @description Error Element
 * @param {string} errorMsg Error message to display
 * @returns {string} HTML string of error element
 */
export const errorElement = errorMsg => `
<div class="error-element">
    <div class="error-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B"/>
            <rect x="11" y="6" width="2" height="9" rx="1" fill="#FF6F5B"/>
            <rect x="11" y="17" width="2" height="2" rx="1" fill="#FF6F5B"/>
        </svg>
    </div>
    <div class="error-msg">${errorMsg}</div>
</div>`
// Loading Element
export const loadingElement = `
<div class="loading d-flex align-items-center gap-2 h-fit">
  <span>Sending</span>
  <div class="motion d-flex align-items-center gap-1">
     <span></span><span></span><span></span>
  </div>
</div>`
/**
 * @description Sent Message Element
 * @param {string} message Message to display
 * @returns {string} HTML string of sent message element
 */
export const sentMsgStatus = message => `
<div class="d-flex align-items-center gap-2 pt-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#4ee1a0" viewBox="0 0 16 16">
     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
  </svg>
  <span class="animate fade-in animated fs-sm">${message}</span>
</div>`
