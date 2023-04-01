import * as fs from "fs";

export function readJsonData(fileName) {
    if (fs.existsSync(fileName)) {
        let data = fs.readFileSync(fileName).toString();
        return JSON.parse(data)
    }
    else {
        fs.writeFile(fileName, "[]", (err) => {
            if (err) throw err;
            console.log(`${fileName} not found, creating it`);
        });
        return [];
    }
}

export function saveJsonData(fileName) {
    fs.writeFile(fileName, "{}", (err) => {
        if (err) throw err;
        console.log(`${fileName} saved`);
    });
}