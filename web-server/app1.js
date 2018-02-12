
var csv = require('csv'); 


    
    var obj = csv();
    
    function MyCSV(Fone, Ftwo) {
    
        this.FieldOne = Fone;
    
        this.FieldTwo = Ftwo;

    
    }; 
    
    var MyData = []; 
    
    
    obj.from.path('D:\myrecod.csv').to.array(function (data) {

        for (var index = 0; index < data.length; index++) {
           
            MyData.push(new MyCSV(data[index][0], data[index][1]));
    
        }
        console.log(MyData);
});

