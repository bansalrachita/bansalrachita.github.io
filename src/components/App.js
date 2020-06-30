import { Fragment } from 'react';
import React, { Component } from 'react';
import { undergradBadges, logoLinks, moreLinks } from '../constants/constants';
import SubTitle from './subtitle/SubTitle';
import Summary from './summary/SummaryView';
import WorkView from './work/WorkView';
import EducationView from './education/EducationView';
import { Helmet } from 'react-helmet';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.scrollArrow1Ref = React.createRef();
    this.scrollArrow2Ref = React.createRef();
    this.scrollArrow3Ref = React.createRef();

    this.state = {
      undergradBadges: undergradBadges,
    };
  }

  scrollDown1 = () => {
    this.scrollArrow1Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  scrollDown2 = () => {
    this.scrollArrow2Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  scrollDown3 = () => {
    this.scrollArrow3Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    const {
      url,
      thumbNail,
      logos,
      summary,
      work,
      education,
      metaData,
    } = this.props;

    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{metaData.defaultTitle}</title>
          <link rel="canonical" href={metaData.siteMetadata} />
          <meta
            property="og:description"
            content={metaData.defaultDescription}
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href={`${metaData.defaultImage}`}
          />
        </Helmet>
        <div className="parallax">
          <div className="folder-top">
            <div>
              <img alt="logo" className="thumbnail-big" src={thumbNail} />
            </div>
            <div className="folder-top-text">
              <div className="sub-titles">
                <h3>Rachita Bansal</h3>
                <div className="title">
                  <SubTitle />
                </div>
              </div>
              <div className="thumbnail-small">
                {logos.map(({ node }, index) => (
                  <a key={index} className="link" href={logoLinks[index]}>
                    <img
                      key={index}
                      className="logo-img"
                      border="0"
                      alt="medium"
                      src={node.publicURL}
                      width="30"
                      height="30"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="folder-right">
            <Summary summary={summary} />
            <img
              ref={this.scrollArrow1Ref}
              onClick={this.scrollDown1}
              className="arrow-img-1"
              src={url}
              alt="arrow-down"
              width="70px"
              height="70px"
            />
          </div>
          <div className="folder-right">
            <WorkView work={work} />
            <img
              ref={this.scrollArrow2Ref}
              onClick={this.scrollDown2}
              className="arrow-img-2"
              src={url}
              alt="arrow-down"
              width="70px"
              height="70px"
            />
          </div>
        </div>
        <div className="parallax">
          <div className="folder-right">
            <EducationView education={education} />
            <img
              ref={this.scrollArrow3Ref}
              onClick={this.scrollDown3}
              className="arrow-img-1"
              alt="arrow-down"
              src={url}
              width="70px"
              height="70px"
            />
          </div>
        </div>
        <div className="parallax">
          <div>
            <div className="folder-right">
              <div className="links">
                <h1>More interesting links below</h1>
                <ul>
                  {moreLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.value}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.key}
                      </a>{' '}
                      - {link.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
