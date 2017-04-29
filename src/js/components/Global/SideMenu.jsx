import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class SideMenu extends Component {

  render() {
    const homeSvg = `
      <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <path d="M18.5287855,9.77046104 L18.5287855,20.6240172 L15.1137744,20.6240172 L15.1137744,13.7539314 C15.1137744,13.3735704 14.8073241,13.06594 14.4284224,13.06594 L7.59840005,13.06594 C7.22145645,13.06594 6.91500619,13.3725876 6.91304804,13.7519657 L6.89150841,20.6240172 L3.47160187,20.6240172 L3.47160187,9.77046104 C3.47160187,9.71542173 3.45299946,9.66726233 3.44125057,9.6161544 L11.0271183,1.68164761 L18.5620741,9.60730879 C18.548367,9.66038242 18.5287855,9.7124732 18.5287855,9.77046104 M21.8096635,11.0294853 L11.5215508,0.211311651 C11.392313,0.0756790565 11.2141214,0 11.0271183,0 C10.8401151,0 10.6619235,0.0756790565 10.5326857,0.211311651 L0.19072389,11.0294853 C-0.0716680229,11.3036991 -0.0618772799,11.7390994 0.21128445,12.0015189 C0.48444618,12.2649214 0.917197021,12.2570586 1.17958893,11.981862 L2.10089785,11.0176912 L2.10089785,21.3120086 C2.10089785,21.6923695 2.40832718,22 2.78624986,22 L7.57490227,22 C7.95184587,22 8.25829613,21.6933524 8.26025428,21.3139743 L8.28179391,14.4419228 L13.7430704,14.4419228 L13.7430704,21.3120086 C13.7430704,21.6923695 14.0495206,22 14.4284224,22 L19.2141376,22 C19.5930393,22 19.8994896,21.6923695 19.8994896,21.3120086 L19.8994896,11.0137598 L20.8198194,11.9828449 C20.9549317,12.1224089 21.1350813,12.1941565 21.315231,12.1941565 C21.4855899,12.1931737 21.6569279,12.1302716 21.789103,12.0015189 C22.0622647,11.7390994 22.0710764,11.3036991 21.8096635,11.0294853" id="Icon" stroke="none" fill="#C0C4CA" fill-rule="evenodd"></path>
      </svg>`
    const calendarSvg = `
      <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M20,2.0005 L17,2.0005 L17,0.0005 L15,0.0005 L15,6.0005 L17,6.0005 L17,4.0005 L20,4.0005 L20,19.0005 L2,19.0005 L2,4.0005 L4,4.0005 L4,2.0005 L2,2.0005 C0.896,2.0005 0,2.8965 0,4.0005 L0,19.0005 C0,20.1045 0.896,21.0005 2,21.0005 L20,21.0005 C21.104,21.0005 22,20.1045 22,19.0005 L22,4.0005 C22,2.8965 21.104,2.0005 20,2.0005" id="Fill-285" fill="#C0C4CA"></path>
              <polygon id="Fill-286" fill="#C0C4CA" points="7 4.0005 14 4.0005 14 2.0005 7 2.0005 7 0.0005 5 0.0005 5 6.0005 7 6.0005"></polygon>
              <polygon id="Fill-287" fill="#C0C4CA" points="8 8 4 8 4 12 8 12"></polygon>
              <polygon id="Fill-288" fill="#C0C4CA" points="13 8 9 8 9 12 13 12"></polygon>
              <polygon id="Fill-289" fill="#C0C4CA" points="14 12 18 12 18 8 14 8"></polygon>
              <polygon id="Fill-290" fill="#C0C4CA" points="4 17 8 17 8 13 4 13"></polygon>
              <polygon id="Fill-291" fill="#C0C4CA" points="9 17 13 17 13 13 9 13"></polygon>
          </g>
      </svg>`

    return (
      <div className='SideMenu'>
        <ul>
          <IndexLink className="link" to={ routeCodes.TREATMENTS }>
            <div dangerouslySetInnerHTML={{ __html: homeSvg}}></div>
            <div>Treatments</div>
          </IndexLink>
          <Link className="link" to={ routeCodes.REFER }>
            <div dangerouslySetInnerHTML={{ __html: calendarSvg}}></div>
            <div>Refer</div>
          </Link>
        </ul>
      </div>
    );
  }
}
