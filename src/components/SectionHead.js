import React from 'react';
import logo from '../grandlogo.svg';
import styled from 'styled-components';

const Head = styled.div`
  padding: 0 1.25rem;
  border-bottom: 0px solid #E1E1E1;
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
`;

const Img = styled.img`
	height: 40px;
  margin: 19px 0;
`;
/*class SectionHead extends React.Component{
	render() {
		return(
			<div className="sectionHead">
			  <a href="https://www.grand.co">
			    <img className="logo" src={logo} alt="Grand"/>
			  </a>
			</div>
		)
	}
}*/
class SectionHead extends React.Component{
	render() {
		return(
			<Head>
			  <a href="https://www.grand.co">
			    <Img className="logo" src={logo} alt="Grand"/>
			  </a>
			</Head>
		)
	}
}

export default SectionHead;