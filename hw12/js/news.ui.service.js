class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        const template = NewsUI.generateArticleTemplate(article);

        // console.time();
        // this.newsContainer.insertAdjacentHTML('afterbegin', template);
        // console.timeEnd();

        // console.time();
        this.newsContainer.appendChild(template);
        // console.timeEnd();
    }

    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        // searching for articles by keyword 'helicopter' takes 4.1-5.7 ms
        // return `
        // <div class="col s12 m6">
        //     <div class="card">
        //         <div class="card-image">
        //             <img src="${article.urlToImage}">
        //         </div>
        //         <div class="card-content">
        //             <span class="card-title">${article.title || ''}</span>
        //             <p>${article.description || ''}</p>
        //         </div>
        //         <div class="card-action">
        //             <a href="${article.url}" target="_blank">Read more</a>
        //         </div>
        //     </div>
        // </div>
        // `;

        // searching for articles by keyword 'helicopter' takes 3.8-4.2 ms
        const articleContainer = document.createElement('div');
        articleContainer.classList.add('col', 's12', 'm6');

        const card = document.createElement('div');
        card.classList.add('card');

        articleContainer.appendChild(card);

        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');

        const img = document.createElement('img');
        img.src = `${article.urlToImage}`;

        cardImage.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardTitle = document.createElement('span');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = `${article.title || ''}`;

        const description = document.createElement('p');
        description.textContent = `${article.description || ''}`;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(description);

        const cardAction = document.createElement('div');
        cardAction.classList.add('card-action');

        const link = document.createElement('a');
        link.href = `${article.url}`;
        link.target = '_blank';
        link.textContent = 'Read more';

        cardAction.appendChild(link);

        card.appendChild(cardImage);
        card.appendChild(cardContent);
        card.appendChild(cardAction);

        return articleContainer;
    }
}