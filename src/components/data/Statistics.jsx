import '/src/components/styles.css';
import propTypes from "prop-types"


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function Statistics({ title, stats }) {
    return(
        <>
        <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
            {stats.map((stat) => (
                <li key={stat.id} className="item" style={{backgroundColor : getRandomColor()}}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}</span>
            </li>
            ))}
            </ul>
        </section>
        </>
    )
  }

  Statistics.propTypes = {
    title : propTypes.string,
    stats : propTypes.arrayOf(
      propTypes.shape({
        id : propTypes.string,
        label : propTypes.string,
        percentage : propTypes.number,
      }),
    ),
  };
  
  export default Statistics;