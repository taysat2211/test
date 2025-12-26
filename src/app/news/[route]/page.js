import React from 'react';
import NavBar from '@/app/components/header/NavigationBar';
import newsData from '@/data/news.json';

function Details({params}) {

  const post = newsData.find(p => p.id === params.route);
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1><b>{post.title}</b></h1>
        <i>{post.date}</i>
        <p>{post.description}</p>
        <img src={post.image} alt={post.title} className="news-image"/>
      </div>
      
    </div>
  )
}

export async function generateStaticParams() {

  const data = newsData.map(item => ({
    route: item.id
  }));
  return data;
}

export default Details;