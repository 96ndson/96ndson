const IS_VALID = function(element) {
    return element + " is valid"
}
const IS_REQUIRED = function(element) {
    return element + " is required"
} 
const INCORRECT_FORM = function(element) {
    return element + " is incorrect"
}

const HAVE_AT_LEAST = function(element, quantity) {
    return element + " must have at least " + quantity + " letters"
}

export {
    IS_VALID,
    IS_REQUIRED,
    INCORRECT_FORM,
    HAVE_AT_LEAST
}