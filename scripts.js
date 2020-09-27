$(document).ready(function() {
    setInterval(function() {
      $("#Date").text(moment().format("YYYY MMMM DD") + " " + moment().format("dddd").substring(0, 3).toUpperCase());
      $("#Time").text(moment().format("hh:mm:ss A"));
    }, 100);
})