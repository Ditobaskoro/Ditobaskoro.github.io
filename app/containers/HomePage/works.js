import React from 'react';
import Lightbox from 'react-image-lightbox';
import {
  SectionBlock,
  SectionTitle,
  WorkList,
  WorkItemLeft,
  WorkItemRight,
  WorkItemTitle,
  WorkItemDescLeft,
  WorkItemDescRight,
  WorkItemLink,
  WorkItemStack,
} from './homepage-styles';
import 'react-image-lightbox/style.css';
import Helo1 from '../../images/helo1.png';
import Helo2 from '../../images/helo2.png';
import Helo3 from '../../images/helo3.png';

const images = [
  Helo1,
  Helo2,
  Helo3,
];

const data = [
  {
    id: 1,
    title: 'Flexpackerz',
    desc: 'Work from anywhere, meet new people and seize opportunities with the Flexpackerz community app. The Flexpackerz app guides you to the best places for remote working. Varying from cozy cafés for inspiration, peaceful libraries for focusing, to innovative coworking spaces to grow your business.',
    stack: '[Hybrid Mobile Apps: React Native, Redux, Firebase]',
    link: 'https://apps.apple.com/us/app/flexpackerz/id1053973030',
    images: false,
  },
  {
    id: 2,
    title: 'Brickler',
    desc: 'Brickler app you can calculate what you can spend, search for houses and compare mortgage providers. With the help of the building blocks below, Brickler wants to offer you a unique user experience during the search for your home.',
    stack: '[Hybrid Mobile Apps: React Native, Redux, Stripe]',
    link: 'https://apps.apple.com/mz/app/brickler/id1163139488',
    images: false,
  },
  {
    id: 3,
    title: 'Skill Tracker',
    desc: 'Skill Tracker enables students to track their ATL skill develop through a simple and easy logging process. Gamification integrated within the app encourages students to log skills across subject areas and at different skill levels.',
    stack: '[Hybrid Mobile Apps: React Native, Redux, Firebase]',
    link: 'https://play.google.com/store/apps/details?id=com.skilltracker&hl=en',
    images: false,
  },
  {
    id: 4,
    title: 'Helochat Dashboard',
    desc: 'Dashboard for Helochat account manager, track user statistically by location, age, religion, or custom. Features including group management, Organization structure, question builder, dynamic role permission, etc.',
    stack: '[Web: React, Redux, Antd]',
    link: '',
    images: true,
  },
];

export default class Works extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const renderWorks = data.map((item, index) => (index % 2 !== 0 ? (
      <WorkItemLeft key={item.id}>
        <WorkItemTitle>
          {item.title}
        </WorkItemTitle>
        <WorkItemDescLeft>
          {item.desc}
        </WorkItemDescLeft>
        <WorkItemStack>
          {item.stack}
        </WorkItemStack>
        {item.images
          ? (
            <WorkItemLink onClick={() => this.setState({ isOpen: true })}>
                Screenshot
            </WorkItemLink>
          )
          : (
            <WorkItemLink href={item.link} target="_blank">
                Link
            </WorkItemLink>
          )
          }
      </WorkItemLeft>
    ) : (
      <WorkItemRight key={item.id}>
        <WorkItemTitle>
          {item.title}
        </WorkItemTitle>
        <WorkItemDescRight>
          {item.desc}
        </WorkItemDescRight>
        <WorkItemStack>
          {item.stack}
        </WorkItemStack>
        {item.images
          ? (
            <WorkItemLink onClick={() => this.setState({ isOpen: true })}>
                Screenshot
            </WorkItemLink>
          )
          : (
            <WorkItemLink href={item.link} target="_blank">
                Link
            </WorkItemLink>
          )
          }
      </WorkItemRight>
    )));
    return (
      <SectionBlock>
        <SectionTitle>WORKS</SectionTitle>
        <WorkList>
          {renderWorks}
        </WorkList>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
            }
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
            }
          />
        )}
      </SectionBlock>
    );
  }
}
