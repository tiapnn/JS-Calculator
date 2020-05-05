

function displayNum(num) {
  var currNum = $('#display').html();
    if (currNum == "0") {
      $('#display').html(num);
    } else {
      $('#display').html(currNum + num);
    }
}

function uguale() {
  var currNum = $('#display').html();
  $('#display').html(parseFloat(eval(currNum).toFixed(5)));
}

function clean() {
  $('#display').html("0");
}

function zero() {
  var currNum = $('#display').html();
  if (currNum == 0) {
    $('#display').html("0.");
  } else {
    var currNum = $('#display').html();
    $('#display').html(currNum + 0);
  }
  
}

function punto(num) {
  var currNum = $('#display').html();
  var stringSplit = currNum.split(/[/*+-]/);
  var lastValString = stringSplit[stringSplit.length - 1];
  var testRegex = /\D/;
  if (testRegex.test(lastValString)) {
    $('#display').toggleClass("shaky");
  } else {
    if (currNum == "0") {
      $('#display').html(num);
    } else {
      $('#display').html(currNum + num);
    }
  }
  
}

function segni(num) {
  var currNum = $('#display').html();
  var lastValString = currNum.charAt(currNum.length-1);
  var penlastValString = currNum.charAt(currNum.length-2);
  var testRegex = /\D/;
  if (testRegex.test(lastValString) && lastValString != '-') {
    $('#display').html(currNum.slice(0, -1)  + num);
  } else if (testRegex.test(lastValString) && lastValString == '-' && !testRegex.test(penlastValString)) {
    $('#display').toggleClass("shaky");
  } else if (testRegex.test(lastValString) && lastValString == '-' && testRegex.test(penlastValString)) {
    $('#display').html(currNum.slice(0, -2)  + num);
  } else {
    if (currNum == "0") {
      $('#display').html(num);
    } else {
      $('#display').html(currNum + num);
    }
  }

}

function segnoMeno(num) {
  var currNum = $('#display').html();
  var lastValString = currNum.charAt(currNum.length-1);
  var testRegex = /\D/;
  if (testRegex.test(lastValString) && lastValString == '-') {
    $('#display').toggleClass("shaky");
  } else {
    if (currNum == "0") {
      $('#display').html(num);
    } else {
      $('#display').html(currNum + num);
    }
  }

}

















//for later use

// var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

// var color = Math.floor(Math.random() * colors.length);
  
// $("html body").animate(
//   {
//     backgroundColor: colors[color],
//     color: colors[color]
//   },
//   1000
// );

// $(".button").animate(
//   {
//     backgroundColor: colors[color]
//   },
//   1000
// );