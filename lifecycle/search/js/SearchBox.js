class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {fixed: false};
        this.searchBar = null;
        this.getSearch = searchBar => this.searchBar = searchBar;
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.setPosition);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.setPosition);
    }

    isFixed() {
        return this.searchBar.offsetTop < window.pageYOffset;
    }

     setPosition = () => {
         const currentState = this.state.fixed;
         const newState = this.isFixed();
         if(currentState !== newState) {
             this.setState({
                 fixed: newState
             });
         }
    };

    render() {
        return <SearchBoxView fixed={this.state.fixed} refs={{getSearch: this.getSearch}}/>
    }
}
