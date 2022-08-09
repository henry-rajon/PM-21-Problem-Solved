// Problem - 4

// প্রশ্ন ঃ বার্ষিক 5 % হারে 10000 টাকার 2  বছরের চক্রবৃদ্ধি সুদ কত টাকা ?

// আমরা জানি, সুদ-আসল = P(1 + r/100)^t
// সুদ-আসল = আসল + চক্রবৃদ্ধি সুদ
// অতএব,
// সুদ-আসল = 10000(1 +5/100)^2
// সুদ-আসল = 11025
// চক্রবৃদ্ধি সুদ = 11025 - 10000 = 1025

// const asset1 = 10000;
// const intersetRate1 = 5;
// const year1 = 2;
// const result = 1 + intersetRate1 / 100;
// const interestPrincipal1 = asset1 * Math.pow(result, year1);
// const compoundInterest = interestPrincipal1 - asset1;
// console.log("Compound Interest: ", compoundInterest);



// const asset1 = 10000;
// const intersetRate1 = 5;
// const year1 = 2;
// const interestPrincipal1 = asset1 * Math.pow(1 + intersetRate1 / 100, year1);
// const compoundInterest = interestPrincipal1 - asset1;
// console.log("Compound Interest: ", compoundInterest);