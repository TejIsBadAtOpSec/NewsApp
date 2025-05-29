// script.js
const apiKey = 'df1bfdead7394c7693041a2af6877607';
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('news-container');
    data.articles.forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.className = 'news-article';

      articleEl.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;

      container.appendChild(articleEl);
    });
  })
  .catch(err => {
    console.error('Error fetching news:', err);
  });
