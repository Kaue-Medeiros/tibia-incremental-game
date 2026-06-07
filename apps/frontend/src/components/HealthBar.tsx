import './HealthBar.css'

interface Props{
    maxHealth: number;
    currentHealth: number;
}

export default function HealthBar({ maxHealth, currentHealth } : Props) {
    return(
        <>
        <p>{currentHealth} / {maxHealth}</p>
        <div className="health-bar-div">
            <div className="health-bar" style={{width: `${(currentHealth / maxHealth) * 100}%`}}></div>
        </div>
        </>
    )
}