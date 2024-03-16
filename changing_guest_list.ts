let guests_list:string[] = ['Tasmia', 'Huzaifa', 'Madiha']
guests_list.forEach (guests => {
    console.log(`Hi ${guests}, Hope you're doing awesome! Join me for my birthday bash on May 9th and bring along a gift to make it even more special!`)
})

let unableToJoin = "Madiha";
console.log(`${unableToJoin} can't join my birthday`);

let newGuest ="Simrah";
guests_list[guests_list.indexOf(unableToJoin)] = newGuest ; 

guests_list.forEach(guests => {
    console.log(`Hi ${guests} Hey, hope you're doing awesome! Join me for my birthday bash on May 9th and bring along a gift to make it even more special!`)
})