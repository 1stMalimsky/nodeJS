const fs = require("fs")
const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises")
const { join, dirname } = require("path")


const users1 = [{ firstName: "Alon", lastName: "Mal" }, { firstName: "Yael", lastName: "Mal" }, { firstName: "Nave", lastName: "Mal" }]

const searchForDir = async () => {
    let dirFound = false;
    try {
        console.log("starting search");
        let dir = await readdir(__dirname);
        for (let file of dir) {
            if (file == "users") {
                console.log("users found");
                dirFound = true;
            }
        }
        console.log("dirFound", dirFound);
    }
    catch (err) {
        console.log("users not found");
    }
    if (!dirFound) {
        try {
            await mkdir(join(__dirname, "users"))
            console.log("users dir made");
        }
        catch (err) {
            console.log("mkdir err: ", err);
        }
    }

}

const addFolderAndFile = async () => {
    try {
        searchForDir()
        for (let i = 0; i < 3; i++) {
            console.log("in the for loop");
            let fullName = users1[i].firstName + "-" + users1[i].lastName;
            await writeFile(join(__dirname, "users", fullName, ".js"), fullName)
        }
    }
    catch (err) {
        console.log(err);
    }
}

const removeFileAndFolder = async () => {
    try {
        await unlink(join(__dirname + "\\users\\file.js"))
        await rmdir(join("users"))
        console.log("Deleted All!");
    }
    catch (err) {
        console.log(err);
    }
}

//searchForDir()
addFolderAndFile()
//setTimeout(() => { removeFileAndFolder() }, 5000);