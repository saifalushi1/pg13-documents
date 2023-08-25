import { argValidator } from "./domain/validation";

const userArgs = process.argv;
argValidator(userArgs);
