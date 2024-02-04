const readlinkSync = require('readline-sync');
const getHeartbeat = require('./getHeartbeat');
const getReferral = require('./getReferral');
const createAccountETH = require('./getWallet');
const emails = require('email-generator');

(async () => {
  const url = readlinkSync.question('Submit your link: ');
  const emailAddress = emails.generateEmail();
  try {
    getHeartbeat().then((res) => {
      getReferral(
        url,
        res,
        emailAddress.slice(1, emailAddress.length - 1),
        createAccountETH()
      );
    });
  } catch (error) {
    console.log('error in main: ' + error);
  }
})();
