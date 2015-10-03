/**
     * Javascript/jQuery Exercises: Selecting Things In The DOM!
     * Answer the following questions.
     */

    /**
     * Question 1:
     * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
     */

     /*Click button 1
     select all paragrpahs
     change the color to blue*/

     function turnBlue() {
        $('p').css('color','blue');
     }

     $('#button1').on('click',turnBlue);


    /**
     * Question 2:
     * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.


     Click button 1
    select all h2 elements and change the text to say your name 

 

     */
   
    function changeText() {
        $('h2').html('Crissy');
    }

    $('#button1').on('click', changeText);


    /**
     * Question 3:
     * When button 1 is clicked, select the ordered list item that has the class "falseFact".
     * Using jQuery change the content to read "True Fact".
     */

     function selectList() {
        $('li.falseFact').html('True Fact');
     }

     $('#button1').on('click', selectList);

    /**
     * Question 4:
     * When button 2 is clicked, change the background color of the whole page to "pink"
     */

     function changeColor() {
        $('body').css('background-color', 'pink');
     }
        $('#button2').on('click', changeColor);
    
    /**
     * Question 5:
     * When button 2 is clicked, change the color of all h2's to "green"
     */

    /*function changeGreen() {
        $('h2').css('color', 'green');
     }
        $('#button2').on('click', changeGreen);


    /**
     * Question 6:
     * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
     */

    /*function changeBlockquote() {
        $('html').blockquotes('"<span>no quote</span>'");
     }
        $('#button2').on('click'), changeBlockquote);
    /**
     * Question 7:
     * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
     */

     /*function changeNinja() {
        $('h1').header('jQuery Ninja');
     }
        $('#button3').on('click'), changeNinja); 


    /**
     * Question 8:
     * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened.
     * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
     */



    /**
     * Question 9:
     * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
     * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
     */

      function changeAllthings(){
      $('p').html('color', 'blue'),
      ('font', 'Georgia')
      }
      
