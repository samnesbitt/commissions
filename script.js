const form = document.querySelector('form');
const hourlyRate = 17;
const resultElement = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const mrr = form.mrr.value;
  const onboardingFee = form.onboarding_fee.value;
  const monthlyHours = form.monthly_hours.value;
  const contractLength = form.contract_length.value;
  const paymentTerms = form.payment_terms.value;

  const totalRevenue = parseInt(onboardingFee) + (parseInt(mrr) * (parseInt(contractLength) - 1));
  const totalCostOfHours = parseInt(monthlyHours) * hourlyRate * (parseInt(contractLength) - 1);
  const netRevenue = totalRevenue - totalCostOfHours;
  const hourlyFee = parseInt(mrr) / parseInt(monthlyHours);

  let commissionRate;
  if (paymentTerms === 'monthly') {
    commissionRate = 0.1;
  } else if (paymentTerms === 'quarterly') {
    commissionRate = 0.15;
  } else {
    commissionRate = 0.2;
  }

  const commission = commissionRate * netRevenue;

  resultElement.innerHTML = `
    <p>Hourly Fee: $${hourlyFee.toFixed(2)}</p>
    <p>Net Revenue: $${netRevenue.toFixed(2)}</p>
    <p><strong>Commission: $${commission.toFixed(2)}</strong></p>
  `;
});
