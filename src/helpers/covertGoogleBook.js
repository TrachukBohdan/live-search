export default {

    convertToBookPreview(bookItem) {

        let volumeInfo = bookItem.volumeInfo;

        let authors = '';
        let title = '';
        let imgCoverUrl = '/img/book.png';
        let description = '';

        if ('authors' in volumeInfo) {
            authors = volumeInfo.authors.join(', ');
        }

        if ('title' in volumeInfo) {
            title = volumeInfo.title;
        }

        if ('imageLinks' in volumeInfo) {
            imgCoverUrl = volumeInfo.imageLinks.smallThumbnail;
        }

        if ('description' in volumeInfo) {
            description = volumeInfo.description;
            if (description.length > 500) {
                description = description.substr(0, 500) + ' ...'
            }
        }

        return {
            imgCoverUrl: imgCoverUrl,
            title: title,
            author: authors,
            description: description,
            bookId: bookItem.id
        };
    },

    convertToBookDetails(book) {

        let id = '';
        let imgCoverUrl = '/img/book.png';
        let title = '';
        let price = '';
        let priceCurrency = '';
        let authors = '';
        let categories = '';
        let description = '';
        let identifiers = [];
        let language = '';
        let pageCount = '';
        let publishedDate = '';
        let publisher = '';

        let volumeInfo = book.volumeInfo;

        if ('id' in book) {
            id = book.id;
        }

        if (('imageLinks' in volumeInfo) && ('medium' in volumeInfo.imageLinks)) {
            imgCoverUrl = volumeInfo.imageLinks.medium;
        }

        if ('title' in volumeInfo) {
            title = volumeInfo.title;
        }

        if ('saleInfo' in book && 'listPrice' in book.saleInfo) {
            price = book.saleInfo.listPrice.amount;
            priceCurrency = book.saleInfo.listPrice.currencyCode;
        }

        if ('authors' in volumeInfo) {
            authors = volumeInfo.authors.join(', ');
        }

        if ('categories' in volumeInfo) {
            categories = volumeInfo.categories.join(', ');
        }

        if ('description' in volumeInfo) {
            description = volumeInfo.description;
        }

        if ('industryIdentifiers' in volumeInfo) {
            identifiers = volumeInfo.industryIdentifiers;
        }

        if ('language' in volumeInfo) {
            language = volumeInfo.language;
        }

        if ('pageCount' in volumeInfo) {
            pageCount = volumeInfo.pageCount;
        }

        if ('publishedDate' in volumeInfo) {
            publishedDate = volumeInfo.publishedDate;
        }

        if ('publisher' in volumeInfo) {
            publisher = volumeInfo.publisher;
        }

        return {
            id,
            imgCoverUrl,
            title,
            price,
            priceCurrency,
            authors,
            categories,
            description,
            identifiers,
            language,
            pageCount,
            publishedDate,
            publisher
        }
    }

}