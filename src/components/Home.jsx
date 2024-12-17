import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  return (
    <section className="w-full py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-2xl  text-slate-700">
        Groceries Made Simple, Just for You.
        </span>
        <h3 className="text-6xl font-semibold">
          Johar Basket
        </h3>
        <p className="text-lg text-slate-700 my-6">
        Welcome to Johar Basket, where we make grocery shopping simple, convenient, and affordable. Our carefully curated selection of products ensures that you always have access to the freshest and finest items, handpicked and delivered right to your doorstep. With Johar Basket, you can shop with confidence, knowing that your satisfaction is our top priority.
        </p>
        <button className="bg-[#ff4900] text-white text-2xl font-medium py-2 px-4 rounded transition-all hover:bg-[#ff6d33] active:scale-95">
          Order Now
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://media.istockphoto.com/id/1411210350/photo/indian-woman-shopping-at-grocery-store.webp?b=1&s=612x612&w=0&k=20&c=hqF4TXvzW6m51htZ6yXX2N5n4S8zlAHzSFkifEfecK0=",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1597354984706-fac992d9306f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1633536706502-8072f956614a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1673793535072-148e7ef7bd41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    src: "https://c7.alamy.com/comp/DG70KM/tube-of-colgate-toothpaste-isolated-on-white-background-DG70KM.jpg",
  },
  {
    id: 6,
    src: "https://c7.alamy.com/comp/2EAFC7C/fair-and-lovely-face-wash-cream-beauty-concept-2EAFC7C.jpg",
  },
  {
    id: 7,
    src: "https://www.pngitem.com/pimgs/m/592-5921145_himalaya-men-intense-oil-clear-lemon-face-wash.png",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://c7.alamy.com/comp/HXYTGP/snack-chip-selection-at-grocery-store-HXYTGP.jpg",
  },
  {
    id: 11,
    src: "https://c7.alamy.com/comp/CPGAA0/grocery-items-in-supermarket-CPGAA0.jpg",
  },
  {
    id: 12,
    src: "https://c7.alamy.com/comp/KW0FMD/light-bulbs-and-globes-on-sale-in-a-sydney-supermarketaustralia-KW0FMD.jpg",
  },
  {
    id: 13,
    src: "https://c7.alamy.com/comp/M4N5WR/variety-types-of-indian-snacks-selling-in-the-shop-M4N5WR.jpg",
  },
  {
    id: 14,
    src: "https://media.istockphoto.com/id/1603554458/photo/close-up-of-rich-and-spicy-makhana-mix-indian-namkeen.jpg?s=2048x2048&w=is&k=20&c=n5v8j016spC_GsrivA-INWwLC9XPZXur_vCAun1GcgY=",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1617694076477-701476d1bd29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    src: "https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[600px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Home;