// Year 1
const $container = $('#container');
console.log($container);
const $h1 = $('<h1></h1>');
$h1.text('Hogwarts');
$container.append($h1);

// Year 2
const $name = $('<h2>James</h2>');
$container.append($name);
const $house = $('<h3>Slytherin</h3>');
$container.append($house);
const $rat = $('<h4 class="rat">Rattata</h4>');
$container.append($rat);
const $wand = $('<h4>Birch Wand with Phoenix Feather Core</h4>');
$container.append($wand);

// Year 3
const $ul = $('<ul storage="trunk"></ul>');

const $bb = $('<li>butter beer</li>')
$ul.append($bb);
const $ic = $('<li class="secret">invisibility cloak</li>');
$ul.append($ic);
const $mm = $('<li class="secret">magic map</li>');
$ul.append($mm);
const $tt = $('<li class="secret">time turner</li>');
$ul.append($tt);
const $leash = $('<li class="rat">leash</li>');
$ul.append($leash);
const $beans = $("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>");
$ul.append($beans);

$container.append($ul);

// Year 4
const $title = $('<h5>Spring 2017</h5>');
$container.append($title)
const $table = $('<table><thead><tr><th>Day</th><th>Classes</th></tr><tr><td>Monday</td><td>History of Magic</td></tr><tr><td>Tuesday</td><td>Potions</td></tr><tr><td>Wednesday</td><td>Quidditch Practice</td></tr><tr><td>Thursday</td><td>Transfiguration</td></tr><tr><td>Friday</td><td>Defense Against the Dark Arts</td></tr><tr><td>Saturday</td><td>Herbology</td></tr><tr><td>Sunday</td><td>Divination</td></tr></thead></table>');
$container.append($table);

// Year 5
$wand.remove();
$bb.remove();
$wand.insertAfter($rat);

$wand.css('color', 'indigo');

$rat.insertAfter($container);
$rat.insertAfter($house);

// Year 6
$('.secret').hide().delay(2000).show('slow');
$leash.addClass('cabbage');
$leash.removeClass('cabbage');

// Year 7
$title.text('Fall 2018');
$ul.prepend('<li>butter beer</li>');
$ul.removeAttr('storage');
$ul.attr('storage', 'chest');
const $potter = $('<img src="https://s3.amazonaws.com/freebiesupply/thumbs/2x/harry-potter-logo.png">');
$potter.insertBefore($h1);