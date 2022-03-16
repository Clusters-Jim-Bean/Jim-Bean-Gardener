//console.log( 'Hello World' )

const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  primaryNav.classList.toggle('active');
});
}

const formTwo = document.getElementById('formTwo');
const theEmail = document.getElementById('emailTwo')

if (formTwo) {
  formTwo.addEventListener('submit', handleSubmit);
}


function handleSubmit(e){
  // Next step = match form input value to regex
  e.preventDefault();
  //console.log('test');
  var pattern = /^.+\@.+$/;
  var value = theEmail.value;
  //console.log(value)
  if (pattern.test(value)){
    console.log('A valid email address :)');
  }
  else{
    console.log("Not a valid email address :(");
  }
  
}



const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


async function fetchEvents() {
  const eventsGrid = document.querySelector('.events-grid');
  const data = await fetch('./db.json');
  const events = await data.json();
  events.data.map(event => {
    eventsGrid.innerHTML += `
      <div class="events-card">
        <img src=${event.image} alt="garden image">
        <div class="card-content">
        <h3>${event.title}</h3>
        <p>${event.info}</p>
        <time>${event.date}</time>
        <a href=${event.link} target="_blank">View Event</a>
        </div>
      </div>
    `
  })
}

fetchEvents();