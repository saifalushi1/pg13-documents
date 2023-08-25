import fs from "fs";
import { ValidateResult } from "./arg-validator";

export function fileArgValidator(filePath: string): ValidateResult {
    const validFileTypes = ["txt", "pdf", "doc", "docx"];
    const splitPath = filePath.split(".");
    const isValid = validFileTypes.some((val) => {
        splitPath[splitPath.length - 1] === val;
    });
    const fileExists = fs.existsSync(filePath);

    if (isValid === true && fileExists === true) {
        return {
            status: "success",
            shouldExit: false,
        };
    }

    return {
        status: "failure",
        shouldExit: true,
        message: fileExists === false ? "file does not exist" : "",
    };
}
