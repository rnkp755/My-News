import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { theme } from "./Navbar";

export let handleCountryChange = () => {};

export default function NewsContainer(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKey}&page=${page}&pageSize=8`;
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(parsedData);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `My News - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
  }, []);

  useEffect(() => {
    setupTheme();
  },[articles]);

  const setupTheme = () => {
    const navLinks = document.getElementsByClassName('nav-link');
    const cards = document.getElementsByClassName('card');
    const navbar = document.getElementsByClassName('navbar')[0];
    const navbarBrand = document.getElementsByClassName('navbar-brand')[0];
    const currentTheme =  theme;
    const authorAndDateTime = document.getElementsByClassName('text-muted');

    if (currentTheme==="dark") {
      document.body.style.backgroundColor = '#010409';
      document.body.style.color = '#FDF5E6';
      navbar.style.backgroundColor = 'black';
      navbarBrand.style.color = '#f8f9fa';
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#FDF5E6';
      }

      for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = 'black';
        cards[i].style.color = '#fff';
        // authorAndDateTime[i].style.color = '#FFE4E1';
      }

      for (let i = 0; i < authorAndDateTime.length; i++) {
        authorAndDateTime[i].style.color = '#FFE4E1';
      }
    }
    else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212529';
      navbar.style.backgroundColor = '#f8f9fa';
      navbarBrand.style.color = 'black';
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#212529';
      }
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = '#fff';
        cards[i].style.color = '#212529';
        authorAndDateTime[i].style.color = '#6c6f72';
      }
    }
  }

  const fetchMoreData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKey}&page=${page + 1}&pageSize=8`;
    setPage(page + 1);
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
    // setupTheme();
    setLoading(false);
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "90px 0px 35px 0px" }}>
          My News - Top Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="row container" style={{overflow: "hidden"}}>
            {articles.length > 0
              ? articles.map((element) => {
                  return (
                    <div className="col-md-3 my-3" key={element.url}>
                      <NewsCard
                        title={element.title ? element.title : "News"}
                        description={
                          element.description
                            ? element.description
                            : "Description"
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                    
                  );
                })
              : ""}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

NewsContainer.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  theme: "light",
};

NewsContainer.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  theme: PropTypes.string,
};
