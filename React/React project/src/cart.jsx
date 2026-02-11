import React from "react";

const Card = ({
  thumbnail,
  title = "MERN Training in Nepal",
  instructor = "Suryaraj Timsina",
  instructorImage,
  duration = "12 weeks",
  lessons = "1 lessons",
  level = "Beginner",
  rating = "0.0",
  images = []
}) => {

  return (
    <div className="w-full max-w-[340px] bg-white rounded-xl border border-gray-200 flex flex-col overflow-hidden">

      {thumbnail && (
        <div className="w-full h-40 overflow-hidden bg-gray-100">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-md">
            {level}
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-base font-bold text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
            {title} Course is carefully crafted to give you the skill...
          </p>
        </div>

        <div className="flex items-center justify-between text-gray-500 text-[11px]">
          <div className="flex items-center gap-1">
            <span>⏱</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📘</span>
            <span>{lessons}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
              {instructorImage ? (
                <img src={instructorImage} alt={instructor} className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-[8px] text-gray-500">👤</div>
              )}
            </div>
            <span className="text-gray-700 font-bold text-[11px]">{instructor}</span>
          </div>
          <div className="flex items-center">
            <span className="text-orange-400 text-xs">⭐</span>
            <span className="ml-1 text-xs font-bold text-gray-900">{rating}</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold text-xs mt-1">
          Start Course
        </button>
      </div>
    </div>
  );
};

export default Card;
