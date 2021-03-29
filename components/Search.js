import React, { useState} from 'react';

import { connect } from 'react-redux';

import './post.css'





function SearchPost(props) {

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(props.posts);

    const handleChange = value => {
        setSearchText(value);
        filterData(value);
      };

      const excludeColumns = ["id"];

      const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(props.posts);
        else {
          const filteredData =props.posts.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setData(filteredData);
        }
      }

      

    return (
       
       <div className="Search">
    
      <form >
        
          Search <input 
          type="text" name="focus" required class="search-box" 
        placeholder="Type to Search..."
        onChange={e => handleChange(e.target.value)} />	
        <button class="close-icon" type="reset"></button>
    	</form>

        <div >
        {data.map((d, i) => {
        return <div key={i} className="box" >
          
          {d.title}<br />
          {d.message}<br />
          
          </div>
        })}
        
       
        </div>

       
    </div>
                
           
    )
}


const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(SearchPost);