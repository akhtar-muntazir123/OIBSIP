let temp=document.getElementById('temp');
let result=document.getElementById('result');
let inputSelect = document.querySelector('#input-dropdown')
let outputSelect=document.querySelector('#output-dropdown')

function convert()
{
    // checking if the value is empty or not
  if( temp.value===''){

    result.value=''
    alert('please enter a value for input')
  }
  
  ////celcius////
  //if the input is celcius and result is fahrenheit

  else if (inputSelect.selectedOptions[0].value=='Celcius'&&outputSelect.selectedOptions[0].value=='Fahrenheit'){
    console.log('true')
    result.value=(((Number(temp.value)*9)/5)+32).toFixed(2)+''+'°F'
    console.log(result.value)
  }

  //if the input is celcius and result is in kelvin
  else if (inputSelect.selectedOptions[0].value=='Celcius'&&outputSelect.selectedOptions[0].value=='Kelvin'){
    console.log('true')
    result.value=(Number(temp.value)+273.15).toFixed(2)+''+'°K'
  }

  ////fahrenheit////
  //if the input is fahrenheit and result is celcius

  else if (inputSelect.selectedOptions[0].value=='Fahrenheit'&&outputSelect.selectedOptions[0].value=='Celcius'){
    console.log('true')
    result.value=(((Number(temp.value)-32)*5)/9).toFixed(2)+''+'°C'
    console.log(result.value)
  }


  //if the input is fahrenheit and result is in kelvin
  else if (inputSelect.selectedOptions[0].value=='Fahrenheit'&&outputSelect.selectedOptions[0].value=='Kelvin'){
    console.log('true')
    result.value=((((Number(temp.value)-32)*5)/9)+273.15).toFixed(2)+''+'°K'
  }

  ////kelvin////
  //if the input is kelvin and result is fahrenheit

  else if (inputSelect.selectedOptions[0].value=='Kelvin'&&outputSelect.selectedOptions[0].value=='Fharenheit'){
    console.log('true')
    result.value=((((Number(temp.value)-273.15)*9)/5)+32).toFixed(2)+''+'°C'
    console.log(result.value)
  }

  //if the input is kelvin and result is in celcius
  else if (inputSelect.selectedOptions[0].value=='Kelvin'&&outputSelect.selectedOptions[0].value=='Celcius'){
    console.log('true')
    result.value=(Number(temp.value)-273.15).toFixed(2)+''+'°C'
  }
  else alert("please provide a different type to convert")

}























