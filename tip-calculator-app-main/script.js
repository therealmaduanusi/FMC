document.addEventListener('DOMContentLoaded', function () {
    // Selecting elements
    const billInput = document.getElementById('bill');
    const customInput = document.getElementById('custom-input');
    const numPeopleInput = document.getElementById('num-people');
    const tipButtons = document.querySelectorAll('.btn-tip-percent');
    const resetButton = document.querySelector('.reset-btn');
    const dollarValue = document.querySelector('.dollar-value');
    const dollarPerson = document.querySelector('.dollar-person');
  
    // Function to calculate tip and total amount
    function calculateTip() {
      const billAmount = parseFloat(billInput.value);
      const customPercentage = parseFloat(customInput.value) || 0;
      const numPeople = parseInt(numPeopleInput.value);
  
      // Check if inputs are valid
      if (isNaN(billAmount) || isNaN(numPeople) || billAmount <= 0 || numPeople <= 0) {
        alert('Please enter valid values for Bill Amount and Number of People.');
        return;
      }
  
      // Calculate tip amount and total amount per person
      const tipPercentage = customPercentage > 0 ? customPercentage : parseFloat(this.innerText);
      const tipAmount = (billAmount * tipPercentage) / 100;
      const totalAmount = (billAmount + tipAmount) / numPeople;
  
      // Display the results
      dollarPerson.innerText = `${tipAmount.toFixed(2)}`;
      dollarValue.innerText = `${totalAmount.toFixed(2)}`;
    }
  
    // Event listeners for tip buttons and custom input
    tipButtons.forEach(button => {
      button.addEventListener('click', calculateTip);
    });
  
    customInput.addEventListener('input', calculateTip);
  
    // Event listener for reset button
    resetButton.addEventListener('click', function () {
      billInput.value = '';
      customInput.value = '';
      numPeopleInput.value = '';
      dollarPerson.innerHTML = '0.00';
      dollarValue.innerHTML = '0.00';
    });
  });
  