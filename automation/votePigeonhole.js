const PigeonholeBot = require("../bots/pigeonhole");

async function main() {
  const [questionId, attempts, ...dataIds] = process.argv.slice(2);
  const bot = new PigeonholeBot();
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      await bot.init();
      await bot.openURL(`https://pigeonhole.at/${questionId}`);
      await bot.createProfile("Anonymous");
      for (let i = 0; i < dataIds.length; i++) {
        await bot.vote(dataIds[i]);
        await bot.scrollTo(100);
      }
    } finally {
      await bot.quit();
    }
  }
}

main();
