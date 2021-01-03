import './style.scss'

interface IFooterProps {
  
}

export default function Footer(props: IFooterProps) {

  console.log(props);


  return (
    <footer className="footer">
      © 2021 blog By newa | 鄂ICP备19001001号-2
    </footer>
  )
}
