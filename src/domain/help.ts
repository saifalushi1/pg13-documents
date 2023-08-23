export function help(): void {
  console.log(
    "Run the program by passing in the file path and then the rating \n"
  );
  console.log("Example: node dist/index.js ./essay.txt pg-13 y\n");
  console.log(
    "The 3 expected arguments are filePath, rating, and should generate new file \n"
  );
  console.log("Accepted file types are: txt, docx, doc, pdf\n");
  console.log(
    "Accepted document ratings are: pg, pg-13, R, rr(russian roulette)\n"
  );
  console.log("Accepted new file arguments are: y, n\n");
  return;
}
