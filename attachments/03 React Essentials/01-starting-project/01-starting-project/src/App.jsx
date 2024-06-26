import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
  //initial value
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  function handleClick(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

  console.log("APP COMPONENT EXECUTING");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3></h3>
            <p></p>
            <pre>
              <code></code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
