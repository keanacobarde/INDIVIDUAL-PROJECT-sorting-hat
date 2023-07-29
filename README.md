# Sorting Hat

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions in help tickets if you need help. We will guide you to the resources that are available to you.
- When done, tell an instructor. Everyone will present how far they got AND their favorite piece of code that they wrote to an instructor.
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![screencapture-drt-sorting-netlify-app-2022-04-23-14_28_47](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


<!-- [See Demo](https://drt-sortinghat.netlify.app/)
 -->
## Technical Requirements
- You MUST plan your project and highly suggest using issue tickets. There are a few that have been provided for you to use already. Continue to add to these so you know what work you need to complete. 
- You MAY use the `renderToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## DEFINITION OF DONE
Once you have completed all the technical requirments, you should complete the following:
- [README Requirements](https://github.com/orgs/nss-evening-web-development/discussions/13)
- **RECOMMENDED** Loom Video: [Sign up for Loom](https://www.loom.com/signup) and record a video of you walking through your app 

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Sorting/Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)

# 💮 PLANNING 💮 
> STEP ONE - Annotation: Read over technical requirements and annotate them. 

💮  Translate technical requirements into code needs.
💮  Look at mock-up and examin for HTML structure. 

HTML Structure 
> Header and paragraph section

> Form to sort students

> Filter buttons to show which students are in which houses. 

> Rendered array of student cards, what houses they're in, and an expel button. 

> Expelled array that shows students that are expelled. This project's version of delete. 

Technical Requirements 
KEY: 
- ♦️ Convert into an issue. 
- 📝 Informational. Discoveries. 

# 📝 INFORMATIONAL ASIDES AND DISCOVERY 📝

> 📝 I did not know how much went into project planning until now. I vastly underestimated it, and even now, I feel like I'm only getting slight exposure to it. 

> 📝 The structure needs to be motivated. The order in which I tackle these issues needs to make some sense. It's like how the main.js file tells the story of execution. What does the user see first? What do they need to interact with first? I need to use these facts to give my structure motive. 

# ♦️ ISSUE TICKETS NEEDED FOR CREATION ♦️

> ♦️ Compartmentalization. ♦️ "Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function". You will need an eventListener function, a rednerOnDom function, and organize the rendering of HTML within the main.js file.

> ♦️ Array of Objects Creation ♦️ Create the structure of the objects within the array that will be rendered as cards to the DOM. Create a test set with the needed properties and values. You also need to create test data to make sure the filters are working properly. 

> ♦️ Form Submission Required ♦️ Make sure that the form submission, when creating the HTML, displays an error that requests for you to submit a value. Make the input required. 

> ♦️ Creating HTML Structure and Rendering Dynamically ♦️ A BIG FAT ISSUE TICKET. We need to create the skeleton of the HTML before adding event listeners and following through with compartmentalization.   

> ♦️ Creating event listeners ♦️ Another BIG FAT ISSUE TICKET. Aftter the creation of the HTML structure and the rendering of the buttons, we need to give those buttons functionality using the .filter() function to sort which students are located in which house.
