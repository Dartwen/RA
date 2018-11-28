class SubscribeForm extends React.Component {
    state = {
        email: '',
        checkEmailValid: false
    };

    handleCheckEmail = (event) => {
        let checkValueAndLength = event.target;
        this.setState({
            email: checkValueAndLength.value,
            checkEmailValid: !checkValueAndLength.validity.valid
        })
    };

    render() {
        const {email, checkEmailValid} = this.state;
        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${checkEmailValid ? 'is-error' : 'is-valid'}`} onSubmit={(event) => event.preventDefault}>
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">Email</label>
                        <input type="email" id="input-email" placeholder="Email" className="form-control" value={email}
                               onChange={this.handleCheckEmail}/>
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