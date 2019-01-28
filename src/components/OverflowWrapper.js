import React from 'react';

class OverflowWrapper extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
    };
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const classNames = this.props.classNames || '';
    const liClasses = `overflow-container ${ classNames }`;
    const { children } = this.props;
    return (
      <div className={ liClasses }>
        <div className="overflow-wrapper">
          {children}
        </div>
      </div>
    );
  }
}

export default OverflowWrapper;
