const newsService = new NewsService();
const uiService = new NewsUI();
const notificationService = new NotificationsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];

// Function that handles the events of changing the select input fields
function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию  для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        uiService.clearContainer();

        if (!totalResults) notificationService.addNotification('Статьи не найдены. Измените свой запрос.');

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}

const searchInput = document.getElementById('search');

// Function that handles the events of entering characters into the
// search input field
function onKeyUpHandler(event) {
    const search = searchInput.value;

    if (search.length <= 3) {
        console.log('Введите минимум 3 символа для начала живого поиска');
        return;
    }

    newsService.getAllNews(search, (response) => {
        const { totalResults, articles } = response;

        uiService.clearContainer();

        if (!totalResults) notificationService.addNotification('Статьи не найдены. Измените свой запрос.');

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();

        console.log(`Найдено ${totalResults} статей`);
    });
}

countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchInput.addEventListener('keyup', onKeyUpHandler);


