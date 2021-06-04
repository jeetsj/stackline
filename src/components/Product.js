import React, {Component} from 'react';
import {connect} from "react-redux";
import {FAKE_ENDPOINT} from '../constants';
import {getProducts} from '../store/actions';
import styled from 'styled-components';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './../App.css';

import SideDivision from './SideDivision';
import Graph from './Chart';
import SalesTable from './TableData';

import { ReactComponent as Logo } from '../icons/stackline_logo.svg';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
});

class Product extends Component {

    componentDidMount() {
        this.props.getProducts(FAKE_ENDPOINT);
    }

    render() {
        const {classes} = this.props;

        return (
            <>
                <Header style = {{ backgroundColor: "#8ca8d5" }} >
                    < Logo style = {{ height: "20px", marginLeft: "40" }}/>
                </Header>
                <div className={classes.root} spacing={24}>
                    <Grid container>
                        <Grid className={classes.paper} item sm={3}>
                            <Container>
                                <SideDivision />
                            </Container>
                        </Grid>
                        <Grid className={classes.paper} item sm={9}>
                            <Container>
                                <h2 style = {{ color: "#34568b" }} >Retail Sales</h2>
                                <Graph />
                            </Container>
                            <Container>
                                <SalesTable />
                            </Container>
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}



const mapToProps = (dispatch) => {
    return {
        getProducts: id => {
            dispatch(getProducts(id))
        },
    }
}

const Header = styled.div`
  background-color: white;
  display: flex; 
  width: 100%; 
  height: 60px;
  align-items: center;
  
  & > img {
    float: left;  
    width: 20px;
    margin: 0 1.5em;
  }
`;

const Container = styled.div`
  background-color: white; 
  padding: 1.5em;
  margin-top: 2em;
`;

export default connect(
    null,
    mapToProps
)(withStyles(styles)(Product));
