class SubscribeForm extends React.Component {
    state = {
        email: '',
        checkEmailValid: ''
    };

    checkEmail = (event) => {
        let checkValueAndLength;
        if (!event.currentTarget.value.length) {
            checkValueAndLength = '';
        } else {
            if (event.currentTarget.validity.valid) {
                checkValueAndLength = 'is-valid';
            } else {
                checkValueAndLength = 'is-error';
            }
        }
        this.setState({
            email: event.currentTarget.value,
            checkEmailValid: checkValueAndLength
        })
    };

    render() {
        const {email, checkEmailValid} = this.state;
        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${checkEmailValid}`} onSubmit={(event) => event.preventDefault}>
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">Email</label>
                        <input type="email" id="input-email" placeholder="Email" className="form-control" value={email}
                               onChange={this.checkEmail}/>
                        <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                        <button type="submit" className="form-next">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}