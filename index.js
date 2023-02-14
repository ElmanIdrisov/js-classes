/* class ElementService {
    target = null;

    constructor(target) {
        this.target = target;
    }

    changeImage(selector, link){
        const imageElement = this.target.querySelector(selector);
        imageElement.setAttribute('src', link)
    }
}

const product = document.querySelector('.product');
let elementService = null;

if(product){
     elementService = new ElementService(product);
}

const button = document.querySelector('.change-btn');

button.addEventListener('click', ()=>{
    elementService.changeImage('.image', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QAajHxVDke14LWOB8kwYt1IHTkvPNa__8OHEjrD31hNBCzvV7inRDvfWmRFJReIBNYw&usqp=CAU' )
}) */

class Student{
    firstName = 'First Name';
    lastName = 'Last Name';
    grades = []; 
    
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this,this.lastName}`
    }

    addGrade(grade){
        this.grades.push(grade)
    }

    calcGrades(){
        let total = 0;
        this.grades.forEach((grade) =>{
            total = total + grade;
        })
        return total / this.grades.length;
    }

}

const studenOne = new Student('Alex', 'Stepanov');
studenOne.addGrade(95);
studenOne.addGrade(85);
studenOne.addGrade(73);
studenOne.addGrade(94);
studenOne.addGrade(65);
studenOne.addGrade(78);


console.group();
console.log('studenOne',studenOne.fullName);
console.log('studenOne grades', studenOne.grades);
console.log('studenOne calcgrades', studenOne.calcGrades());
console.groupEnd();