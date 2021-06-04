import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const styles = () => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        boxShadow: 'none',
    },
});

const SalesTable = props => {
    const { json: { sales,} = {}, classes, } = props;

    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell>WEEK ENDING</TableCell>
                        <TableCell numeric>RETAIL SALES</TableCell>
                        <TableCell numeric>WHOLESALE SALES</TableCell>
                        <TableCell numeric>UNITS SOLD</TableCell>
                        <TableCell numeric>RETAILER MARGIN</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sales.map( (row, i) => {
                        return (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {row.weekEnding}
                                </TableCell>
                                <TableCell numeric>{"$" + row.retailSales}</TableCell>
                                <TableCell numeric>{"$" + row.wholesaleSales}</TableCell>
                                <TableCell numeric>{row.unitsSold}</TableCell>
                                <TableCell numeric>{"$" + row.retailerMargin}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

const mapStateToProps = state => {
    return {
        products: state.api.products,
        json: state.api.json,
    };
};


export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(SalesTable));
