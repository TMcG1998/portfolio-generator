const profileDataArgs = process.argv.slice(2, process.argv.length);
const myArr = ["hello", "there", "dude"];

// printProfileData is function name, profileDataArr is name of input to function
// forEach says do for loop on each item, profileItem is the name of each item at an index, and after the arrow is what we do with that profileItem 
const printProfileData = profileDataArr => profileDataArr.forEach(profileItem => console.log(profileItem));
  
printProfileData(profileDataArgs);