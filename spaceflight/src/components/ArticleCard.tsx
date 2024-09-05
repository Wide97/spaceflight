import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: number;
  title: string;
  published_at: string;
  image_url: string;
}

const ArticleCard = ({ id, title, published_at, image_url }: ArticleCardProps) => {
  return (
    <div className="article-card">
      <img src={image_url} alt={title} onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300')} />
      <div className="article-content">
        <h2>{title}</h2>
        <p>{new Date(published_at).toLocaleDateString()}</p>
        <Link to={`/article/${id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default ArticleCard;