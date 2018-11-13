'use strict';

fetch('https://neto-api.herokuapp.com/etsy')
    .then(result => {
        if (200 <= result.status && result.status < 300) {
            return result;
        }
        throw new Error(result.statusText);
    })
    .then(result => result.json())
    .then(result => {
        ReactDOM.render(
            <Listing items={result}/>,
            document.getElementById('root')
        );
    })
    .catch(error => console.log(error));

function Listing({items}) {
    function titleProposal(title) {
        return title.length > 50 ? title.slice(0, 50) + '...' : title;
    }

    function currencyOutput(price, currency) {
        switch (currency) {
            case 'USD':
                return `$${price}`;
            case 'EUR':
                return `€${price}`;
            default:
                return `${price} ${currency}`;
        }
    }

    function remainingQuantity(quantyti) {
        return quantyti <= 10 ? 'level-low' : quantyti <= 20 ? 'level-medium' : 'level-high';
    }

    if (!items.length) {
        return null;

    }

    const itemList = items.map(item => {
        return (

            <div key={item.listing_id} className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN}/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{titleProposal(item.title)}</p>
                    <p className="item-price">{currencyOutput(item.price, item.currency_code)}</p>
                    <p className={`item-quantity ${remainingQuantity(item.quantity)}`}>{item.quantity} left</p>
                </div>
            </div>
        )
    });

    return (<div className="item-list">{itemList}</div>);
}

