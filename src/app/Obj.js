
    const Person ={
        Name:'Lila',
        Birthyear:'1997',
        Age: function getAge(){

            let today = new Date();
            let todayYear = today.getFullYear();
            let Age = todayYear - this.Birthyear;
            
            return Age;
        }};

    console.log(Person)
    export {Person} 