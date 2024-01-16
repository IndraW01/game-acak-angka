const bomAngka = document.getElementById('bom-angka');
const generateAngka = document.getElementById('generate-angka');
const inputAngka = document.getElementById('input-angka');
const buttonInput = document.getElementById('button-input');
const resultAngka = document.getElementById('result-angka');
const audioBerhasil = document.getElementById('audioBerhasil');
const audioGagal = document.getElementById('audioGagal');


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

  generateAngka.style.display = 'none';
});

buttonInput.addEventListener('click', function (e) {
  const bom = parseInt(bomAngka.innerText);
  const angka = parseInt(inputAngka.value);

  if (angka <= bom) {
    if (angka <= angkaKurang) {
      audioGagal.play();
    } else {
      angkaKurang = angka;
    }
  }
  if (angka >= bom) {
    if (angka >= angkaLebih) {
      audioGagal.play();
    } else {
      angkaLebih = angka;
    }
  }

  if (angkaKurang == bom || angkaLebih == bom) {
    resultAngka.innerText = `Selamat anda Berhasil mendapatkan bom`;
    confetti.start()
    audioBerhasil.play();
    generateAngka.style.display = 'block';
  } else {
    resultAngka.style.display = 'block';
    resultAngka.style.backgroundColor = '#ffb579';
    resultAngka.innerText = `Angka anda harus lebih dari ${angkaKurang} kurang dari ${angkaLebih}`;
  }

  inputAngka.value = '';
});


const generateAngkaRandom = () => {
  confetti.stop();
  resultAngka.style.display = 'none';
  resultAngka.style.backgroundColor = '';
  resultAngka.innerText = '';
  inputAngka.value = '';

  angkaLebih = 100;
  angkaKurang = 0;

  return Math.floor(Math.random() * 100) + 1;
}



