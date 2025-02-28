import IMask from 'imask';


const Name = document.getElementById("name")
const Fone = document.getElementById("fone")

IMask(Name, {
    mask: /^[А-Яа-яЁёA-Za-z\s-]*$/,
    prepareChar: (str, masked) => {
        const isFirstLetter = 
            masked._value.length === 0 ||
            masked._value.endsWith(" ") ||
            masked._value.endsWith("-");
        return isFirstLetter ? str.toUpperCase() : str.toLowerCase();

    },
    commit: (value) => value,
  })

  IMask(Fone, {
    mask: '+{7}(000)000-00-00',
    lazy: false,  // make placeholder always visible
    placeholderChar: '_'     // defaults to '_'
  })