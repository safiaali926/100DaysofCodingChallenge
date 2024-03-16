var guests_list = ['Tasmia', 'Huzaifa', 'Madiha'];
guests_list.forEach(function (guests) {
    console.log("Hi ".concat(guests, ", Hope you're doing awesome! Join me for my birthday bash on May 9th and bring along a gift to make it even more special!"));
});
var unableToJoin = "Madiha";
console.log("".concat(unableToJoin, " can't join my birthday"));
var newGuest = "Simrah";
guests_list[guests_list.indexOf(unableToJoin)] = newGuest;
guests_list.forEach(function (guests) {
    console.log("Hi ".concat(guests, " Hey, hope you're doing awesome! Join me for my birthday bash on May 9th and bring along a gift to make it even more special!"));
});
