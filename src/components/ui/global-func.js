const setColor = color => {
  switch (color) {
    case 'white':
      return '#FFFFFF';
    case 'success':
      return '#48B927';
    case 'primary':
      return 'rgb(64, 179, 79)';
    case 'primary-200':
      return 'rgba(64, 179, 79, 0.2)';
    case 'red':
      return '#FF0000';
    case 'grey':
      return '#E0E0E0';
    case 'black-666':
      return '#666666';
    case 'black-AAA':
      return '#AAAAAA';
    case 'black-BBB':
      return '#BBBBBB';
    case 'black-DDD':
      return '#DDDDDD';
    case 'black-EEE':
      return '#EEEEEE';
    default:
      return '#333333';
  }
};

const setAlign = type => {
  switch (type) {
    case 'center':
      return 'center';
    case 'flex-end':
      return 'flex-end';
    default:
      return 'flex-start';
  }
};

const setJustify = type => {
  switch (type) {
    case 'center':
      return 'center';
    case 'flex-end':
      return 'flex-end';
    default:
      return 'flex-start';
  }
};

const setFontWeight = type => {
  switch (type) {
    case 'bold':
      return 'bold';
    case 'semi-bold':
      return '500';
    default:
      return 'normal';
  }
};

const setMargin = props => {
  const {top, left, right, bot} = props;

  const margin = {
    marginTop: top,
    marginBottom: bot,
    marginRight: right,
    marginLeft: left,
  };

  return margin;
};

export {setColor, setAlign, setJustify, setMargin, setFontWeight};
