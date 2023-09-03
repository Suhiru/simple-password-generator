'use strict';
//Buttons
const btn_generation = document.querySelector('#generation');
const btn_copy = document.querySelector('#copy');

//Checkboxes
const ckbx_min = document.querySelector('#min');
const ckbx_maj = document.querySelector('#maj');
const ckbx_num = document.querySelector('#num');
const ckbx_car = document.querySelector('#car');

//Input
const in_password_length = document.querySelector('#nb');

//ASCII character value array
const ascii_character_vl_arr = [];

//Password field
const field_password = document.querySelector('#mdp');

let password = '';
window.onload = init;

function init() {
  btn_generation.addEventListener('click', main);
  btn_copy.addEventListener('click', copy);
  step0();
}

const main = () => {
  console.log(ckbx_min.checked);
  console.log(ckbx_maj.checked);
  console.log(ckbx_num.checked);
  console.log(ckbx_car.checked);
  console.log(parseInt(in_password_length.value));
  console.log('Generated');
  generatePassword(
    ckbx_min.checked,
    ckbx_maj.checked,
    ckbx_num.checked,
    ckbx_car.checked,
    parseInt(in_password_length.value)
  );
};

const generatePassword = (
  hasLoweerCase,
  hasUpperCase,
  hasNumbers,
  hasSpecialC,
  length
) => {
  let lowerCaseMinASCIIVal = 97;
  let lowerCaseMaxASCII = 122;
  let upperCaseMinASCIIVal = 65;
  let upperCaseMaxASCII = 90;
  let numberMinASCIIVal = 48;
  let numberMaxASCII = 57;
  let sCharacterMinASCIIVal = 33;
  let sCharacterMaxASCII = 47;

  //Adding lowerCase value Range to the Array
  if (hasLoweerCase) {
    for (
      lowerCaseMinASCIIVal;
      lowerCaseMinASCIIVal <= lowerCaseMaxASCII;
      lowerCaseMinASCIIVal++
    ) {
      if (!ascii_character_vl_arr.includes(lowerCaseMinASCIIVal)) {
        ascii_character_vl_arr.push(lowerCaseMinASCIIVal);
      }
    }
  } else {
    for (
      lowerCaseMinASCIIVal;
      lowerCaseMinASCIIVal <= lowerCaseMaxASCII;
      lowerCaseMinASCIIVal++
    ) {
      const indexOfCurrentCharacter =
        ascii_character_vl_arr.indexOf(lowerCaseMinASCIIVal);

      if (indexOfCurrentCharacter !== -1) {
        ascii_character_vl_arr.splice(indexOfCurrentCharacter, 1);
      }
    }
  }

  //Adding upperCase value Range to the Array
  if (hasUpperCase) {
    for (
      upperCaseMinASCIIVal;
      upperCaseMinASCIIVal <= upperCaseMaxASCII;
      upperCaseMinASCIIVal++
    ) {
      if (!ascii_character_vl_arr.includes(upperCaseMinASCIIVal)) {
        ascii_character_vl_arr.push(upperCaseMinASCIIVal);
      }
    }
  } else {
    for (
      upperCaseMinASCIIVal;
      upperCaseMinASCIIVal <= upperCaseMaxASCII;
      upperCaseMinASCIIVal++
    ) {
      const indexOfCurrentCharacter =
        ascii_character_vl_arr.indexOf(upperCaseMinASCIIVal);

      if (indexOfCurrentCharacter !== -1) {
        ascii_character_vl_arr.splice(indexOfCurrentCharacter, 1);
      }
    }
  }

  //Adding numbers value range to the Array
  if (hasNumbers) {
    for (
      numberMinASCIIVal;
      numberMinASCIIVal <= numberMaxASCII;
      numberMinASCIIVal++
    ) {
      if (!ascii_character_vl_arr.includes(numberMinASCIIVal)) {
        ascii_character_vl_arr.push(numberMinASCIIVal);
      }
    }
  } else {
    for (
      numberMinASCIIVal;
      numberMinASCIIVal <= numberMaxASCII;
      numberMinASCIIVal++
    ) {
      const indexOfCurrentCharacter =
        ascii_character_vl_arr.indexOf(numberMinASCIIVal);

      if (indexOfCurrentCharacter !== -1) {
        ascii_character_vl_arr.splice(indexOfCurrentCharacter, 1);
      }
    }
  }

  //Adding special character values to the Array
  if (hasSpecialC) {
    for (
      sCharacterMinASCIIVal;
      sCharacterMinASCIIVal <= sCharacterMaxASCII;
      sCharacterMinASCIIVal++
    ) {
      if (!ascii_character_vl_arr.includes(sCharacterMinASCIIVal)) {
        ascii_character_vl_arr.push(sCharacterMinASCIIVal);
      }
    }
  } else {
    for (
      sCharacterMinASCIIVal;
      sCharacterMinASCIIVal <= sCharacterMaxASCII;
      sCharacterMinASCIIVal++
    ) {
      const indexOfCurrentCharacter = ascii_character_vl_arr.indexOf(
        sCharacterMinASCIIVal
      );

      if (indexOfCurrentCharacter !== -1) {
        ascii_character_vl_arr.splice(indexOfCurrentCharacter, 1);
      }
    }
  }

  console.log(ascii_character_vl_arr);
  console.log(typeof length);
  let charCount = 0;
  if (password === '') {
    do {
      charCount++;

      const randomIndex = Math.floor(
        Math.random() * ascii_character_vl_arr.length
      );

      password += String.fromCharCode(ascii_character_vl_arr[randomIndex]);
    } while (charCount !== length);
  } else {
    password = '';
    do {
      charCount++;

      const randomIndex = Math.floor(
        Math.random() * ascii_character_vl_arr.length
      );

      password += String.fromCharCode(ascii_character_vl_arr[randomIndex]);
    } while (charCount !== length);
  }

  field_password.textContent = password;
  checkStrength(password);
};

