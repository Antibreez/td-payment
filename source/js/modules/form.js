(function () {
  var phoneInput = document.querySelector("input[name='phone']");

  var imPhone = new Inputmask('+7(999)999-99-99');
  imPhone.mask(phoneInput);
})();
