---
layout: home

hero:
  name: "Lisp 道场"
  text: "代码即数据，数据即代码"
  tagline: 符号计算与递归思维的艺术圣殿。
  image:
    src: /dojo.svg
    alt: Lisp 道场 Logo
  actions:
    - theme: brand
      text: 踏入道场
      action: /guide/
    - theme: alt
      text: 探寻哲学
      action: /philosophy/

features:
  - icon: ☯️
    title: 代码即数据 (Homoiconicity)
    details: "程序即是数据，数据即是程序。在 Lisp 的世界里，工具与素材之间没有界限，这使得代码能够以一种极致的清晰，审视它自身。"
  - icon: 🔄
    title: 递归如息
    details: "迭代，不过是缺乏远见之语言的拐杖。真正的优雅，在于那自相似的层层深入——在问题的解法之中，已然包含了问题本身的种子。"
  - icon: 🧩
    title: "宏：元语言之力"
    details: "何必苦等语言设计者的恩赐？当语法化作一棵树，你便能将语言弯曲以顺应你的思维，而非削足适履。你不仅是在编写代码，更是在演化一种全新的方言。"
  - icon: ⚖️
    title: "λ演算：计算的基石"
    details: "万物皆可归约为函数。无需复杂的机器，仅凭变量绑定与替换，我们便能从纯粹的抽象中推演出整个计算宇宙。"
  - icon: 🌳
    title: S-表达式之树
    details: "没有运算符优先级，没有歧义的语法。只有如钟声般澄澈的嵌套列表，顺应心智的意图而生。语法即是结构，结构即是真理。"
  - icon: 🕰️
    title: 永恒的智慧
    details: "Lisp 并非古老，它只是超越了它的时代。从 McCarthy 1960 年的那篇论文，到现代的元编程，其核心思想始终是所有未来计算赖以建立的基石。"
---

<div class="custom-home-content">
  <div class="quote-block">
    <p>“Lisp 是一种可编程的编程语言。”</p>
    <cite>— John Foderaro</cite>
  </div>
  
  <div class="philosophy-pillars">
    <h2>道场三大支柱</h2>
    <div class="pillars-grid">
      <div class="pillar">
        <h3>1. 可读性即结构</h3>
        <p>我们从不畏惧括号。我们拥抱它们，视其为思想的边界。每一个右括号，都是一次向清晰的回归。</p>
      </div>
      <div class="pillar">
        <h3>2. 求值即变换</h3>
        <p>代码绝非静止的器物，它是鲜活的过程。我们求值，我们变换，我们递归。机器，不过是心智的一面明镜。</p>
      </div>
      <div class="pillar">
        <h3>3. 约束即自由</h3>
        <p>真正的力量不源于无尽的选择，而来自于一组极简且正交的基元。正是在这局限之中，我们找到了无限的表达。</p>
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