'use strict';

const FeedbackForm = props => {
    const {data, onSubmit} = props;

    const submitData = event => {
        event.preventDefault();
        const formTarget = event.currentTarget.elements;
        const form = {
            salutation: formTarget.salutation.value,
            name: formTarget.name.value,
            subject: formTarget.subject.value,
            message: formTarget.message.value,
            email: formTarget.email.value,
            snacks: Array.from(formTarget.snacks).filter(elem => elem.checked).map(elem => elem.value)
        };
        onSubmit(JSON.stringify(form));
    };

    return (
        <form className="content__form contact-form" onSubmit={submitData}>
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div className="contact-form__input-group">
                <input
                    defaultChecked={data.salutation === 'Мистер'}
                    className="contact-form__input contact-form__input--radio"
                    id="salutation-mr"
                    name="salutation"
                    type="radio"
                    value="Мистер"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>

                <input
                    defaultChecked={data.salutation === 'Мисис'}
                    className="contact-form__input contact-form__input--radio"
                    id="salutation-mrs"
                    name="salutation"
                    type="radio"
                    value="Мисис"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>

                <input
                    defaultChecked={data.salutation === 'Мис'}
                    className="contact-form__input contact-form__input--radio"
                    id="salutation-ms"
                    name="salutation"
                    type="radio"
                    value="Мис"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input
                    className="contact-form__input contact-form__input--text"
                    defaultValue={data.name}
                    id="name"
                    name="name"
                    type="text"
                />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input
                    className="contact-form__input contact-form__input--email"
                    defaultValue={data.email}
                    id="email"
                    name="email"
                    type="email"
                />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select
                    className="contact-form__input contact-form__input--select"
                    defaultValue={data.subject}
                    id="subject"
                    name="subject"
                >
                    <option>У меня проблема</option>
                    <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                <textarea
                    className="contact-form__input contact-form__input--textarea"
                    defaultValue={data.message}
                    id="message"
                    name="message"
                    rows="6"
                    cols="65"
                >
				</textarea>
            </div>
            <div className="contact-form__input-group">
                <p className="contact-form__label--checkbox-group">Хочу получить:</p>

                <input
                    className="contact-form__input contact-form__input--checkbox"
                    defaultChecked={data.snacks.includes('пицца')}
                    id="snacks-pizza"
                    name="snacks"
                    type="checkbox"
                    value="пицца"
                />
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>

                <input
                    className="contact-form__input contact-form__input--checkbox"
                    defaultChecked={data.snacks.includes('пирог')}
                    id="snacks-cake"
                    name="snacks"
                    type="checkbox"
                    value="пирог"
                />
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </div>
            <button className="contact-form__button" type="submit">Отправить сообщение!</button>
            <output id="result" />
        </form>
    );
};