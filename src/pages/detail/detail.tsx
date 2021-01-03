import './style.scss'

interface IDetailProps {}

export default function Detail(props: IDetailProps) {

  console.log(props);

  return (
    <div className="detail">
      暂无内容
    </div>
  )
}
