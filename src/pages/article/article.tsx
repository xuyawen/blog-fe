import useSWR from 'swr'
import Link from 'next/Link'
import { TArticle, iArticleList } from '@/pages/api/article'
import './style.scss'

interface IarticleProps {}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Article(props: IarticleProps) {
  const { data, error } = useSWR('/api/article', fetcher)

  console.log(props);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="article">
      <div className="article-container">
        {
          data.map((item: iArticleList) => (
            <div className="article-list_wrap" key={ item.create_time }>
              <div className="article-time">{ item.create_time }</div>
              <div className="article-list">
                {
                  item.list.map((article: TArticle) => (
                    <Link href={ `/detail?id=${article.id}` } key={ article.id } passHref>
                      <a className="article-item" >
                        <span>{ article.title }</span>
                        <span>{ article.create_time }</span>
                      </a>
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
