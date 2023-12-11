function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = {
  dropdown: 'English',
  sageID: Math.floor(Math.random() * 100),
  interlocutor: "Pyrescom" + generateRandomString(5), 
  country: 'India',
  city: 'Indore',
  address: 'DLF Garden City',
  postalCode: '452001',
  enterClient: 'ClassAir' + new Date().getMilliseconds(),
};
