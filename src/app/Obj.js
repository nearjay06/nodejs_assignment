
    const Person ={
        Name:'james',
        Birthyear:'1967',
        Age: function getAge(){

            let today = new Date();
            let todayYear = today.getFullYear();
            let Age = todayYear - this.Birthyear
            return Age;
        }};

console.log(Person)
export {Person} 