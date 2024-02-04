const { default: axios } = require('axios');

async function getReferral(url, heartbeatid, emailAddress, address) {
  try {
    const { data } = await axios({
      url: 'https://api.getwaitlist.com/api/v1/waiter',
      method: 'POST',
      data: {
        waitlist_id: 13047,
        referral_link: url,
        heartbeat_uuid: heartbeatid,
        widget_type: 'WIDGET_1',
        email: emailAddress,
        answers: [
          {
            question_value: 'What is your ETH address?',
            answer_value: address,
          },
        ],
      },
    });

    if (data.created_at) {
      console.log('referral has been created!');
      console.log('details: ');
      console.log(data);
    }
  } catch (error) {
    console.log('error in getReferral: ' + error);
  }
}

module.exports = getReferral;
