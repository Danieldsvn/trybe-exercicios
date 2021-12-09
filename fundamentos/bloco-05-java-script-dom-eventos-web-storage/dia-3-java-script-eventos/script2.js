function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function dezDaysCalendar () {
    let days = document.getElementById('days');
    for (let i = 0; i < dezDaysList.length; i += 1){
        let days = document.getElementById('days');
        let dayList = dezDaysList[i];
        let day = document.createElement('li');            
        day.innerHTML = dezDaysList[i];
        if (dayList === 25) {
            day.className = 'day holiday friday';
            day.innerText = dayList;
            days.appendChild(day);    

        }
        else if (dayList === 4 || dayList === 11 || dayList === 18) {
            day.className = 'day friday';
            day.innerText = dayList;
            days.appendChild(day);    

        }
        else {
            day.className = 'day';
            day.innerText = dayList;
            days.appendChild(day);    

        }
        
    }
  }

  dezDaysCalendar();

//   Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let holidays = 'Feriados';
function holidaysButton (holidays) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.setAttribute("id", "btn-holiday");
    button.innerHTML = holidays;
    buttonsContainer.appendChild(button);
}
holidaysButton (holidays);

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let button = document.getElementById('btn-holiday')
button.addEventListener('click', function (event) {
    if ( event.target.style.backgroundColor === 'red') {
        event.target.style.backgroundColor = 'unset';
    }
    else {
        event.target.style.backgroundColor = 'red';
    }
} ) ;

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let fridays = 'Sexta-feira';
function fridaysButton (fridays) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.setAttribute("id", "btn-friday");
    button.innerHTML = fridays;
    buttonsContainer.appendChild(button);
}
fridaysButton (fridays);

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.






    function mudaSexta(){ 
      let button2 = document.getElementById('btn-friday')
      button2.addEventListener('click', function () {
      let fridays = document.querySelectorAll('.friday');
      for (let i = 0; i < fridays.length; i += 1) {           
      if (  fridays[i].innerText !== 'SEXTA') {
        fridays[i].innerHTML = 'SEXTA';        
      }
      else {
        fridays[i].innerHTML = fridays[i];
      }
    }
    
} ) ;
    };

    mudaSexta();


    