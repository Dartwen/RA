class Cart extends React.Component {

    componentWillReceiveProps(nextProps) {
        return nextProps.isOpen && nextProps.items.length !== 0 || nextProps.isOpen !== this.props.isOpen;
    }

    render() {
        return (
            <CartView {...this.props} />
        );
    }

}
