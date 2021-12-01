(function(){
  $(document).ready(initialize)

  function initialize(){
    //This is how you type a comment in Javascript
    $("#submit").click(save)
    function save(){
      var firstname = $("#fname").val()
      console.log(firstname)
      var lastname = $("#lname").val()
      console.log(lastname)
    }
  }
})();
