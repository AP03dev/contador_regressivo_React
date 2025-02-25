import './Counter.css'

const Counter = ({ number, title, eventColor}) => {

  return (
    <div className='counter'>
        <p className="counter-number" style={{backgroundColor: eventColor}}>{number}</p>

        <h3 className='counter-text' style={{color: eventColor}}>
          {title}
        </h3>
        
    </div>
  )
}

export default Counter