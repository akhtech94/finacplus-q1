function specialCipher([...string], rotationNumber) {
  let currentCharacter = '';
  let count = 1;
  let encryptedString = '';

  let encryptedStringArray = string.map(character => character.charCodeAt() + rotationNumber );
  encryptedStringArray = [...String.fromCharCode(...encryptedStringArray)];

  for (const character of encryptedStringArray) {
    if(currentCharacter == character) {
      count++;
    } else {
      encryptedString = count != 1 ? encryptedString + currentCharacter + count : encryptedString + currentCharacter
      currentCharacter = character;
      count = 1;
    }
  }
  
  encryptedString = count != 1 ? encryptedString + currentCharacter + count : encryptedString + currentCharacter
  console.log(encryptedString);
}

specialCipher('AABCCC', 3);