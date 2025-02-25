const { User } = require("./models");

async function checkSeed() {
    const count = await User.count();
    console.log(count === 0 ? "empty" : "exists");
}

checkSeed();