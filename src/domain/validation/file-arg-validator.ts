import fs from "fs";
import { ValidateResult } from "./arg-validator";
import { help } from "./help";

export function fileArgValidator(filePath: string): ValidateResult {
    if (filePath === undefined) {
        help();
        return {
            shouldExit: true,
            status: "failure",
        };
    }
    const validFileTypes = ["txt", "pdf", "doc", "docx"];
    const splitPath = filePath.split(".");
    const isValid = validFileTypes.some((val) => {
        return splitPath[splitPath.length - 1] === val;
    });
    const fileExists = fs.existsSync(filePath);
    if (isValid === true && fileExists === true) {
        return {
            status: "success",
            shouldExit: false,
        };
    }
    const message = createErrorMessage(isValid, fileExists);
    help();
    return {
        status: "failure",
        shouldExit: true,
        message,
    };
}

function createErrorMessage(
    isValid: boolean,
    fileExists: boolean,
): string | undefined {
    if (!fileExists) {
        return "File does not exist";
    } else if (!isValid) {
        return "File type is invalid";
    }
}
