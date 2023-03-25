import styled from 'styled-components';
import setBackgroungColor from 'utils/setBackgroundColor';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[12]}px;

  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
`;
export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;

  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  width: 140px;

  background-color: ${setBackgroungColor};

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const StatType = styled.span``;
export const StatNumber = styled.span`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const StatAnalitics = styled(StatItem)`
  width: ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.analitics};
`;
export const AnaliticsType = styled.span``;
