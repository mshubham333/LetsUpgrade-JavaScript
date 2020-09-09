var array = [{name: "Shubham",
age: 24,
country : "India",
hobbies : ["playing Cricket", "playing Chess", "watching Movies", "bike Riding", "travelling to Hill Station"] },
{name: "Nirbhav",
age: 25,
country : "Japan",
hobbies : ["playing Cricket", "playing Chess", "watching Movies", "bike Riding", "travelling to Hill Station"] },
{name: "Utkarsh",
age: 34,
country : "Canada",
hobbies : ["playing Cricket", "playing Chess", "watching Movies", "bike Riding", "travelling to Hill Station"] },
{name: "Kapil",
age: 32,
country : "Australia",
hobbies : ["playing Cricket", "playing Chess", "watching Movies", "bike Riding", "travelling to Hill Station"] },
{name: "Aman",
age: 30,
country : "Russia",
hobbies : ["playing Cricket", "playing Chess", "watching Movies", "bike Riding", "travelling to Hill Station"] },
];
  // function to console the objects having age is less than 30.
function ageCheker(){
    for(var i=0 ; i<array.length; i++){
        if(array[i].age <30 ){ 
        console.log(array[i]);
        }
    }
}
ageCheker();
  // function to console the objects having country is India.
function countryCheker(){
    array.forEach(element => {
        if(element.country==="India")
        console.log(element);
    });
}
countryCheker();