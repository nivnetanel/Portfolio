import "../css/base.css";
import "../css/main.css";
import project_card from "./Project_card";

const Projects = () => {
  const listProject = project_card.map((item) => (
    <div className="bgrid folio-item" key={item.id} data-aos={item.animation_effect}>
      <a
        className="item-wrap"
        href={item.project_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.project_name} (opens in a new tab)`}
      >
        <img src={item.thumb} alt={item.project_name} />
        <div className="overlay">
          <h3 className="folio-title">{item.project_name}</h3>
          <span className="folio-types">{item.technologies}</span>
        </div>
      </a>
    </div>
  ));
  return <>{listProject}</>;
};

export default Projects;
