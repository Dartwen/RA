'use strict';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filters: 'All'
        };
    }


    handleClickFilters = (filter) => {
        this.setState({
            filters: filter
        })
    };

    projectsGet = (projects, filters) => {
        if (filters === 'All') return projects;
        let projectsFilters = [];
        projects.map((item) => {
            item.category === filters ? projectsFilters.push(item) : '';
        });

        return projectsFilters;
    };

    render() {
        const {filters} = this.state;

        return (<div>
                <Toolbar
                    filters={this.props.filters}
                    selected={filters}
                    onSelectFilter={this.handleClickFilters}/>
                <Portfolio projects={this.projectsGet(this.props.projects, filters)}/>
            </div>
        );
    }
}
