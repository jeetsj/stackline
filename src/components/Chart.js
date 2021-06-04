import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Tooltip, ResponsiveContainer, LineChart, Line, XAxis} from 'recharts';


const format_x = (i) => {
    const res = moment(i).format('MMM');
    return res;
}


class Graph extends Component {
    render() {
        const { json: { sales, } = {} } = this.props;


        return (
            <div style={{ width: '100%', height: '350px' }}>
                <ResponsiveContainer>
                    <LineChart data={sales} margin={{ left: 10 }} >
                        <XAxis dataKey="weekEnding"
                               tickFormatter={format_x}
                               interval={4}
                               />
                        <Tooltip/>
                        <Line dot={false}                           
                                dataKey="retailSales"
                                strokeWidth={3}
                                type="monotone"
                                stroke="#48a9f9"/>
                        <Line dot={false}     
                                dataKey="wholesaleSales"
                                strokeWidth={3}
                                type="monotone"
                                stroke="#9ba6c1"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
        products: state.api.products,
        json: state.api.json,
    };
};



export default connect(
    mapStateToProps,
    null
)(Graph);