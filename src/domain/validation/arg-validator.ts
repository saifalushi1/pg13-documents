import { fileArgValidator } from "./file-arg-validator";
import { help } from "./help";

interface ValidateSucess {
    status: "success";
    shouldExit: boolean;
}

interface ValidateFailure {
    status: "failure";
    shouldExit: boolean;
    message?: string;
}
export type ValidateResult = ValidateSucess | ValidateFailure;

export function argValidator(args: string[]) {
    const helpArg = "-h";
    const documentRatingArg = ["pg", "pg-13", "r", "rr"];
    const createNewDocumentArg = ["y", "n"];
    //call filePathValidator which will validate the file exists and is a acceptable file type
    const firstArgValidation = firstArgValidator(args[2], helpArg);
    if (firstArgValidation.shouldExit === true) {
        if (firstArgValidation.status === "failure") {
            console.log(`${firstArgValidation.message}\n` || "\n");
        }
        return;
    }
    const secondArgValidation = listArgValidator(args[3], documentRatingArg);
    if (secondArgValidation.shouldExit === true) {
        console.log("failing second");
        return;
    }
    const thirdArgValidation = listArgValidator(args[4], createNewDocumentArg);
    if (thirdArgValidation.shouldExit === true) {
        console.log("failing third");
        return;
    }
}

function firstArgValidator(arg: string, helpArg: string): ValidateResult {
    if (arg === helpArg) {
        help();
        return { status: "success", shouldExit: true };
    } else {
        return fileArgValidator(arg);
    }
}
function listArgValidator(
    arg: string,
    listOfValidArgs: string[],
): ValidateResult {
    if (!listOfValidArgs.some((val) => val === arg)) {
        help();
        return {
            shouldExit: true,
            status: "success",
        };
    }
    return {
        shouldExit: false,
        status: "success",
    };
}
