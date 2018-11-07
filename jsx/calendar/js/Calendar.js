const Calendar = function ({date}) {
    const month = date.toLocaleString('ru', {month: 'long'}).charAt(0).toUpperCase() + date.toLocaleString('ru', {month: 'long'}).slice(1); // месяц с заглавной буквы
    return (
        <div className="ui-datepicker">
            {dayNow(date)} {/*Блок вывода сегодняшней даты*/}
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{month}</span>&nbsp;<span
                    className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                {createCalendar(date)} {/*Блок вывода календаря*/}
            </table>
        </div>
    )
};


function dayNow(date) {
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const weekday = date.toLocaleString('ru', {weekday: 'long'}).toUpperCase();

    return (
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{weekday}</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                <div className="ui-datepicker-material-month">{month[date.getMonth()]}</div>
                <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
            </div>
        </div>
    )

}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    let day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day - 1;
}

function weeksMonth(weeks, id1, id2) {
    if (id1 === 1 && id2 === 7) {
        return weeks.map((item, id) => {
            if (id < id2) {
                let config;
                if (item > 1 && 7 < item) {
                    config = 'ui-datepicker-other-month';
                }
                if (item <= 7 && item === new Date().getDate()) {
                    config = 'ui-datepicker-today';
                }

                return (<td className={config} key={id}>{item}</td>)
            }
        })
    }
    else if (id1 >= 7 && id2 <= 28) {
        return weeks.map((item, id) => {
            if ((id >= id1 && id < id2)) {
                let config;
                if (item === new Date().getDate()) {
                    config = 'ui-datepicker-today';
                }

                return (<td className={config} key={id}>{item}</td>);
            }
        })
    } else if (id1 >= 28 && id2 <= 42) {
        if(weeks.length < id2){
            return;
        }
        return weeks.map((item, id) => {
            if (id >= id1 && id < id2) {
                let config = '';
                if (item < 7) {
                    config = 'ui-datepicker-other-month';
                }
                if (item > 7 && item === new Date().getDate()) {
                    config = 'ui-datepicker-today';
                }

                return (<td className={config} key={id}>{item}</td>);
            }
        })
    }
}

function createCalendar(date) {
    const dayArray = calcDay(date);

    return (
        <tbody>
        <tr>
            {weeksMonth(dayArray, 1, 7)}
        </tr>
        <tr>
            {weeksMonth(dayArray, 7, 14)}
        </tr>
        <tr>
            {weeksMonth(dayArray, 14, 21)}
        </tr>
        <tr>
            {weeksMonth(dayArray, 21, 28)}
        </tr>
        <tr>
            {weeksMonth(dayArray, 28, 35)}
        </tr>
        <tr>
            {weeksMonth(dayArray, 35, 42)}
        </tr>
        </tbody>)
}

function calcDay(date) {
    const month = date.getMonth(); //получаем месяц
    const getMonthYear = new Date(date.getFullYear(), date.getMonth());
    const copyMonthYear = new Date(getMonthYear);
    let dayArray = [];
    let days = 1;

    for (let i = 0; i < getDay(getMonthYear); i++) {
        dayArray.push(copyMonthYear.getDate(copyMonthYear.setDate(copyMonthYear.getDate() - 1)));
    }

    dayArray.reverse();

    while (getMonthYear.getMonth() === month) {
        dayArray.push(getMonthYear.getDate());
        getMonthYear.setDate(getMonthYear.getDate() + 1);
    }

    while (dayArray.length % 7 !== 0) {
        dayArray.push(days++);
    }

    return dayArray;
}
