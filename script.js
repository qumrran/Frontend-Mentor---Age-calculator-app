const inputDay = document.querySelector('.day');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');

const btn = document.querySelector('.app__btnsection__btn');

const outputDay = document.querySelector('.outputDay');
const outputMonth = document.querySelector('.outputMonth');
const outputYear = document.querySelector('.outputYear');

const errorDay = document.querySelector('.app__inputDate__container__errorDay');
const errorMonth = document.querySelector(
	'.app__inputDate__container__errorMonth'
);
const errorYear = document.querySelector(
	'.app__inputDate__container__errorYear'
);

const labelDay = document.querySelector('.labelDay');
const labelMonth = document.querySelector('.labelMonth');
const labelYear = document.querySelector('.labelYear');

function isValidDate(day, month, year) {
	day = parseInt(day, 10);
	month = parseInt(month, 10);
	year = parseInt(year, 10);

	if (isNaN(day) || isNaN(month) || isNaN(year)) {
		return false;
	}

	if (day < 1 || day > 31) {
		errorDay.textContent = 'Must be a valid day';
		inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
		labelDay.style.color = 'hsl(0, 100%, 67%)';
		return false;
	} else {
		errorDay.textContent = '';
		inputDay.style.borderColor = 'hsl(0, 0%, 86%)';
		labelDay.style.color = 'hsl(0, 1%, 44%)';
	}

	if (month < 1 || month > 12) {
		errorMonth.textContent = 'Must be a valid month';
		inputMonth.style.borderColor = 'hsl(0, 100%, 67%)';
		labelMonth.style.color = 'hsl(0, 100%, 67%)';
		return false;
	} else {
		errorMonth.textContent = '';
		inputMonth.style.borderColor = 'hsl(0, 0%, 86%)';
		labelMonth.style.color = 'hsl(0, 1%, 44%)';
	}

	if (year < 1900 || year > 2099) {
		errorYear.textContent = 'Min 1900 ';
		inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
		labelYear.style.color = 'hsl(0, 100%, 67%)';
		return false;
	} else {
		errorYear.textContent = '';
		inputYear.style.borderColor = 'hsl(0, 0%, 86%)';
		labelYear.style.color = 'hsl(0, 1%, 44%)';
	}

	const daysInMonth = new Date(year, month, 0).getDate();
	if (day > daysInMonth) {
		errorDay.textContent = 'Must be a valid day';
		inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
		labelDay.style.color = 'hsl(0, 100%, 67%)';
		return false;
	} else {
		errorDay.textContent = '';
		inputDay.style.borderColor = 'hsl(0, 0%, 86%)';
		labelDay.style.color = 'hsl(0, 1%, 44%)';
	}

	const actualDate = new Date(year, month - 1, day);

	const currentDate = new Date();

	if (actualDate > currentDate) {
		errorYear.textContent = 'Must be in the past';
		inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
		labelYear.style.color = 'hsl(0, 100%, 67%)';
		return false;
	} else {
		errorYear.textContent = '';
		inputYear.style.borderColor = 'hsl(0, 0%, 86%)';
		labelYear.style.color = 'hsl(0, 1%, 44%)';
	}

	return true;
}

function calculateAge() {
	const inputDayValue = inputDay.value;
	const inputMonthValue = inputMonth.value;
	const inputYearValue = inputYear.value;

	if (!isValidDate(inputDayValue, inputMonthValue, inputYearValue)) {
		return;
	}

	const birthDate = new Date(
		inputYearValue,
		inputMonthValue - 1,
		inputDayValue
	);

	const currentDate = new Date();

	const ageInMilliseconds = currentDate - birthDate;

	const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
	const ageInMonths = Math.floor(ageInDays / 30.4375);
	const ageInYears = Math.floor(ageInMonths / 12);

	const remainingMonths = ageInMonths % 12;
	const remainingDays = Math.floor(ageInDays % 30.4375);

	outputDay.textContent = remainingDays;
	outputMonth.textContent = remainingMonths;
	outputYear.textContent = ageInYears;
}

btn.addEventListener('click', calculateAge);
