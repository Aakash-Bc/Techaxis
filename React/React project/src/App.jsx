import { useState } from "react";
import "./App.css";
import Card from "./cart";

import mern1 from "./assets/images/mern1.png";
import mern2 from "./assets/images/mern2.jpg";
import mern4j from "./assets/images/mern4.jpeg";
import mern4 from "./assets/images/mern4.jpg";
import mern6 from "./assets/images/mern6.png";
import mern7 from "./assets/images/mern7.jpg";

function App() {
  const [filter, setFilter] = useState("All");

  const courses = [
    {
      title: "MERN Stack Development",
      thumbnail: mern1,
      instructor: "Suryaraj Timsina",
      instructorImage: mern7,
      duration: "12 weeks",
      lessons: "24 lessons",
      level: "Beginner",
      rating: "4.8",
      category: "MERN"
    },
    {
      title: "MERN Stack Development",
      thumbnail: mern2,
      instructor: "Aakash Sharma",
      instructorImage: mern6,
      duration: "8 weeks",
      lessons: "16 lessons",
      level: "Intermediate",
      rating: "4.9",
      category: "MERN"
    },
    {
      title: "Web Engineering",
      thumbnail: mern4j,
      instructor: "Bikash Kc",
      instructorImage: mern4,
      duration: "10 weeks",
      lessons: "20 lessons",
      level: "Advanced",
      rating: "5.0",
      category: "Engineering"
    },
    {
      title: "Web Engineering",
      thumbnail: mern4,
      instructor: "Suryaraj Timsina",
      instructorImage: mern2,
      duration: "6 weeks",
      lessons: "12 lessons",
      level: "Intermediate",
      rating: "4.7",
      category: "Engineering"
    },
    {
      title: "Digital Marketing",
      thumbnail: mern6,
      instructor: "Aakash Sharma",
      instructorImage: mern1,
      duration: "14 weeks",
      lessons: "28 lessons",
      level: "Advanced",
      rating: "4.9",
      category: "Marketing"
    },
    {
      title: "Digital Marketing",
      thumbnail: mern7,
      instructor: "Bikash Kc",
      instructorImage: mern4j,
      duration: "4 weeks",
      lessons: "8 lessons",
      level: "Beginner",
      rating: "4.6",
      category: "Marketing"
    }
  ];

  const filteredCourses = filter === "All"
    ? courses
    : courses.filter(course => course.category === filter);

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => setFilter("All")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${filter === "All" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("MERN")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${filter === "MERN" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          MERN
        </button>
        <button
          onClick={() => setFilter("Engineering")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${filter === "Engineering" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Web Engineering
        </button>
        <button
          onClick={() => setFilter("Marketing")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${filter === "Marketing" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Digital Marketing
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {filteredCourses.map((course, index) => (
          <Card
            key={index}
            {...course}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
