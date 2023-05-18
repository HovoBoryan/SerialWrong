
const fs = require("fs");
function serialize(list, filename) {
    const serializedData = JSON.stringify(list.toArray());
    fs.writeFile(filename, serializedData, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("Serialization successful. File saved as:", filename);
    }
    });
}
function deserialize(filename, callback) {
    fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        callback(null);
        return;
    }
    try {
        const array = JSON.parse(data);
        const list = new LinkedList();
        for (const item of array) {
        list.append(item);
        }
        callback(list);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        callback(null);
    }
    });
}
module.exports = { serialize, deserialize };












