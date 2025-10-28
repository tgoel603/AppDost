import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Contact />

      {/* Example counter section */}
      <section style={{marginTop: '2rem', textAlign: 'center'}}>
        <h1>Counter Example</h1>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </section>
    </div>
  );
};

export default App;
