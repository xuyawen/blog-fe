import useSWR from 'swr'
import { iHomeCard } from '@/pages/api/home'
import './style.scss'

interface IHomeProps {}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home(props: IHomeProps) {
  const { data, error } = useSWR('/api/home', fetcher)

  console.log(props);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="home">
      <ul className="cards-wrap">
        { 
          data.map((card: iHomeCard) => (
            <li className="card" key={card.id}>
              <div className="card-title">{ card.name }</div>
              <div className="card-content">{ card.desc }</div>
              <div className="card-tag">
                {
                  card.tags.map((tag, key) => (
                    <span className="tag" key={ key }>{ tag }</span>
                  ))
                }
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
