import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './ResponsivePanel.styl';
import ResponsiveContainer from './ResponsiveContainer';

const ResponsivePanel = props => {
  return (
    <ResponsiveContainer className={props.className}>
      <div className={style.container}>
        <h2 className={style['container__title']}>{props.header}</h2>
        <div className={style.wrapper}>
          {props.description ? <p className={style['wrapper__description']}>{props.description}</p> : null}
          {props.children}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

ResponsivePanel.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.any
};

export default withStyles(style)(ResponsivePanel);