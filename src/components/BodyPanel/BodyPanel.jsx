import React from 'react';
import Divider from '@material-ui/core/Divider';
import './BodyPanel.scss';
import ListPanel from './ListPanel/ListPanel';
import AddItemField from './FeaturePanel/AddItemField';

class BodyPanel extends React.Component {
  constructor() {
    super();
    this.listPanel = React.createRef();
  }

  onAddItem = (content) => {
    this.listPanel.current.onAddContent(content);
  }

  render() {
    return (
      <div className="container">
        <div className="feature-panel">
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <AddItemField addTodoItem={this.onAddItem} />
        </div>
        <Divider orientation="vertical" />
        {/* eslint-disable-next-line no-return-assign */}
        <ListPanel ref={this.listPanel} />
      </div>
    );
  }
}

BodyPanel.propTypes = {
};

export default BodyPanel;