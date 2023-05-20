import PropTypes from 'prop-types';
import {
  StatsList,
  Container,
  StatsListItem,
} from 'components/Statistics/Statistics.styled';
export const Statistics = ({ stats, title }) => {
  function hasTitlte() {
    if (!title) {
      return null;
    }
    return <h2>{title}</h2>;
  }
  return (
    <Container>
      {hasTitlte()}
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

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
