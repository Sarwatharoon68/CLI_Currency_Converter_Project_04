import inquirer from "inquirer";

let currencyConvertion = {
  "pkr":{
    "usd": 0.0036,
    "gbp": 0.0028,
    "pkr": 1,
    "riyal":0.013,
    "euro":0.0034,
  },
   "gbp":{
    "usd": 1.26,
    "gbp": 1,
    "pkr": 350.76,
    "riyal":4.63,
    "euro":1.16,
   },
   "usd":{
    "usd": 1,
    "gbp": 0.79,
    "pkr": 277.54,
    "riyal":3.75,
    "euro":0.94,
   },
   "riyal":{
    "usd":0.27 ,
    "gbp": 0.22,
    "pkr": 74.14,
    "riyal":1,
    "euro":0.25,
   },
   "euro":{
    "usd":1.06,
    "gbp": 0.86,
    "pkr": 296.10,
    "riyal":3.99,
    "euro":1,
   }
};
  const answer :{
      from: "pkr" | "usd" | "gbp" | "riyal" | "euro",
      to:   "pkr" | "usd" | "gbp" | "riyal" | "euro",
      amount: number,
  } = await inquirer.prompt([{
    "type": "list",
    "name": "from",
    "message": "Please Select Your Currency",
    "choices":["pkr","usd","gbp","riyal","euro"],
  },
  {
    "type": "list",
    "name": "to",
    "message": "Please Select Your Converstion rate",
    "choices":["pkr","usd","gbp","riyal","euro"],
  },
  {
    "type": "input",
    "name": "amount",
    "message": "Please enter your amount you want to convert",
  },
]);

const {from, to, amount} = answer;

if(from && to && amount){
  let result = currencyConvertion[from][to] * amount;
  console.log(`You conversion from ${from} to ${to} is ${result}`);
}else{
  console.log(`Invalid conversion`);
}
