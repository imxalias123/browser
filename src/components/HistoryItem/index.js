import './index.css' 

const HistoryItem = (props) => {
      const {details} = props
      const {id,timeAccessed,logoUrl,title,domainUrl} = details
    return (
        <li className="item-container">
            <div className="time-content-separation">
                <div className="">
                   <p className="time">{timeAccessed}</p> 
                </div>
                <div className="except-time">
                  
                        <img src={logoUrl} alt="domain logo" className="logo"/>
                        <div>
                            <p className='title'>{title}</p> 
                            <p className="domainUrl">{domainUrl}</p>
                        </div>
                
                    <button className="button">
                        <img  src="https://assets.ccbp.in/frontend/react-js/delete-img.png" 
                        alt="delete" className="delete"/>
                    </button>
                </div>
            </div>
            
        </li>
           
    )
}

export default HistoryItem