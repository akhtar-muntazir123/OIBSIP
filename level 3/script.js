let celciusInput = document.querySelector('#celcius')
let fahrenheitInput = document.querySelector('#fahrenhite')
let kelvinInput=document.querySelector('#kelvin')

function roundNumber(number){
    return Math.round(number*100)/100
}


celciusInput.addEventListener('input',function(){
    let cTemp =parseFloat(celciusInput.value)
    console.log(cTemp)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15
    fahrenheitInput.value= roundNumber(fTemp)
    
    // kelvinInput.value= roundNumber(kTemp)
}
)