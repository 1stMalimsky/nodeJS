const { readFile } = require("fs/promises")
const { join } = require("path")

const inside = "This should be written inside";

const read = async () => {
    try {
        let data = await readFile(join(__dirname, "newfile.txt"), { encoding: "utf8" })
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

read()