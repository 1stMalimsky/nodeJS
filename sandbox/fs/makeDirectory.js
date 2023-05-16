const { mkdir } = require("fs/promises")
const { join } = require("path")

const createNewDirectory = async () => {
    try {
        await mkdir(join(__dirname, "test", "test4", "test5"), { recursive: true })
        console.log("dir made");
    }
    catch (err) {
        console.log(err)
    }
}
createNewDirectory()

module.exports = createNewDirectory