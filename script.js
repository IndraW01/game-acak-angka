const bomAngka = document.getElementById('bom-angka');
const generateAngka = document.getElementById('generate-angka');
const inputAngka = document.getElementById('input-angka');
const buttonInput = document.getElementById('button-input');
const resultAngka = document.getElementById('result-angka');


let angkaLebih = 100;
let angkaKurang = 0;

generateAngka.addEventListener('click', function (e) {
  let interval = setInterval(() => {
    bomAngka.innerText = generateAngkaRandom();
  }, 50)
  setTimeout(() => {
    clearInterval(interval);
    bomAngka.innerText = generateAngkaRandom();

  }, 3000)
  // bomAngka.innerText = generateAngkaRandom();
});

buttonInput.addEventListener('click', function (e) {
  const bom = parseInt(bomAngka.innerText);
  const angka = parseInt(inputAngka.value);

  if (angka <= bom) {
    angkaKurang = angka;
  }
  if (angka >= bom) {
    angkaLebih = angka;
  }

  console.log(angkaKurang, angkaLebih, bom);

  if (angkaKurang == bom || angkaLebih == bom) {
    resultAngka.innerText = `Selamat anda Berhasil mendapatkan bom`;
  } else {
    resultAngka.style.display = 'block';
    resultAngka.innerText = `Angka anda harus lebih dari ${angkaKurang} kurang dari ${angkaLebih}`;
  }

  inputAngka.value = '';
});


const generateAngkaRandom = () => {
  return Math.floor(Math.random() * 100) + 1;
}

console.log("test");