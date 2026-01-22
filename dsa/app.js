const people = [
  { name: "Ali", number: 1 },
  { name: "Ahmed", number: 2 },
  { name: "Usman", number: 3 },
  { name: "Hassan", number: 4 },
  { name: "Hussain", number: 5 },
  { name: "Bilal", number: 6 },
  { name: "Hamza", number: 7 },
  { name: "Saad", number: 8 },
  { name: "Fahad", number: 9 },
  { name: "Ayan", number: 10 },

  { name: "Zain", number: 11 },
  { name: "Umer", number: 12 },
  { name: "Danish", number: 13 },
  { name: "Shahzaib", number: 14 },
  { name: "Rehan", number: 15 },
  { name: "Imran", number: 16 },
  { name: "Irfan", number: 17 },
  { name: "Kamran", number: 18 },
  { name: "Salman", number: 19 },
  { name: "Asad", number: 20 },

  { name: "Noman", number: 21 },
  { name: "Arslan", number: 22 },
  { name: "Sameer", number: 23 },
  { name: "Adeel", number: 24 },
  { name: "Tariq", number: 25 },
  { name: "Waqas", number: 26 },
  { name: "Junaid", number: 27 },
  { name: "Rizwan", number: 28 },
  { name: "Shoaib", number: 29 },
  { name: "Yasir", number: 30 },

  { name: "Adnan", number: 31 },
  { name: "Farhan", number: 32 },
  { name: "Zubair", number: 33 },
  { name: "Nouman", number: 34 },
  { name: "Muneeb", number: 35 },
  { name: "Talha", number: 36 },
  { name: "Kashif", number: 37 },
  { name: "Ahsan", number: 38 },
  { name: "Rauf", number: 39 },
  { name: "Ibrahim", number: 40 },

  { name: "Moiz", number: 41 },
  { name: "Anas", number: 42 },
  { name: "Huzaifa", number: 43 },
  { name: "Mustafa", number: 44 },
  { name: "Basit", number: 45 },
  { name: "Shayan", number: 46 },
  { name: "Affan", number: 47 },
  { name: "Hasnain", number: 48 },
  { name: "Rayan", number: 49 },
  { name: "Azhar", number: 50 },

  { name: "Abrar", number: 51 },
  { name: "Sami", number: 52 },
  { name: "Faizan", number: 53 },
  { name: "Ammar", number: 54 },
  { name: "Ehsan", number: 55 },
  { name: "Shahid", number: 56 },
  { name: "Naveed", number: 57 },
  { name: "Waqar", number: 58 },
  { name: "Furqan", number: 59 },
  { name: "Haris", number: 60 },

  { name: "Arham", number: 61 },
  { name: "Rashid", number: 62 },
  { name: "Sajid", number: 63 },
  { name: "Majid", number: 64 },
  { name: "Qasim", number: 65 },
  { name: "Umair", number: 66 },
  { name: "Zeeshan", number: 67 },
  { name: "Khalid", number: 68 },
  { name: "Latif", number: 69 },
  { name: "Naseer", number: 70 },

  { name: "Hamid", number: 71 },
  { name: "Shakir", number: 72 },
  { name: "Rameez", number: 73 },
  { name: "Sufyan", number: 74 },
  { name: "Zahid", number: 75 },
  { name: "Jibran", number: 76 },
  { name: "Nadeem", number: 77 },
  { name: "Aqib", number: 78 },
  { name: "Hammad", number: 79 },
  { name: "Usaid", number: 80 },

  { name: "Sheryar", number: 81 },
  { name: "Areeb", number: 82 },
  { name: "Muzammil", number: 83 },
  { name: "Salaar", number: 84 },
  { name: "Aatif", number: 85 },
  { name: "Zarar", number: 86 },
  { name: "Afaq", number: 87 },
  { name: "Rizvi", number: 88 },
  { name: "Taha", number: 89 },
  { name: "Sameer Ali", number: 90 },

  { name: "Saqlain", number: 91 },
  { name: "Faisal", number: 92 },
  { name: "Shahbaz", number: 93 },
  { name: "Arif", number: 94 },
  { name: "Jawad", number: 95 },
  { name: "Noman Ali", number: 96 },
  { name: "Kamil", number: 97 },
  { name: "Yousuf", number: 98 },
  { name: "Ilyas", number: 99 },
  { name: "Zaki", number: 100 },
];

// const colors = ["red", "blue", "green", "yellow"];

// for (let i = 0; i < people.length; i++) {
//   console.log("start with ==>", people[i].number.toString().startsWith("2"));

//   // if(people[i].number)

//   console.log("m ==>", i % 2 === 0);
//   if (i % 2 === 0) {
//     people[i].color = "red";
//   } else {
//     people[i].color = "yellow";
//   }
// }

// console.log(people);

let count = 1

for (let i = 0; i < people.length; i++) {
  if (count > 4) {
    count = 1
  }
  if (count == 1) {
    people[i].color = "red"
    count = 2 
    continue
  }
  if (count == 2) {
    people[i].color = "green"
    count = 3
    continue
  }if (count == 3) {
    people[i].color = "yello"
    count = 4
    continue
  }if (count == 4) {
    people[i].color = "blue"
    count = 5
    continue
  } 
}
console.log(people);
