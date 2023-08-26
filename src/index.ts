import { argValidator } from "./domain/validation";

const userArgs = process.argv;
argValidator(userArgs);
//write the queue to hand off each line of text to the web worker (this may be a shit idea but we shall see)
