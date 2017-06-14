import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { item, expanded } = this.props;
        const { descriptionStyle } = styles;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>
                        {item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { id, title } = this.props.item;
        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>   
                <View>
                    <CardSection>   
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    flex: 1,  
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.item.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
