const SearchBox = ({filterBooks, value}) => {

  const filters = (event) => {
        filterBooks(event.currentTarget.value);
    };


    return (
        <input type="text" placeholder="Поиск по названию или автору" onChange={filters} value={value}/>
    );
};