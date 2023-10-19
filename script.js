function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const temperatureUnit = document.getElementById('temperatureUnit').value;
    let result;
  
    if (temperatureUnit === 'celsius') {
      // Convert Celsius to Fahrenheit
      result = (inputTemperature * 9/5) + 32;
      document.getElementById('result').innerText = `${inputTemperature} Celsius is ${result} Fahrenheit.`;
    } else if (temperatureUnit === 'fahrenheit') {
      // Convert Fahrenheit to Celsius
      result = (inputTemperature - 32) * 5/9;
      document.getElementById('result').innerText = `${inputTemperature} Fahrenheit is ${result} Celsius.`;
    } else {
      document.getElementById('result').innerText = 'Please select a temperature unit.';
    }
  }
  
