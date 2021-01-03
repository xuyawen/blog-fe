import Link from 'next/Link'
// import Image from 'next/image'
import router from 'next/router'
import './style.scss'
interface IHeaderProps {}

const Links = [
  {
    name: '首页',
    href: '/home'
  },
  {
    name: '文章',
    href: '/article'
  },
  // {
  //   name: '列表',
  //   href: '/list'
  // },
  // {
  //   name: '档案',
  //   href: '/archive'
  // },
  // {
  //   name: '关于我',
  //   href: '/about'
  // },
]

const Header = (props: IHeaderProps) => {

  console.log(props);

  return (
    <header className="header">
      <div className="nav-wrap">
        {/* <Image
          onClick={() => router.push('/')}
          width="70"
          height="70"
          className="logo"
          src="/logo.png"
          alt="logo"/> */}
        <img className="logo" onClick={() => router.push('/')} src="/logo.png" alt="logo"/>
        <nav className="nav">
          {
            Links.map(link => (
              <Link href={ link.href } key={ link.href } passHref>
                <a className="nav-item">{ link.name }</a>
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Header