(function(){
  $(document).ready(initialize)

  function initialize(){
    //This is how you type a comment in Javascript
    $("#submit").click(save)
    function save(){
      var zipcode = $("#ZipCode").val()
      console.log(zipcode)
      var device = $("#device").val()
      console.log(device)
    }
  }
})();
