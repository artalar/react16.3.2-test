import React from 'react';
import Type from 'prop-types';
import styled from 'styled-components';

const Block = styled.div`
  margin: 3px;
  width: 3px;
  height: 3px;
  background: ${p => p.color};
`;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const Branch = ({ deep, color }) => (
  <BlockContainer>{[...new Array(deep)].map(() => <Block color={color} />)}</BlockContainer>
);

export class Tree extends React.Component {
  static propTypes = {
    deep: Type.number.isRequired,
    total: Type.number.isRequired,
  };

  static defaultProps = {
    deep: 0,
    total: 0,
  };

  mountLog = [];

  render() {
    const { deep, total, color } = this.props;
    return (
      <Container>
        <Branch deep={deep} color={color} />
        {deep !== 0 ? (
          <Tree deep={deep - 1} total={total + deep - 1} color={color} />
        ) : (
          <BlockContainer>
            <span>
              Total elements: <strong>{`${total}`}</strong>
            </span>
            <br />
            <span>
              Time to render: <strong>{Date.now() - window.timeStartTest}</strong> ms
            </span>
          </BlockContainer>
        )}
      </Container>
    );
  }
}
