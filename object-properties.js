// // object er man print korar niyom 

var computer = {
    model: 'intel corei 5',
    color: 'blue',
    Storage: '1tb',
    RGBLight: '2 pease',
    prosessor: 'msi 3400G',
    motherboard: 'msi',
    Ssd: 'm.2',
    powerbox: 'normal',
    ram: 8,
    rom: 16
};

console.log(computer);












// //  je kono ekta find out korar rules

var computer = {
    model: 'intel corei 5',
    color: 'blue',
    Storage: '1tb',
    RGBLight: '2 pease',
    prosessor: 'msi 3400G',
    motherboard: 'msi',
    Ssd: 'm.2',
    powerbox: 'normal',
    ram: 8,
    rom: 16
};
{
    console.log(computer.color);
}
{
    console.log(computer.Ssd);
}
{
    console.log(computer.Storage);
}






// caile variable hisabeo kora jay ...example ____

var computer = {
    model: 'intel corei 5',
    color: 'blue',
    Storage: '1tb',
    RGBLight: '2 pease',
    prosessor: 'msi 3400G',
    motherboard: 'msi',
    Ssd: 'm.2',
    powerbox: 'normal',
    ram: 8,
    rom: 16,
    price: 160000
};

var computerprise = computer.price;
{
    console.log(computerprise);
}


// caile kono kichur value chabnge kora jay- way-01
var computer = {
    model: 'intel corei 5',
    color: 'blue',
    Storage: '1tb',
    RGBLight: '2 pease',
    prosessor: 'msi 3400G',
    motherboard: 'msi',
    Ssd: 'm.2',
    powerbox: 'normal',
    ram: 8,
    rom: 16,
    price: 160000
};

computer.price = 22000;
{
    console.log(computer);
}



// onno vabe caile kono kichur value chabnge kora jay- way-02



var computer = {
    model: 'intel corei 5',
    color: 'blue',
    Storage: '1tb',
    RGBLight: '2 pease',
    prosessor: 'msi 3400G',
    motherboard: 'msi',
    Ssd: 'm.2',
    powerbox: 'normal',
    ram: 8,
    rom: 16,
    price: 160000
};

computer['price'] = 2000000
{
    console.log(computer);
}









//  finally object change korte 3 ta option lage
// option 01
// _________________________________
// computer.price = 2000000;

// option 02
// _____________________________
// computer["price"] = 230000;

// option 03
// ______________________________
// var priceProperty = "price";
// computer[priceProperty] = 1900000;
