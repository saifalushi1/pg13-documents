import { argValidator } from "./domain/arg-validator";

const userArgs = process.argv;
argValidator(userArgs);
