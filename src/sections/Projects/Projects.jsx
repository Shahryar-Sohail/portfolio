import styles from './ProjectsStyles.module.css';
import countryAtlas from '../../assets/countryAtlas.png';
import sms from '../../assets/sms.png';
import dashboard from '../../assets/dashboard.png';
import grook from '../../assets/grook.png';
import crudify from '../../assets/crudify.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={countryAtlas}
          link="https://shahryar-sohail.github.io/CountryAtlas/"
          h3="Country Atlas"
          p="Country Information App"
        />
        <ProjectCard
          src={sms}
          link="https://shahryar-sohail.github.io/StudentManagementSystem/index.html"
          h3="Management System"
          p="Student Management"
        />
        <ProjectCard
          src={dashboard}
          link="https://github.com/Shahryar-Sohail/Dashboard"
          h3="Store Dashboard"
          p="E-commerce Dashboard"
        />
        <ProjectCard
          src={grook}
          link="https://github.com/Shahryar-Sohail/GrookAcademy"
          h3="Grook Academy"
          p="Academy"
        />
        <ProjectCard
          src={crudify}
          link="https://github.com/Shahryar-Sohail/Crudify"
          h3="Crudify"
          p="Employee Management"
        />
      </div>
    </section>
  );
}

export default Projects;
