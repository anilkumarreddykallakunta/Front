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



const res = arr.map((val,ind)=>{
    return val.Name + " " + ind
});
console.log(res);