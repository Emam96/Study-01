let certi = document.getElementById('card'); 
let options = document.querySelector('form'); 
let show = document.getElementById('certife'); 
let btn = document.getElementById('BTn'); 
let users = [];


function User(name, vaccine){

this.name = name; 
this.vacc = vaccine; 

users.push(this);
}


function retryFromLocalStorage() {
    let retryData = localStorage.getItem("data");
    
    if (retryData !== null) {
        let decodedData = JSON.parse(retryData);
      users = decodedData
       
      }

     

    }
  

  retryFromLocalStorage();



  
  

  function pushToLocalStorage() {
   
    let codedData = JSON.stringify(users); 
    localStorage.setItem("data", codedData);
   }






options.addEventListener('submit', showCerti);

function showCerti(event) {
    event.preventDefault();
    let title =  event.target[1].value;
   let vacType =  event.target[2].value;
   new User(title, vacType);
   render();
  pushToLocalStorage();
}



function render () {

    show.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
  let h2Elm = document.createElement('h2'); 
  h2Elm.textContent = `He/She (${users[i].name}) got the damn (${users[i].vacc}) vaccine`
  show.appendChild(h2Elm);
  let spanElm = document.createElement('span'); 
  spanElm.textContent = 'pass this dude'
  show.appendChild(spanElm);

  let stamp = document.createElement('img'); 
  stamp.setAttribute("src", 'https://media.istockphoto.com/vectors/vaccinated-covid19-red-stamp-corona-virus-vaccination-rubber-stamp-vector-id1308089702?k=6&m=1308089702&s=612x612&w=0&h=BOvKvDrAgOLzwmw26u7yd5ax5Jhd-CZglXwFTqBB56Y=');
  stamp.setAttribute("width", "200px");
  show.appendChild(stamp);
  let hrElm = document.createElement('hr'); 
  hrElm.setAttribute('class', "hoi")
  show.appendChild(hrElm);
}
//   options.removeEventListener('submit', showCerti);


}


render();


btn.addEventListener('click', deleteData)

function deleteData(event){
event.preventDefault();
    localStorage.clear();
    location.href = "index.html";
   
    
}