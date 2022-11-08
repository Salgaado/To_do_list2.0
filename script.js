const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let today = document.querySelector("#weekday");
let monthday = document.querySelector("#monthday")
let month = document.querySelector("#month");
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let ampm = document.querySelector("#ampm");
setInterval(() => {
  let now = new Date();
  let day = days[now.getDay()];
  let monthname = months[now.getMonth()];
  let notArmy = now.getHours() - 24;
  today.innerHTML = `${day}, `;
  monthday.innerHTML = `${now.getDate()} de `;
  month.innerHTML = monthname;
  if (now.getHours() > 24) {
    hour.innerHTML = notArmy;
    
  } else {
    hour.innerHTML = now.getHours();
    
  }
  minutes.innerHTML = now.getMinutes() + " ";
  if (now.getMinutes() < 10) {
    minutes.innerHTML = "0" + now.getMinutes();
  }
}, 1000)








/* Atualizando a to-do-list*/

const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");
const deleteButton = document.querySelectorAll("ul a");


const inputLength = () => input.value.length;

const removeItem = (event) => {
  event.target.parentNode.remove();

}

for (let buttons of deleteButton) {
  buttons.addEventListener("click", removeItem);
}

const newTask = () => {
  let v = input.value;
  let li = document.createElement("li");
  li.innerHTML = "<label><input type='checkbox'><i></i><span>" + v + "</span><a href='#'>–</a></label>";
  ul.appendChild(li);
  input.value = "";
  let button = document.querySelectorAll("ul a");
  let removeli = (event) => {
    event.target.parentNode.remove();
  }
  for (let one of button) {
    one.addEventListener("click", removeli);
  }

}

const addTaskEnter = (e) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    newTask();
  }
}

input.addEventListener("keypress", addTaskEnter);
