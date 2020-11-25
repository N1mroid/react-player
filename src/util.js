import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Flushing the Stairs",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
            artist: "Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
            color: ["#87BF72", "#81C35E"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Paved Paths",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9919",
            color: ["#7E715F", "#CD8D62"],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop;