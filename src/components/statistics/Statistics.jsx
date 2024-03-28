import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 4; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section className="statistics">
      <div className="statistics-container">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          {stats.map(stat => (
            <li
              className="item"
              key={stat.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
