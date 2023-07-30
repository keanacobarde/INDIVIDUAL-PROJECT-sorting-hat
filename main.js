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

const filterBtns = `<button type="button" class="btn btn-outline-dark">All</button><button type="button" class="btn btn-outline-danger">Gryffindor</button><button type="button" class="btn btn-outline-success">Slytherin</button><button type="button" class="btn btn-outline-primary">Ravenclaw</button><button type="button" class="btn btn-outline-info">Hufflepuff</button>`
renderToDom("#filterbtnid", filterBtns);

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
      <p class="card-text"><small class="text-body-secondary"><button type="button" class="btn btn-outline-danger">Expel</button></small></p>
    </div>
  </div>
</div>
</div>`
});
renderToDom("#studentsid", domString); 
} 

cardsOnDom(students); 
