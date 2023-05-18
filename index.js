const LinkedList = require("./linkedlist");
const { serialize, deserialize } = require("./serialization");
// Example usage
const list = new LinkedList();
list.append(777);
list.append(22);
list.append(11);
list.append(44);
list.append(11);
list.append(33);
console.log(list.toArray());    // Output: [ 11, 11, 22, 33, 44, 777 ]
list.delete(22);                // deletes 22 from the list
list.append(111);               // I add an element again
console.log(list.toArray());    // Output: [ 11, 11, 33, 44, 111, 777 ]
console.log(`${list.getMax()} is the largest element of your list`); // Output: 777
console.log(`${list.getMin()} is the smallest element of your list`); // Output: 11

    // Serialize the linked list to a file
serialize(list, "serializedList.json");

    // Deserialize the linked list from the file
deserialize("serializedList.json", (deserializedList) => {
    if (deserializedList) {
    console.log("Deserialized List:", deserializedList.toArray());
    console.log(`${deserializedList.getMax()} is the largest element of the deserialized list`);
    console.log(`${deserializedList.getMin()} is the smallest element of the deserialized list`);
    }
});







