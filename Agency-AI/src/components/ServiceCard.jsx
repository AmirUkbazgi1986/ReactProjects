import { useRef, useState } from "react";

function ServiceCard({ service }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  /*
  1. Get where the card is on the screen
  2. Convert mouse position → position inside the card
  3. Move the glow to that position
  4. Adjust by half its size so it’s centered on the cursor
*/

  const divRef = useRef(null);
  function handleMouseMove(e) {
    // 1.This gets the position AND size of the div relative to the viewport. It gives you:
    // it gives you:
    // 1. left, top → where the div starts on screen
    //2.  width, height → its size
    const bounds = divRef.current.getBoundingClientRect();

    //Calculate cursor position inside the card. cursor position relative to the div (not the screen)
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  }
  return (
    <div
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/70"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? "opacity-70" : "opacity-0"}`}
        //Center the glow on the cursor(This shifts the glow so its center aligns with the cursor)
        style={{ top: position.y - 150, left: position.x - 150 }}
        // style={{ top: position.y, left: position.x }}
      />
      <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={service.icon}
            alt=""
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
