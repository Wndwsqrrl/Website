(function(){
   $(document).ready(initialize)

   function initialize(){
     console.log('This is javascript!!!!!1!!!!!')

     $("#submit").click(save)

    function save(){
     // console.log('you are here')
    var firstname = $("#fname").val()
    var lastname = $('#lname').val()
    console.log(firstname)
    console.log(lastname)
    $("#results").append(firstname + " " + lastname)

    }



   }

})();
