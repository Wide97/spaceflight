import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ArticleDetailData {
  id: number;
  title: string;
  published_at: string;
  image_url: string;
  summary: string;
  newsSite: string;
  url: string;
}

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleDetailData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="article-detail">
      <button onClick={() => navigate('/')}>Back to Home</button>
      <img src={article.image_url} alt={article.title} onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/1000x500')} />
      <div className="article-content">
        <h1>{article.title}</h1>
        <p><strong>Published:</strong> {new Date(article.published_at).toLocaleDateString()}</p>
        <p><strong>Summary:</strong> {article.summary}</p>
        <p><strong>News Site:</strong> {article.newsSite}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
      </div>
    </div>
  );
};

export default ArticleDetail;