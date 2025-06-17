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



const res = arr.map((val,ind,x)=>{
    return val.Name + " " + ind + " " + x[ind].age
});
console.log(res);