const checkStrength = (password) => {
  console.log(password);

  const totalCharacterValue =
    hasLowerCase(password) +
    hasUpperCase(password) +
    hasNumbers(password) +
    hasScpecialC(password);

  console.log(totalCharacterValue);
  console.log(password.length);
  const passwordStrength = totalCharacterValue ** password.length;
  console.log(passwordStrength);
  if (passwordStrength <= 8503056) {
    console.log('step 1');
    step1();
  } else if (passwordStrength > 8503056 && passwordStrength <= 62523502209) {
    console.log('step 2');
    step2();
  } else if (
    passwordStrength > 62523502209 &&
    passwordStrength <= 1235736291547681
  ) {
    console.log('step 3');
    step3();
  } else if (
    passwordStrength > 1235736291547681 &&
    BigInt(passwordStrength) < BigInt(7326680472586201000n)
  ) {
    console.log('step 4');
    step4();
  } else if (passwordStrength > 7326680472586201000n) {
    step5();
    console.log('step 5');
  }
};

const hasLowerCase = (password) => {
  const lowercaseRegex = /[a-z]+/g;
  const result = lowercaseRegex.test(password) ? 26 : 0;
  return result;
};

const hasUpperCase = (password) => {
  const uppercaseRegex = /[A-Z]+/g;
  const result = uppercaseRegex.test(password) ? 26 : 0;
  return result;
};
const hasNumbers = (password) => {
  const numbersRegex = /[0-9]+/g;
  const result = numbersRegex.test(password) ? 10 : 0;
  return result;
};
const hasScpecialC = (password) => {
  const specialCharsRegex = /[^a-zA-Z0-9]+/g;
  const result = specialCharsRegex.test(password) ? 15 : 0;
  return result;
};

const copy = () => {
  console.log('copied');
};
