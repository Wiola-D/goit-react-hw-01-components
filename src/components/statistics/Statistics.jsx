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
        <h2 class="title">{title}</h2>

        <ul class="stat-list">
          {stats.map(stat => (
            <li
              class="item"
              id={stat.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span class="label">{stat.label}</span>
              <span class="percentage">{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
