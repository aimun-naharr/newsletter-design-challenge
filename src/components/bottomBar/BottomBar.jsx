import React from "react";
import "./bottomBar.css";
import retro from "../../assets/images/image-retro-pcs.jpg";
import laptop from "../../assets/images/image-top-laptops.jpg";
import gaming from "../../assets/images/image-gaming-growth.jpg";

const articles = [
        {
                img: retro,
                title: "Reviving Retro PCs",
                desc: "What happens when old PCs are given modern upgrades?",
        },
        {
                img: laptop,
                title: "Top 10 Laptops of 2022",
                desc: "Our best picks for various needs and budgets",
        },
        {
                img: gaming,
                title: "The Growth of Gaming",
                desc: "How the pandemics has sparked fresh opportunities",
        },
];
const BottomBar = () => {
        return (
                <article>
                        {articles.map((article, index) => (
                                <div className="article-card" key={index}>
                                        <div className="article-img">
                                                <img src={article.img} alt={article.title} />
                                        </div>
                                        <div className="article-right">
                                          <h2>0{index +1}</h2>
                                          <h5>{article.title}</h5>
                                          <p>{article.desc}</p>
                                        </div>
                                </div>
                        ))}
                </article>
        );
};

export default BottomBar;
