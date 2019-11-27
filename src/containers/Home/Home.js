import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as myprojectActions } from "../../actions/myproject.actions";
import "./Home.css";
import ProgressLayout from "../../components/ProgressLayout/ProgressLayout";

class Home extends Component {
  componentWillMount() {
    debugger;
    this.props.getMyProjectData();
  }

  render() {
    debugger;
    const { userData } = this.props;
    console.log(this.props, "HOME");
    return (
      <div className="Home">
        {userData && (
          <div className="Home__container">
            {userData.data.map(section => {
              return (
                <div className="Home__container--fourColumn" key={section}>
                  <ProgressLayout progressData={section} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.myproject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMyProjectData: () => {
      dispatch(myprojectActions.getMyProjectData());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
