
export const CharacterList = ({ characters = [] }) => {
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-5">
                    <div className="card" style={{minWidth: "250px"}}>
                        <img className="card-img-top" src={item.image}  />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>Specie: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


