//timer to beep when user inputs seconds into terminal

const args = process.argv.slice(2);

let sortNumbers = function(a,b) {
  return a - b;
};

const argsSorted = args.sort(sortNumbers);


for (let alarm of argsSorted) {
  if ((Number(alarm)) > 0) {
    let num = ((Number(alarm)) * 1000);
    setTimeout(() => {
      process.stdout.write('\x07');
    } , num);
  }
}