import img1 from './images/Pinarayi Vijayan.jpg'
import img2 from './images/R. Bindhu.jpg'
import img3 from './images/Dr Shalij P R.jpg'

const images={
    "Pinarayi Vijayan" : img1,
    "R. Bindu" : img2,
    "Dr Shalij P R" : img3
}

function Leadership() {
    const leaders = [["Pinarayi Vijayan","Chief Minister"],["Pinarayi Vijayan","Chief Minister"],["Pinarayi Vijayan","Chief Minister"],["Pinarayi Vijayan","Chief Minister"],["R. Bindu","Minister of Higher Education"],["Dr Shalij P R","Director of DTE"]]
    let cards=[]
    leaders.forEach(element => {
        cards.push(<Card name={element[0]} desig={element[1]} />)
    });
    return (
        <div className="leadership">
            <h1 className="heading">Leadership</h1>
            <div className="lead-cards">
                {cards}
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <div className="lead-card">
            <img src={images[props.name]} alt={`${props.name}.jpg`} className="lead-img"></img>
            <div>
                <label className="lead-name">{props.name}</label>
                <p className="lead-desig">{props.desig}</p>
            </div>
        </div>
    )
}

export default Leadership