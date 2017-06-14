import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
        console.log(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem item={library} />;
    }

    render() {
        console.log(this.props);
        return (     
            <ListView 
                enableEmptySections
                dataSource={this.dataSource} 
                renderRow={this.renderRow}
            />            
        );
    }
}

const mapStateToProps = state => {
    return { 
        libraries: state.libraries 
    };
};

export default connect(mapStateToProps)(LibraryList);
