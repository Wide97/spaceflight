import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';

interface ArticleData {
  id: number;
  title: string;
  published_at: string;
  image_url: string;
}

const Home = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          published_at={article.published_at}
          image_url={article.image_url}
        />
      ))}
    </div>
  );
};

export default Home;