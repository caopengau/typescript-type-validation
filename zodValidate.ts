import { z } from "zod";
const BankZModel = z.object({
  id: z.number(),
  uid: z.string(),
  account_number: z.string(),
  iban: z.string(),
  bank_name: z.string(),
  routing_number: z.string(),
  swift_bic: z.string(),
});

type Bank = z.infer<typeof BankZModel>;

console.log(
  BankZModel.parse({
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

