import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

class SideDivision extends Component {
    render() {
        const { json: { image, subtitle, title, tags } = {} } = this.props;

        return (
            <div style={{ height: "80vh" }}>
                <Image src={image}/>
                <Title>{title}</Title>
                <ProductInfo>{subtitle}</ProductInfo>
                <hr style = {{  backgroundColor: "#8c8c8c", height: "0px" }}/>
                <div>
                    { tags.map(v => <Card key={v}> <span>{v}</span> </Card>) }
                </div>
                <hr />
            </div>
        )
    }
}


const ProductInfo = styled.span`
  display: block;
  text-align: center;
  color: #8c8c8c;
`;

const Title = styled.h1`
  font-size: 1.3em;
  text-align: center;
  color: black;
`;

const Image = styled.img`
    width: 60%;
    margin: 0 auto;
    display: block;
`;

const Card = styled.div`
    height: 30px;
    color: #535353;
    border: 1px solid #8c8c8c;
    display: inline-flex;
    font-size: 0.9em;
    box-sizing: border-box;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    margin: 0.25em; 
    & > span {
        display: flex;
        align-items: center;
        user-select: none;
        padding: 0 15px;
    }
`;


const mapStateToProps = state => {
    return {
        products: state.api.products,
        json: state.api.json,
    };
};

export default connect(
    mapStateToProps,
    null
)(SideDivision);