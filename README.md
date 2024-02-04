# Ecosapiens-Referral-Bot

Ecosapiens-Referral-Bot is a Node.js script designed by `dante4rt` to automate the creation of referrals for the Ecosapiens platform. It intelligently manages referral creation, allowing users to specify the number of referrals and ensuring they are processed efficiently over time to avoid spam detection.

## Features

- **Custom Referral Counts:** Users can specify the exact number of referrals they wish to create.
- **Rate Limiting:** To prevent spam detection, the bot creates up to 5 referrals per hour.
- **Automated Wallet Creation:** Each referral is linked to a newly created Ethereum wallet address.
- **Email Generation:** Automatic generation of unique email addresses for each referral.

## Installation

Before installing, ensure you have Node.js and npm (Node Package Manager) installed on your system.

1. Clone the repository:

```bash
git clone https://github.com/dante4rt/Ecosapiens-Referral-Bot.git
```

2. Navigate to the project directory:

```bash
cd Ecosapiens-Referral-Bot
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

To start the bot, run the following command in the terminal within the project directory:

```bash
node main.js
```

Follow the on-screen prompts to submit your link and specify the number of referrals you want to create. The bot will handle the rest, adhering to the rate limiting rules to avoid spam detection.

## Contributing

Contributions are what make the open-source community such a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
