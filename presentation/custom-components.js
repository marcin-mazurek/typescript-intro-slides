import {
  CodePane,
  Heading as BaseHeading,
  List as BaseList,
  Slide as BaseSlide,
} from 'spectacle';
import React from 'react';
import styled from 'react-emotion';

export const List = styled(BaseList)`
  & li {
    margin-bottom: 24px;
  }
`;

export const Columns = styled('div')`
  display: flex;
  justify-content: center;
`;

export const Column = styled('div')`
  margin: 0 15px;
  flex: 1;
`;

export const Heading = styled(BaseHeading)`
  margin-bottom: 50px;
`;

export const Code = ({ lang, fileName, textSize }) => (
  <CodePane
    textSize={textSize || 30}
    lang={lang || "ts"}
    source={require(`raw-loader!./code/${fileName}`)}
    theme="external"
  />
);

const StandardSlide = styled(BaseSlide)`
  max-height: 100%;
`;

const WiderSlide = styled(BaseSlide)`
  max-height: 100%;
  max-width: 60%;
`;

const WideSlide = styled(BaseSlide)`
  max-height: 100%;
  max-width: 80%;
`;

export const Slide = ({ theme, wide, wider, ...props }) => {
  const baseProps = {
    transition: ['fade']
  };

  if (theme === 'primary' || theme === undefined) {
    baseProps.bgColor = 'primary';
    baseProps.textColor = 'secondary';
  } else if (theme === 'secondary') {
    baseProps.bgColor = 'secondary';
    baseProps.textColor = 'primary';
  } else if (theme === 'tertiary') {
    baseProps.bgColor = 'tertiary';
    baseProps.textColor = 'primary';
  } else {
    throw new Error('Unsupported theme: ' + theme);
  }

  if (wide) {
    return <WideSlide {...baseProps} {...props} />;
  }
  else if (wider) {
    return <WiderSlide {...baseProps} {...props} />;
  }
  else {
    return <StandardSlide {...baseProps} {...props} />;
  }
}

