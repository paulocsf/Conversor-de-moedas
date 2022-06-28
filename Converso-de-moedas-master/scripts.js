const button = document.getElementById('button-id')
const select = document.getElementById("currency-select")
const dolar = 5.27
const euro = 5.84
const bitcoin = 227553.16

const convertValues = () => {
    const inputreais = document.getElementById('input-real').value
    const RealValueText = document.getElementById('real-value-text')
    const DolarValueText = document.getElementById("dolar-value-text")

    //RealValueText.innerHTML = inputreais

    RealValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputreais)

    if (select.value === "U$$ Dólar americano") {
        DolarValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputreais / dolar)
    }

    if (select.value === '€ Euro') {
        DolarValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputreais / euro)
    }

    if (select.value === 'Bitcoin') {
        DolarValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputreais / bitcoin)

    }
}
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.svg"

    }

    if (select.value === 'U$$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assents/estados-unidos (1) 1.svg"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assents/bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)

select.addEventListener("change", changeCurrency)