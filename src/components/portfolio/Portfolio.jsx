import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio,
  mobilePortfolio,
  featuredPortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../portfolioData";

const Portfolio = () => {
  const [active, setActive] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  useEffect(() => {
    switch (active) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);

        break;

      case "mobile":
        setData(mobilePortfolio);

        break;

      case "design":
        setData(designPortfolio);

        break;
      case "branding":
        setData(contentPortfolio);
        break;

      default:
        break;
    }
  }, [active]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              id={item.id}
              active={active === item.id}
              setActive={setActive}
            />
          );
        })}
      </ul>

      <div className="container">
        {data.map((item) => {
          return (
            <div className="item">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Portfolio;
