// const isBank = (obj: any): obj is Bank => {
//   return (
//     obj.id !== undefined &&
//     obj.uid !== undefined &&
//     obj.account_number !== undefined &&
//     obj.iban !== undefined &&
//     obj.bank_name !== undefined &&
//     obj.routing_number !== undefined &&
//     obj.swift_bic !== undefined
//   );
// };

// Using the in operator
const isBank = (obj: any): boolean => {
  return (
    "id" in obj &&
    "uid" in obj &&
    "account_number" in obj &&
    "iban" in obj &&
    "bank_name" in obj &&
    "routing_number" in obj &&
    "swift_bic" in obj
  );
};

console.log(
  isBank({
    id: 1,
    uid: "uid",
    account_number: "account_number",
    iban: "iban",
    bank_name: "bank_name",
    routing_number: "routing_number",
    swift_bic: "swift_bic",
    src: {},
  })
);
