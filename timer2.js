const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
 
  // The user can press b and it should beep right away
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // The user can input any number from 1 to 9 and it should immediately output "setting timer for x seconds...", and
  // beep after that number of seconds has passed
  if (key > 0 && key < 9) {
    console.log(`setting time for ${key} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }

  // The user can use ctrl + c to exit the program
  if (key === '\u0003') {
    console.log("Thanks for using me, Ciao!");
    process.exit();
  }
});

