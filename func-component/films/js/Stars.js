'use strict';

/**
 * @return {boolean}
 */
function Stars({count}) {
    return (count >= 1 && count <= 5) ? <ul
        className="card-body-stars u-clearfix">{calculationStars(count)}</ul> : false;
}

Stars.defaultProps = {stars: 0};

function calculationStars(count) {
    let itemStar = [];
    let i = 0;
    while (i !== count) {
        itemStar.push(<li key={i}><Star/></li>);
        i++;
    }

    return itemStar;
}

