import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  return (
    <section className="w-full py-8 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="px-2">
        <ShuffleGrid />
      </div>

      {/* Right Section */}
      <div className="mx-10 lg:mx-14">
        <span className="block mb-4 text-md lg:text-2xl text-slate-700 -top-14">
          Groceries Made Simple, Just for You.
        </span>
        <h3 className="text-6xl font-semibold">Johar Basket</h3>
        <p className="text-lg text-slate-700 my-6">
          Welcome to Johar Basket, where we make grocery shopping simple,
          convenient, and affordable. Our carefully curated selection of
          products ensures that you always have access to the freshest and
          finest items, handpicked and delivered right to your doorstep. With
          Johar Basket, you can shop with confidence, knowing that your
          satisfaction is our top priority.
        </p>
        <button className="bg-[#ff4900] text-white text-2xl font-medium py-2 px-4 rounded transition-all hover:bg-[#ff6d33] active:scale-95">
          Order Now
        </button>
      </div>
    </section>
  );
};

// Square Component: Renders individual grid items
const Square = ({ src }) => (
  <motion.div
    layout
    transition={{ duration: 1.5, type: "spring" }}
    className="w-full h-full"
    style={{
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <img
      src={src}
      alt="Product preview"
      className="invisible w-0 h-0" // Hide for accessibility but include alt for SEO
    />
  </motion.div>
);

// Shuffle Function: Randomizes array order
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Image Data for Squares
const squareData = [
  { id: 2, src: "https://images.unsplash.com/photo-1597354984706-fac992d9306f?q=80&w=1888&auto=format&fit=crop" },
  { id: 3, src: "https://images.unsplash.com/photo-1633536706502-8072f956614a?q=80&w=1935&auto=format&fit=crop" },
  { id: 4, src: "https://plus.unsplash.com/premium_photo-1673793535072-148e7ef7bd41?q=80&w=1887&auto=format&fit=crop" },
  { id: 5, src: "https://c7.alamy.com/comp/DG70KM/tube-of-colgate-toothpaste-isolated-on-white-background-DG70KM.jpg" },
  { id: 6, src: "https://c7.alamy.com/comp/2EAFC7C/fair-and-lovely-face-wash-cream-beauty-concept-2EAFC7C.jpg" },
  { id: 7, src: "https://www.pngitem.com/pimgs/m/592-5921145_himalaya-men-intense-oil-clear-lemon-face-wash.png" },
  { id: 8, src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9" },
  { id: 9, src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d" },
  { id: 10, src: "https://c7.alamy.com/comp/HXYTGP/snack-chip-selection-at-grocery-store-HXYTGP.jpg" },
  { id: 11, src: "https://c7.alamy.com/comp/CPGAA0/grocery-items-in-supermarket-CPGAA0.jpg" },
  { id: 13, src: "https://c7.alamy.com/comp/M4N5WR/variety-types-of-indian-snacks-selling-in-the-shop-M4N5WR.jpg" },
  { id: 16, src: "https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48" },
];

// Grid Component: Shuffles and displays squares
const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState([]);

  // Shuffle squares every 3 seconds
  const shuffleSquares = () => {
    setSquares(shuffle([...squareData]));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  useEffect(() => {
    shuffleSquares(); // Initial shuffle
    return () => clearTimeout(timeoutRef.current); // Cleanup
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[600px] gap-1">
      {squares.map((sq) => (
        <Square key={sq.id} src={sq.src} />
      ))}
    </div>
  );
};

export default Home;
