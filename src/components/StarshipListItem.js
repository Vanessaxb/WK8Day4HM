function StarshipListItem(props) {
    const starship = props.starship;
    return (
        <div>
            <h3>Name: {starship.name}</h3>
            <h4>Cell: {starship.model}</h4>
            <h4>Email: {starship.crew}</h4>
        </div>
    )
}

export default StarshipListItem;