'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function DateParse(Component) {
    return class extends React.Component {
        componentWillMount() {
            this.dateCalculate();
        }

        dateCalculate() {
            let minute = 1000*60, hours = minute*60, days = hours*24;
            const timePassed = new Date().getTime() - new Date(this.props.date).getTime();

            if(Math.floor(timePassed/days)) {
                return this.props.date =  Math.floor(timePassed/days) + ' дней назад';
            }
            if(Math.floor(timePassed/hours)) {
                return this.props.date = '5 часов назад';
                //выводим сколько часов назад было размещено
                //  return this.props.date =  Math.floor(timeDiff/hours) + ' часов назад';
            }
            else return this.props.date = '12 минут назад';
        }

        render() {
            return <Component {...this.props} />;
        }
    }
}

const DateTimePretty = DateParse(DateTime);