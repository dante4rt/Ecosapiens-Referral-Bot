require('colors');
const readlinkSync = require('readline-sync');
const getHeartbeat = require('./getHeartbeat');
const getReferral = require('./getReferral');
const createAccountETH = require('./getWallet');
const emails = require('email-generator');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const url = readlinkSync.question('Submit your link: '.green);
  const amountStr = readlinkSync.question(
    'How many referrals do you want to create? '.green
  );
  const totalAmount = parseInt(amountStr, 10);

  if (isNaN(totalAmount) || totalAmount <= 0) {
    console.log('Please enter a valid number greater than 0.'.red);
    return;
  }

  try {
    let processed = 0;
    while (processed < totalAmount) {
      const currentBatchSize = Math.min(5, totalAmount - processed);
      for (let i = 0; i < currentBatchSize; i++) {
        const emailAddress = emails.generateEmail();
        await getHeartbeat()
          .then((res) => {
            getReferral(
              url,
              res,
              emailAddress.slice(1, emailAddress.length - 1),
              createAccountETH()
            );
          })
          .catch((error) => {
            console.log(
              `Error in creating referral ${processed + 1}: ${error}`.red
            );
          });

        console.log(
          `Referral ${processed + 1} created with email: ${emailAddress}`.cyan
        );
        if (i < currentBatchSize - 1) {
          console.log(
            'Waiting for 1 minute before creating the next referral...'.yellow
          );
          await delay(60000);
        }
        processed++;
      }

      if (processed < totalAmount) {
        console.log(
          'Waiting for the next hour to continue creating referrals...'.red
        );
        await delay(3600000);
      }
    }
    console.log('All referrals have been successfully created!'.green);
  } catch (error) {
    console.log(`Error in main: ${error}`.red);
  }
})();
