// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {
//     console.log('I did it! I linked jQuery and this js file!')
//   };

const $wand = document.getElementById("wand");

$("#wand").css("color", "indigo");

const $container = document.getElementById("container");
const $bag = document.getElementById("bag");

const $title = document.getElementById("title");

console.log($container);

console.log($title);

// Removing Wand
document.getElementById("wand").remove();

// Removing butter beer
document.getElementById("bb").remove();

// Addind Wand
$($container).append("<h4 class='wand'>Hawthorn Wand with Dragon Heartstring Core</h4>");
$(".wand").css({"color": "indigo"});

const rat = document.getElementsByClassName("rat");
$(rat).appendTo($container)
$(rat).appendTo($bag)