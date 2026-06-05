import './HealthBar.css'

interface Props{
    healthPercentage: number;
}

export default function HealthBar({ healthPercentage } : Props) {
    return(
        <div className="health-bar-div">
            <div className="health-bar" style={{width: `${healthPercentage}%`}}></div>
        </div>
    )
}