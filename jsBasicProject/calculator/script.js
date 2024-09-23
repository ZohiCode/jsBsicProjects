// Değişkenler
let display = document.getElementById('display');// Ekran
let operationHistory = document.getElementById('operation-history');// Geçmiş
let currentInput = '';
let operator = '';
let previousInput = '';
let history = '';

// Sayı ekle
function appendNumber(number) {
  currentInput += number.toString(); // Sayıyı dizeye dönüştür
  updateDisplay();
}

// Operatör ekle
function appendOperator(op) {
  if (currentInput === '') return; // Boş girdi kontrolü
  currentInput += op; // Operatörü ekle
  updateDisplay();
}

// Nokta ekle
function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

// Tüm girdi temizle
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
  updateHistory('');
}

// Son girdiyi sil
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// Parantez ekle
function appendParenthesis(paren) {
  currentInput += paren;
  updateDisplay();
}

// Sonucu hesapla
function calculateResult() {
  try {
    // JavaScript işlem önceliği için uygun bir formatta değerlendir
    const sanitizedInput = currentInput
      .replace(/×/g, '*')
      .replace(/÷/g, '/');

    // Hesaplama işlemi
    const result = eval(sanitizedInput);
    currentInput = result.toString(); // Sonucu dizeye dönüştür
    updateDisplay();
    updateHistory(currentInput); // Geçmişi güncelle
  } catch (error) {
    display.value = "Error"; // Hata durumunda mesaj göster
    currentInput = '';
  }
}

// Ekranı güncelle
function updateDisplay() {
  display.value = currentInput;
}

// Geçmişi güncelle
function updateHistory(value) {
  operationHistory.innerText = value;
}
