import React from 'react';

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/SearchBar.scss";


export default function SearchBar(props) {
    return (
        <div>
            <div className="row container-search-bar">
        <div className="col-lg-12">
          <h1 >
            Search countries. 
          </h1>
          <div className="mb-3">
            {/* {loading && (
              <img src={loadingIcon} alt="loading" className="loadingIcon" />
            )} */}
          </div>

          <form onSubmit={props.FindCountry}>
            <div className="input-group">
              <input
                className="form-control form-control-lg shadow-none form-input-search-bar"
                type="text"
                placeholder="Search for any country"
                autoFocus
                name="query"
                value={props.query}
                onChange={props.handleSearchInput}
              
              />
              <div className="input-group-append">
                <button className="btn search-button shadow-none" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
	  
	  
   
        </div>
    )
}
