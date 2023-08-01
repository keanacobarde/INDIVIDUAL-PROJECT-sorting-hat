// *********  DATA ********** //
//STUDENTS ARRAY // 
const students = [ 
  { 
  studentId: 1,
  name: "Harry Potter", 
  house: "Gryffindor", 
  },
  { 
  studentId: 2,
  name: "Luna Lovegood", 
  house: "Ravenclaw", 
  }, 
  { 
  studentId: 3,
  name: "Draco Malfoy", 
  house: "Slytherin", 
  },
  { 
  studentId: 4,
  name: "Cedric Diggory", 
  house: "Hufflepuff", 
  },
  { 
  studentId: 5,
  name: "Cho Chang", 
  house: "Ravenclaw", 
  },    
  ]

  //Exeplled Students Array
const expelledStudents = []; 

// *********  UTILITY FUNCTIONS  ********* //
const renderToDom = (divId, html) => {
  document
  .querySelector(divId)
  .innerHTML = html;  
}

// *********  HTML COMPONENTS  ********* //
const form = `<form id="studentForm"><div class="input-group mb-3"><input type="text" class="form-control student-input" placeholder="Luna Lovegood" aria-label="Recipient's username" aria-describedby="button-addon2" id="newName" required>
<button class="btn btn-outline-secondary" type="submit" id="button-addon2">Sort!</button></div></form>`

const filterBtns = `<button type="button" class="btn btn-outline-dark" id="all">All</button><button type="button" class="btn btn-outline-danger" id="gryf">Gryffindor</button><button type="button" class="btn btn-outline-success" id="sly">Slytherin</button><button type="button" class="btn btn-outline-primary"id="rave">Ravenclaw</button><button type="button" class="btn btn-outline-info"id="huff">Hufflepuff</button>`

//Rendering Student Cards - Students
const cardsOnDom = (array) => {
 let domString = ``; 
array.forEach(student => {
domString += `<div class="card mb-3" style="max-width: 500px;">
<div class="row g-0">
  <div class="col-md-4"style="max-width:150px;background-color:${student.house == "Ravenclaw" ? "#0b304a" : student.house == "Slytherin" ? "#25581f" : student.house == "Gryffindor" ? "#4d0506" : "#f3de0b"};">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <p class="card-text"><small class="text-body-secondary"><button type="button" class="btn btn-outline-danger" id='expel--${student.studentId}'>Expel</button></small></p>
    </div>
  </div>
</div>
</div>`
});
renderToDom("#studentsid", domString); 
} 

//Rendering Cards - For Expelled Students
const cardsOnDomExpelled = (array) => {
  let domString = ``; 
 array.forEach(student => {
 domString += `<div class="card mb-3" style="max-width: 500px;">
 <div class="row g-0">
   <div class="col-md-4"style="max-width:150px">
     <img style="height:100%;width:100%;"src="https://hexcolorpedia.com/wp-content/themes/bootscore-5-child/solid.php?c=80080a" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${student.name}</h5>
       <p class="card-text">${student.house}</p>
       <p class="card-text"><small class="text-body-secondary"><button type="button" class="btn btn-outline-danger" id='expel--${student.studentId}'>Expelled!</button></small></p>
     </div>
   </div>
 </div>
 </div>`
 });
 renderToDom("#expelledid", domString); 
 } 

// *********  EVENT LISTENERS  *********  //

const eventListeners = () => {
//FILTER BUTTONS 
document.querySelector("#filterbtnid").addEventListener('click', (e) => {
  console.log(e.target.id); 
  if (e.target.id == "all") {
    cardsOnDom(students); 
  } else if (e.target.id == "gryf") {
    cardsOnDom(students.filter(student => student.house === "Gryffindor"));
  } else if (e.target.id == "sly") {
    cardsOnDom(students.filter(student => student.house === "Slytherin"));
  } else if (e.target.id == "rave") {
    cardsOnDom(students.filter(student => student.house === "Ravenclaw"));   
  } else if (e.target.id == "huff") {
    cardsOnDom(students.filter(student => student.house === "Hufflepuff"));  
  }
})

//Buttons on Cards - Expel 
document.querySelector("#studentsid").addEventListener('click', (e) => {
if (e.target.id.includes('expel')) {
  //Finding Index of Student
const [ , studentIdDel] = e.target.id.split('--')
const index = students.findIndex(student => student.studentId == studentIdDel); 
console.log(index, typeof(index)); 
  //Expulsion Functionality
expelledStudents.push(students[index]);
students.splice(index, 1);
cardsOnDom(students);
cardsOnDomExpelled(expelledStudents);  
}
})

//Event Listener Associated Function - House Randomizer 
const houseRandom = () => {
  const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  return houses[Math.floor(Math.random() * 4)]; 
  }

//Form Submission Buttons
document.querySelector("#formid").addEventListener('submit', (e) => {
  e.preventDefault(); 
const newStudent = {
  studentId: students.length + 1,
  name: document.querySelector("#newName").value,
  house: houseRandom()
}
students.push(newStudent);
cardsOnDom(students); 
})
}

// *********  FUNCTION TO START APPLICATION  *********  //
const startApp = () => {
  renderToDom("#filterbtnid", filterBtns);
  renderToDom("#formid", form); 
  cardsOnDom(students);
  eventListeners(); 
}

// *********  Start App!  *********  //
startApp(); 
