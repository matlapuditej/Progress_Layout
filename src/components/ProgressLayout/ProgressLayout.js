import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Icon } from "semantic-ui-react";
import "./ProgressLayout.css";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class ProgressLayout extends Component {
  constructor() {
    super();
    this.caluculatePercentage = this.caluculatePercentage.bind(this);
  }

  caluculatePercentage() {
    let completePercentage;
    this.props.progressData.summary.map(summarySection => {
      if (summarySection.title === "Completed") {
        completePercentage =
          (summarySection.value / this.props.progressData.total) * 100;
      }
    });

    return parseInt(completePercentage);
  }

  render() {
    const { progressData } = this.props;
    return (
      <div className="ProgressLayout">
        <Card>
          <Card.Header>{progressData.title}</Card.Header>
          <Card.Content>
            <CircularProgressbar
              percentage={this.caluculatePercentage()}
              text={`${this.caluculatePercentage()}%`}
            />
          </Card.Content>
          {progressData.summary.map(summarySection => {
            if (summarySection.title === "Completed") {
              // this.caluculatePercentage(summarySection.value);
            }
            return (
              <Card.Content extra>
                <div className="ProgressLayout__footer">
                  <div className="ProgressLayout__footerTitle">
                    <Icon name="circle" />
                    {summarySection.title}
                  </div>

                  <div className="ProgressLayout__footerValue">
                    {summarySection.value}
                  </div>
                </div>
              </Card.Content>
            );
          })}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userValues: state.myproject
  };
};

export default connect(mapStateToProps, null)(ProgressLayout);
