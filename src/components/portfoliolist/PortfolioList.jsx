import "./portfolioList.scss"
const PortfolioList = ({title,id,active,setActive}) => {
  return (
    <li className={active?"portfolioList active":"portfolioList"} onClick={()=>setActive(id)} >
        {title}
    </li>
    )
}

export default PortfolioList