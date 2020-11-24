// Accordion for FAQ

// ~> Gets a list of all elements with a 'question' class
const accordion = document.querySelectorAll('.question');


for (let  item = 0; item <= accordion.length; item++) {
    // ~> Loops through the array and adds an event listener to
    // each item when it is clicked

    accordion[item].addEventListener('click', function() {
        // ~> On click, the current item gets the active
        // class on each items if it is present or not.
        this.classList.toggle('question--active');

        // ~> The answer section is immediately after the question
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            /* ~> The syle of the answer section is the condition
             Note 'null' is used instead of '0'. This is because
             JS be rendering inline styles and then the inline style
             which is mist prioritized would set the height permanently
             as 0 and then would not be able to be overriden after the
             first successful attempt. */

            answer.style.maxHeight = null;
        } else {
            let active  = document.querySelectorAll('.question.question--active');
            for (let j = 0; j < active.length; j++) {
                active[j].classList.remove("question--active");
                active[j].nextElementSibling.style.maxHeight = null;
            }
            
            // ~> Scroll Height is used so a smooth transition 
            // effect can be achieved.            

            // Toggles the active class on the current item
            this.classList.toggle("question--active");
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
}