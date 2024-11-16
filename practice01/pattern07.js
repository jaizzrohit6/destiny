class Animal{
    constructor(name,sound){
        this.name = name 
        this.sound = sound
    }

    makesSound(){
        //console.log(this.name + "  says  " + this.sound)
        console.log(`${this.name}  says  ${this.sound}`)
    }
}


class Dog extends Animal{
    constructor(name){
        super(name,'barkk')
    }
}


let myDog = new Dog("puppy")

myDog.makesSound()