var csv= require('csv');

var obj=csv();

var datainfo=[
    ['101', 'MS', 100000],
    ['102', 'LS', 80000],
    ['103', 'TS', 60000],
    ['104', 'VB', 200000],
    ['105', 'PB', 180000],
    ['108', 'AB', 160000],
    ['109', 'AB', 160000],
    
];

obj.from.array(datainfo).to.path('myrecord.csv');