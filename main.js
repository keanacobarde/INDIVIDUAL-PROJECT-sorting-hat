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
  house: "Slythirin", 
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
const form = `<form><div class="input-group mb-3"><input type="text" class="form-control student-input" placeholder="Luna Lovegood" aria-label="Recipient's username" aria-describedby="button-addon2">
<button class="btn btn-outline-secondary" type="submit" id="button-addon2">Sort!</button></div></form>`
renderToDom("#formid", form);

const filterBtns = `<button type="button" class="btn btn-outline-dark" id="all">All</button><button type="button" class="btn btn-outline-danger" id="gryf">Gryffindor</button><button type="button" class="btn btn-outline-success" id="sly">Slytherin</button><button type="button" class="btn btn-outline-primary"id="rave">Ravenclaw</button><button type="button" class="btn btn-outline-info"id="huff">Hufflepuff</button>`

//Rendering Student Cards - Students
const cardsOnDom = (array) => {
 let domString = ``; 
array.forEach(student => {
domString += `<div class="card mb-3" style="max-width: 500px;">
<div class="row g-0">
  <div class="col-md-4"style="max-width:150px">
    <img style="height:150px;width:150px;"src="https://hexcolorpedia.com/wp-content/themes/bootscore-5-child/solid.php?c=80080a" alt="...">
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
     <img style="height:150px;width:150px;"src="https://hexcolorpedia.com/wp-content/themes/bootscore-5-child/solid.php?c=80080a" alt="...">
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
    cardsOnDom(students.filter(student => student.house === "Slythirin"));
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
}

// *********  FUNCTION TO START APPLICATION  *********  //
renderToDom("#filterbtnid", filterBtns); 
cardsOnDom(students);
eventListeners(); 
