export interface iArticleList {
  create_time: string
  list: TArticle[]
}
export type TArticle = {
  id: number
  title: string
  create_time: string
}
export default function handler(_: any, res: any) {
  res.status(200).json(cards)
}
export const cards: iArticleList[] = [
  {
    create_time: '2021-02',
    list: [
      {
        id: 1,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-02-03'
      },
      {
        id: 2,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-02-03'
      },
      {
        id: 3,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-02-03'
      },
      {
        id: 4,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-02-03'
      },
      {
        id: 5,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-02-03'
      },
    ]
  },
  {
    create_time: '2021-01',
    list: [
      {
        id: 1,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-01-03'
      },
      {
        id: 2,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-01-03'
      },
      {
        id: 3,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-01-03'
      },
      {
        id: 4,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-01-03'
      },
      {
        id: 5,
        title: '遵循 Promise A+ 规范实现 Promise',
        create_time: '2021-01-03'
      },
    ]
  },
]