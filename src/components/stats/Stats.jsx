import PropTypes from 'prop-types';
import { StatsList, Container ,StatsListItem } from 'components/stats/Stats.styled';
export const Stats = ({ stats }) => {
  return (
    <Container>
      <h2>Upload stats</h2>
      <StatsList>
        {stats.map(item => (
          <StatsListItem key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatsListItem>
        ))}
      </StatsList>
    </Container>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
