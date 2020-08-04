const form = document.querySelector("#info")
const name = document.querySelector("#name")
const nameHelp = document.querySelector("#nameHelp")
const country = document.querySelector("#country")
const countryHelp = document.querySelector("#countryHelp")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (name.value === "" || country.value === "" || email.value === "") {
		if (name.value === "") {
			nameHelp.innerText = "¡Por favor, completar esta información!"
		}
		if (country.value === "") {
			countryHelp.innerText = "¡Por favor, completar esta información!"
		}
		if (email.value === "") {
			emailHelp.innerText = "¡Por favor, completar esta información!"
		}
	} else {
		form.submit()
	}
})

