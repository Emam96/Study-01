let certi = document.getElementById('card'); 
let options = document.querySelector('form'); 
let show = document.getElementById('certife'); 
let users = [];


function User(name, vaccine){

this.name = name; 
this.vacc = vaccine; 

users.push(this);
}



function pushToLocalStorage() {
   
   let codedData = JSON.stringify(users); 
   localStorage.setItem("data", codedData);
  }


  
  function retryFromLocalStorage() {
    let retryData = localStorage.getItem("data");
    let decodedData = JSON.parse(retryData);
    if (decodedData !== null) {
      for (let i = 0; i < decodedData.length; i++) {
        users[i].name = decodedData[i].name;
        users[i].vacc = decodedData[i].vacc;
       
      }

     

    }
  }










options.addEventListener('submit', showCerti);

function showCerti(event) {
    event.preventDefault();
    let title =  event.target[1].value;
   let vacType =  event.target[2].value;
   new User(title, vacType);
  pushToLocalStorage();


console.log(users);
//   retryFromLocalStorage();



  let h2Elm = document.createElement('h2'); 
  h2Elm.textContent = `He/She (${users[0].name}) got the damn (${users[0].vacc}) vaccine`
  show.appendChild(h2Elm);
  let spanElm = document.createElement('span'); 
  spanElm.textContent = 'pass this dude'
  show.appendChild(spanElm);

  let stamp = document.createElement('img'); 
  stamp.setAttribute("src", 'https://media.istockphoto.com/vectors/vaccinated-covid19-red-stamp-corona-virus-vaccination-rubber-stamp-vector-id1308089702?k=6&m=1308089702&s=612x612&w=0&h=BOvKvDrAgOLzwmw26u7yd5ax5Jhd-CZglXwFTqBB56Y=');
  stamp.setAttribute("width", "200px");
  show.appendChild(stamp);
  options.removeEventListener('submit', showCerti);

}




