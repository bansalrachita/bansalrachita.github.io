import React, { Component, Fragment } from 'react';
import SubTitleView from './SubTitleView';
import { subTitlesArray } from '../../constants/constants';

export default class SubTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subTitle: null,
      subTitles: subTitlesArray,
      count: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      //increment count after every 3 seconds.
      this.setState({ count: this.state.count + 1 });
    }, 5000);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.count === 1) {
      this.setState({ count: 0 });
    }
  };

  render() {
    const { subTitles, count } = this.state;
    return (
      <Fragment>
        {subTitles.map((subTitle, index) => (
          <SubTitleView
            key={index}
            text={
              Object.keys(subTitle)[0] === 'Open Source'
                ? subTitle[Object.keys(subTitle)[0]][count]
                : Object.keys(subTitle)[0]
            }
            adjective={
              Object.keys(subTitle)[0] === 'Open Source'
                ? Object.keys(subTitle)[0]
                : subTitle[Object.keys(subTitle)[0]][count]
            }
          />
        ))}
      </Fragment>
    );
  }
}
