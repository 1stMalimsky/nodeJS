const { writeFile } = require("fs/promises")
const { join } = require("path")

const inside = "This should be written inside";

const write = async () => {
    try {
        await writeFile(join(__dirname, "newfile.txt"), inside)
    }
    catch (err) {
        console.log(err);
    }
}

write()