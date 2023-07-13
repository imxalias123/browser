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
                <div className="">
                    <img src={logoUrl} alt="" className="logo"/>
                    <div className="">
                        <p>{title}</p> 
                        <p>{domainUrl}</p>
                    </div>
                    <button className="button">
                        <img  src="https://assets.ccbp.in/frontend/react-js/delete-img.png" 
                        alt="delete" className=" delete"/>
                    </button>
                </div>
            </div>
            
        </li>
           
    )
}

export default HistoryItem