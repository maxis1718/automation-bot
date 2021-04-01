const PigeonholeBot = require("../bots/pigeonhole");

async function main() {
  const [questionId, dataId] = process.argv.slice(2);
  const bot = new PigeonholeBot();
  try {
    await bot.init();
    await bot.openURL(`https://pigeonhole.at/PRODUCTNTECH/q/${questionId}`);
    await bot.createProfile("Anonymous");
    await bot.vote(dataId);
  } finally {
    await bot.quit();
  }
}

main();
