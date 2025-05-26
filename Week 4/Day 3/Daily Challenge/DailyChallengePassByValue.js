//  Exercise: Video Class Implementation

//  Step 1: Define the Video class
class Video {
  constructor(title, uploader, time) {
      this.title = title; // Store video title
      this.uploader = uploader; // Store uploader's name
      this.time = time; // Store video duration in seconds
  }

  //  Step 2: Define the watch() method
  watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

//  Step 3: Instantiate first Video instance and call watch()
const video1 = new Video("JavaScript Tutorial", "Zakaria", 300);
video1.watch(); 
// Expected output: "Zakaria watched all 300 seconds of 'JavaScript Tutorial'!"

//  Step 4: Instantiate second Video instance and call watch()
const video2 = new Video("Python Basics", "Amina", 450);
video2.watch();
// Expected output: "Amina watched all 450 seconds of 'Python Basics'!"

//  Bonus: Store multiple videos in an array
const videoData = [
  { title: "React Guide", uploader: "Ali", time: 600 },
  { title: "Machine Learning Intro", uploader: "Sofia", time: 900 },
  { title: "CSS Animations", uploader: "Omar", time: 250 },
  { title: "Node.js Crash Course", uploader: "Yasmine", time: 500 },
  { title: "Web Security 101", uploader: "Hassan", time: 750 }
];

//  Step 5: Loop through the array and instantiate Video objects
const videos = videoData.map(({ title, uploader, time }) => new Video(title, uploader, time));

//  Step 6: Call watch() for each instance
videos.forEach(video => video.watch());
