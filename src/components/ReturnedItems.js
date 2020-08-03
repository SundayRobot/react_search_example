import React from "react";
import { Link } from "react-router-dom";
import { slideInUp } from 'animate.css'

const ReturnedItems = (props) =>{
  return (
    <div>
      {props.itemsinstate.map(item =>{
        const desc1 = `${item && item.data && item.data[0] && item.data[0].description}`;
        //console.log(desc1.length)
        return (
          <div className="item-holder animate__animated animate__slideInUp" key={item.data[0].nasa_id}>
            <img className="item-image" src={item && item.links && item.links[0].href} alt={item.data[0].nasa_id} />
            <div className="item-content">
              <h3 className="descriptive-h3">{item.data[0].title.length < 20 ? `${item.data[0].title}` : `${item.data[0].title.substring(0,25)}...`}</h3><br/>
              <p className="descriptive-text">{desc1.length < 90 ? desc1 : `${desc1.substring(0,95)}...`}</p><br/>
              <button className="read-more-button">
                <Link to={{pathname: `/item/${item.data[0].nasa_id}`, 
                state: {
                  image: item && item.links && item.links[0].href,
                  title: item.data[0].title,
                  desc:  item && item.data && item.data[0].description,
                  keywords: item.data[0].keywords
                }

                  }}>
                read more
                </Link>
              </button>
          </div>
        </div>
        )
    })}
  </div>
  )
}

export default ReturnedItems;