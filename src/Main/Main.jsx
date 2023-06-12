import './Css/Main.css';

const Projects = (props) => {
    return (
        <div className='AppBody_Projects'>
            <h1>{props.name}</h1>
            <img src={props.img} width='370px' height='220px' />
            <p>{props.info}</p>
            <a>Цена: <span>{props.cost}</span></a>
        </div>
    )
}

const Main = (props) => {
    debugger
    let ProjectsMapping = props.state.ProjectsReducer.Projects.map(mapd => <Projects id={mapd.id} name={mapd.name} img={mapd.img} info={mapd.info} cost={mapd.cost} />);
    return (
        <div className='Main'>
            {ProjectsMapping}
        </div>
    )
}
export default Main;