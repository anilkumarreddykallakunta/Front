const arr = [
        {
        Name:"Sandeep",
        age:27
    },    {
        Name:"Akshay",
        age:26
    },    {
        Name:"Mahesh",
        age:18
    },
]

const result = arr.map(function(a,b){
    return a.Name  + ' ' + b
})
console.log(result);