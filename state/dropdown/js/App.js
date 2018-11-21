'use strict';

class App extends React.Component {

    options = [];

    state = {
        active: this.props.options[0],
        open: false
    };


    handleChange = (option) => {
        this.setState({
            active: option
        });
    };

    toggleOpen = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        const {open, active} = this.state;
        return (
            <div className="container">
                <div className={`dropdown-wrapper ${open ? "open" : ""}`}>
                    <button className={"btn"} onClick={this.toggleOpen}>
                        <span>Account Settings</span>
                        <i className="material-icons">public</i>
                    </button>
                    <ul className="dropdown">
                        {this.props.options.map((option) => (
                            <li
                                className={option === active ? "active" : ""}
                                onClick={() => this.handleChange(option)}>
                                <a href="#">{option}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
