(function () {
  var nameInput = document.querySelector("input[name='name']");
  var surnameInput = document.querySelector("input[name='surname']");
  var patronymicInput = document.querySelector("input[name='patronymic']");
  var phoneInput = document.querySelector("input[name='phone']");
  var emailInput = document.querySelector("input[name='email']");
  var agreementInput = document.querySelector("input[name='agreement']");
  var submit = document.querySelector('.payment-form__submit');

  var isSurnameValid = false;
  var isNameValid = false;
  var isPatronymicValid = false;
  var isPhoneValid = false;
  var isEmailValid = false;
  var isAgreementChecked = false;

  var isFormValid = function () {
    return isSurnameValid
      && isNameValid
      && isPatronymicValid
      && isPhoneValid
      && isEmailValid
      && isAgreementChecked;
  };

  var enableSubmit = function () {
    if (submit.hasAttribute('disabled')) {
      submit.removeAttribute('disabled');
    }
  };

  var disableSubmit = function () {
    if (!submit.hasAttribute('disabled')) {
      submit.setAttribute('disabled', '');
    }
  };

  var checkValidity = function () {
    isFormValid() ? enableSubmit() : disableSubmit();
  };

  var onEmailInput = function () {
    isEmailValid = emailInput.validity.valid && emailInput.value.length > 0;
    checkValidity();
  };

  var onSurnameInput = function () {
    isSurnameValid = surnameInput.value.length > 0;
    checkValidity();
  };

  var onNameInput = function () {
    isNameValid = nameInput.value.length > 0;
    checkValidity();
  };

  var onPatronymicInput = function () {
    isPatronymicValid = patronymicInput.value.length > 0;
    checkValidity();
  };

  var onPhoneInput = function () {
    isPhoneValid = !/_/.test(phoneInput.value) && phoneInput.value.length > 0;
    checkValidity();
  };

  var onArgeementChange = function() {
    isAgreementChecked = agreementInput.checked;
    checkValidity();
  };

  surnameInput.addEventListener('input', onSurnameInput);
  nameInput.addEventListener('input', onNameInput);
  patronymicInput.addEventListener('input', onPatronymicInput);
  phoneInput.addEventListener('input', onPhoneInput);
  emailInput.addEventListener('input', onEmailInput);
  agreementInput.addEventListener('change', onArgeementChange);
})();
