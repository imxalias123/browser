import './index.css' 

const HistoryItem = (props) => {
      const {details, deleteHistory} = props
      const {id,timeAccessed,logoUrl,title,domainUrl} = details
      const onDelete = () => {
          deleteHistory(id)
      }

    return (
        <li className="item-container">
            <div className="time-content-separation">
                <div className="except-time">
                    <p className="time">{timeAccessed}</p> 
                    <img src={logoUrl} alt="domain logo" className="logo"/>
                    <p className='title'>{title}</p> 
                    <p className="domainUrl">{domainUrl}</p>   
                 </div>            
                <button className="button" onClick={onDelete} >
                        <img  src="https://assets.ccbp.in/frontend/react-js/delete-img.png" 
                        alt="delete" className="delete"/>
                </button>
               
            </div>
            
        </li>
           
    )
}

export default HistoryItem