const { rmdir, rm } = require("fs/promises")

const { join } = require("path")

/* const removeDirectory = async () => {
    try {
        await rmdir(join(__dirname, test))
    }
    catch (err) {
        console.log(err);
    }
}

removeDirectory() */

const remove = async () => {
    try {
        await rm(join(__dirname, "test"), {
            force: true,
            recursive: true,
            maxRetries: 5
        })
    }
    catch (err) {
        console.log(err);
    }
}

remove()

//module.exports = removeDirectory
