import { useCounterStore } from "../stores/counterStore";

const Home = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">{count}</h1>

      <button
        onClick={increment}
        className="px-4 py-2 bg-black text-white rounded"
      >
        +
      </button>

      <button
        onClick={decrement}
        className="px-4 py-2 bg-black text-white rounded"
      >
        -
      </button>
      <button onClick={reset} className="px-4 py-2 bg-black text-white rounded">
        Reset
      </button>
    </div>
  );
};

export default Home;
