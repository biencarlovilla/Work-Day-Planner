$(document).ready(function() {
    setInterval(function() {
      $("#Date").text(moment().format("YYYY MMMM DD") + " " + moment().format("dddd").substring(0, 3).toUpperCase());
      $("#Time").text(moment().format("hh:mm:ss A"));
    }, 100);
})

var hourNine = localStorage.getItem("hourNine");
    document.querySelector("#nineInput")
    $("#nineButton").on("click", function sethourNine() {
    localStorage.setItem("hourNine",JSON.stringify($("#nineInput").text()));

    });

    $("#nineInput").text(JSON.parse(hourNine));

var hourTen = localStorage.getItem("hourTen");
    document.querySelector("#tenInput")
    $("#tenButton").on("click", function sethourTen() {
    localStorage.setItem("hourTen",JSON.stringify($("#tenInput").text()));

    });

    $("#tenInput").text(JSON.parse(hourTen));

var hourEleven = localStorage.getItem("hourEleven");
    document.querySelector("#elevenInput")
    $("#elevenButton").on("click", function sethourEleven() {
    localStorage.setItem("hourEleven",JSON.stringify($("#elevenInput").text()));

    });

    $("#elevenInput").text(JSON.parse(hourEleven));

var hourTwelve = localStorage.getItem("hourTwelve");
    document.querySelector("#twelveInput")
    $("#twelveButton").on("click", function sethourTwelve() {
    localStorage.setItem("hourTwelve",JSON.stringify($("#twelveInput").text()));

    });

    $("#twelveInput").text(JSON.parse(hourTwelve));

var hourOne = localStorage.getItem("hourOne");
    document.querySelector("#oneInput")
    $("#oneButton").on("click", function sethourOne() {
    localStorage.setItem("hourOne",JSON.stringify($("#oneInput").text()));

    });

    $("#oneInput").text(JSON.parse(hourOne));

var hourTwo = localStorage.getItem("hourTwo");
    document.querySelector("#twoInput")
    $("#twoButton").on("click", function sethourTwo() {
    localStorage.setItem("hourTwo",JSON.stringify($("#twoInput").text()));

    });

    $("#twoInput").text(JSON.parse(hourTwo));

var hourThree = localStorage.getItem("hourThree");
    document.querySelector("#threeInput")
    $("#threeButton").on("click", function sethourThree() {
    localStorage.setItem("hourThree",JSON.stringify($("#threeInput").text()));

    });

    $("#threeInput").text(JSON.parse(hourThree));

var hourFour = localStorage.getItem("hourFour");
    document.querySelector("#fourInput")
    $("#fourButton").on("click", function sethourFour() {
    localStorage.setItem("hourFour",JSON.stringify($("#fourInput").text()));

    });

    $("#fourInput").text(JSON.parse(hourFour));

var hourFive = localStorage.getItem("hourFive");
    document.querySelector("#fiveInput")
    $("#fiveButton").on("click", function sethourFive() {
    localStorage.setItem("hourFive",JSON.stringify($("#fiveInput").text()));

    });

    $("#fiveInput").text(JSON.parse(hourFive));

