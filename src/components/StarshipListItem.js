function StarshipListItem(props) {
    const starships = props.starships;
    return (
        <div>
            <h3>Name: {starships.name}</h3>
            <h4>Model: {starships.model}</h4>
            <h4>Crew: {starships.crew}</h4>
        </div>
    )
}

export default StarshipListItem;