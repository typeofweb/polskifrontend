import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './News.styl';
import { connect } from 'react-redux';
import mapStateToProps from '../../core/redux/mapStateToProps';
import mapDispatchToProps from '../../core/redux/mapDispatchToProps';
import NewsList from './parts/NewsList';

class News extends React.Component {
  render() {
    const { newsState: { newsList } } = this.props;
    return (
      <div className={styles.container}>
        <NewsList newsList={newsList} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(News));
