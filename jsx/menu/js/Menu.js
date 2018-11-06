const Menu = (props) => {
        const {items, opened} = props;

        if (!opened) {
            return (
                <div className="menu">
                    <div className="menu-toggle"><span></span></div>
                </div>
            )
        }
       const item = items.map((list) => <li><a href={list.href}>{list.title}</a></li>);

        return(
            <div className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                <nav>
                    <ul>
                        {item}
                    </ul>
                </nav>
            </div>
        )

};