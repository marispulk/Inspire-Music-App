import { v4 as uuidv4 } from "uuid";  // Generates each song unique identificator

// Returns an array of objects
function chillHop() {
  return [
    {
        name: "Nights Like These",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/07/25a182a6a21588b8f7ad5605ba1118a8ea61bdc2-1024x1024.jpg",
        artist: "Sleepy Fish",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=3204",
        color: ["#185C7F", "#D8EBF2"],
        id: uuidv4(),
        active: true,
    },
    {
        name: "Daylight",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Reflection",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Under the City Stars",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Rain",
        cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
        artist: "Psalm Trees, Guillaume Muschalle",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=2868",
        color: ["#35352C", "#FCA98A"],
        id: uuidv4(),
        active: false
    },
    {
        name: "Loved",
        cover: "https://chillhop.com/wphttps://chillhop.com/wp-content/uploads/2020/07/aa103b43660077c66e65a1edc009844171bbd9c6-1024x1024.jpg-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
        artist: "Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=3204",
        color: ["#ED739A", "#0C3C6C"],
        id: uuidv4(),
        active: false
    },
    {
        name: "Snowstalgia",
        cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
        artist: "invention_",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=3204",
        color: ["#CAB1C7", "#1F487C"],
        id: uuidv4(),
        active: false
    }
  ];
}

// Export this function
export default chillHop;