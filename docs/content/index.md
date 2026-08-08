---
layout: home

hero:
  name: "Lisp Dojo"
  text: "Code is Data, Data is Code"
  tagline: A sanctuary for the art of symbolic computation and recursive thinking.
  image:
    src: /dojo.svg
    alt: Lisp Dojo Logo
  actions:
    - theme: brand
      text: Enter the Dojo
      action: /guide/
    - theme: alt
      text: The Philosophy
      action: /philosophy/

features:
  - icon: ☯️
    title: Homoiconicity
    details: "The program is the data. The data is the program. In Lisp, there is no barrier between the tool and the material, allowing code to reason about itself with perfect clarity."
  - icon: 🔄
    title: Recursion as Breath
    details: "Iteration is a crutch for languages that lack vision. True elegance lies in the self-similar descent, where the solution to the problem contains the seed of the problem itself."
  - icon: 🧩
    title: "Macros: The Metalanguage"
    details: "Why wait for the language designers? When the syntax is a tree, you can bend the language to your thought, not your thought to the language. You are not just writing code; you are evolving the dialect."
  - icon: ⚖️
    title: "Lambda Calculus: The Bedrock of Computation"
    details: "Everything can be reduced to a function. Without complex machinery, through mere variable binding and substitution, we can deduce the entire universe of computation from pure abstraction."
  - icon: 🌳
    title: The Tree of S-Expressions
    details: "No precedence rules. No ambiguous grammar. Just nested lists, clear as a bell, structured as the mind intends. The syntax is the structure, and the structure is the truth."
  - icon: 🕰️
    title: Timeless Wisdom
    details: "Lisp is not old; it is ahead of its time. From McCarthy's 1960 paper to modern metaprogramming, the core ideas remain the bedrock upon which all future computation is built."
---

<div class="custom-home-content">
  <div class="quote-block">
    <p>"Lisp is a programmable programming language."</p>
    <cite>— John Foderaro</cite>
  </div>
  
  <div class="philosophy-pillars">
    <h2>The Three Pillars of the Dojo</h2>
    <div class="pillars-grid">
      <div class="pillar">
        <h3>1. Readability is Structure</h3>
        <p>We do not fear parentheses. We embrace them as the boundaries of thought. Every closing paren is a return to clarity.</p>
      </div>
      <div class="pillar">
        <h3>2. Evaluation is Transformation</h3>
        <p>Code is not a static artifact; it is a living process. We evaluate, we transform, we recur. The machine is a mirror of the mind.</p>
      </div>
      <div class="pillar">
        <h3>3. Freedom via Constraint</h3>
        <p>True power comes not from endless options, but from a minimal, orthogonal set of primitives. In limitation, we find infinite expression.</p>
      </div>
    </div>
  </div>
</div>

<style scoped>
.custom-home-content {
  margin-top: 4rem;
  padding: 0 1.5rem;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}

.quote-block {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  margin-bottom: 4rem;
  border: 1px solid var(--vp-c-divider);
}

.quote-block p {
  font-size: 1.5rem;
  font-style: italic;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.quote-block cite {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  font-style: normal;
}

.philosophy-pillars h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.pillar {
  padding: 2rem;
  border-radius: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.25s, box-shadow 0.25s;
}

.pillar:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 1px var(--vp-c-brand-1);
}

.pillar h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--vp-c-brand-1);
}

.pillar p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .quote-block p {
    font-size: 1.25rem;
  }
  
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}
</style>