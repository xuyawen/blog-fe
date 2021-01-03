export interface iHomeCard {
  id: number
  name: string
  tags: string[]
  desc: string
  image?: string
}
export default function handler(_: any, res: any) {
  res.status(200).json(cards)
}
export const cards: iHomeCard[] = [
  {
    id: 1,
    name: 'Javascript',
    tags: ['js'],
    desc: 'JavaScript是一种属于网络的高级脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。'
  },
  {
    id: 2,
    name: 'Vue',
    tags: ['js', 'vue'],
    desc: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。'
  },
  {
    id: 3,
    name: 'React',
    tags: ['js', 'react'],
    desc: 'React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。'
  }
]