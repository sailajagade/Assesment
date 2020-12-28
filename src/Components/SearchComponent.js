import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { fetchShow } from "../Containers/CommonMethods";
import "../Css/Shows.css";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchPosts: [],
      showDetails: false,
      shows: [],
      showData: [],
      showTab: "",
      searchFlag: false,
    };
  }
  onShowSearch = async (event) => {
    const { value } = event.target;
    this.setState({ showDetails: false, searchValue: value });
    event.keyCode === 13 &&
      this.props.history.push({
        pathname: `/displayShows/${value}`,
        state: {
          searchFlag: true,
        },
      });
  };

  render() {
    return (
      <div className="nav">
        <div className="col-lg-3 col-md-4 mt-3 Tvshows">
          <b>
            <h1 className=" color">TV Shows</h1>
          </b>
        </div>
        <div className="col-lg-5 col-md-7 mt-2">
          <div className="search-box">
            <input
              id="searchbox"
              placeholder=""
              onKeyUp={(event) => this.onShowSearch(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchComponent);
