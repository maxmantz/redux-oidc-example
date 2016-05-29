import React from 'react';

function ChannelInfo(props) {
  const { channel } = props;

  return (
    <div style={styles.root}>
      <div style={styles.thumbnail}>
        <img src={channel.thumbnail} alt="Thumbnail" />
      </div>
      <div style={styles.info}>
        <h3>{channel.title}</h3>
        <span>{channel.description.length > 100 ? channel.description.substring(0, 100).concat('...') : channel.description}...</span>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: 'flex',
  },
  thumbnail: {
    flex: '0 1 auto'
  },
  info: {
    flex: '1 0 auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }
}

export default ChannelInfo;
