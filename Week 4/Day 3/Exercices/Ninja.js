class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}
class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}
const pet = new Flamingo();


// Expected output:
// I'm pink. 🌸
// I'm a bird. 🦢

//Execution Flow
//1️ When new Flamingo() is called, it triggers the constructor of the Flamingo class. 
// 2️ Inside Flamingo’s constructor, "I'm pink. 🌸" is printed first. 
// 3 Then super(); is executed, calling the constructor of the parent Bird class. 
// 4️ The Bird constructor prints "I'm a bird. 🦢". 5️⃣ The object pet is successfully created.