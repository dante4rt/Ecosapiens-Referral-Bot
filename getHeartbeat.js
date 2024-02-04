const { default: axios } = require('axios');

async function getHeartbeat() {
  try {
    const { data } = await axios({
      url: 'https://api.getwaitlist.com/api/v1/widget_heartbeats',
      method: 'POST',
      data: {
        location: 'https://ecosapiens.xyz/elesapien',
        waitlist_id: '13047',
        referrer: '',
        widget_type: 'WIDGET_1',
      },
    });

    return data.uuid;
  } catch (error) {
    console.log('error in getHeartbeat: ' + error);
  }
}

module.exports = getHeartbeat;
