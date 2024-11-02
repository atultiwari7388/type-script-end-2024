// //primitive types

// let a = 12; //number
// let b = true; //boolean
// let c = "Moti"; //string

// console.log(c);

// let arr = []; //blank array
// const abc = [1, 2, 3, 4]; //fill array

// //tuples
// let data: [number, string] = [89, "Moti"];

// //enums

// enum UserData {
//   ADMIN = "admin",
//   GUEST = "guest",
//   SUPER_ADMIN = "super_admin",
// }

// enum StatusCode {
//   ABANDONED = "kalua kalua kalua 500",
//   NOT_FOUND = "404 not_found",
// }

// StatusCode.NOT_FOUND;

// //any , unknown
// // let d;

// // let a: unknown;
// // a = 12;
// // a = "Moti";

// let z: unknown;

// z = 12;
// z = "Moti";

// if (typeof z == "string") z.toUpperCase();

// //void
// function xyz(): void {
//   console.log("Your name is Kalua");
// }

// //never
// function zyx(): never {
//   while (true) {}
// }

// zyx();
// console.log("hello");

// function data(a: number, b: string): void {
//   a = 12;
//   b = "Kalua";
// }

// console.log(data);

//Interface and type alias

//lets create interface for obj

// interface UserData {
//   name: string;
//   email: string;
//   pass: string;
//   gender?: string; //optional
// }

// function getUserOfData(obj: UserData) {}

// getUserOfData({
//   name: "Dimple",
//   email: "dimple@gmail.com",
//   pass: "dimple@123",
// });

// Extending Interfaces

// interface Admin extends UserData {
//   admin: boolean;
// }

// function loginAdmin(obj: Admin) {
//   obj.admin;
// }

//type alias

// type value = string | number | null;

// let a: value;

// function abcd(obj: value) {}
// abcd("Kalua");

//Classes and Objects

// class Device {
//   name = "Lg";
//   price = 12000;
//   cat = "digital";
// }

// let d1 = new Device();

// //constructor

// class BottleMaker {
//   constructor(
//     public brand: string,
//     public price: number,
//     public color: string,
//     public material: string
//   ) {}
// }

// let b1 = new BottleMaker("Milton", 1200, "yellow", "metal");
// let b2 = new BottleMaker("Cello", 500, "white", "silver");

// //this keyboard
// class ABCD {
//   name = "Dimple";

//   changeName() {
//     this.name = "Moti";
//     console.log(this.name);
//   }
// }

//Access modifier , public , private

// class BottleMaker {
//   constructor(private name: string) {
//     this.name = name;
//   }

//   changeBottleName() {
//     this.name = "Kalua";
//   }
// }

// let b1 = new BottleMaker("Milton");
// b1.changeBottleName();

class BottleMaker {
  public kalua: string = "kalua";
  constructor(public name: string) {}
}

class MetalBottleMaker extends BottleMaker {
  constructor(name: string) {
    super(name);
  }

  getValue() {
    console.log(this.name, this.kalua);
  }
}

let b1 = new MetalBottleMaker("Chilton");
b1.getValue();
