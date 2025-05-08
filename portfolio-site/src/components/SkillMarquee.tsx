import pythonIcon from '../images/python-white.png'
import cloudImg from '../images/cloud-computing.png'
import mysqlIcon from '../images/mysql.png'
import androidIcon from '../images/android.png'
import javaIcon from '../images/java.png'
import secIcon from '../images/sec-plus-white.png'
import reactIcon from '../images/react.png'
import springIcon from '../images/spring-boot.svg'
import googleIcon from '../images/google-cloud.svg'
import awsIcon from '../images/aws.png'

const skills = [
    { name: 'Python', icon: pythonIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Android Studio', icon: androidIcon },
    {name: 'Java', icon: javaIcon },
    {name: 'React', icon: reactIcon},
    {name: 'Spring Boot', icon: springIcon},
{name: 'Google Cloud Platform', icon: googleIcon},
{name: 'Amazon Web Services', icon: awsIcon}
  ];

export const SkillMarquee = () => {
    return (
      <div className="skills-marquee-container background-gradient">
        <div className="skills-marquee-track">
          {skills.concat(skills).map((skill, idx) => (
            <div key={idx} className="skill-item">
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ filter: 'invert(1) brightness(2)' }} 
              />
              <small>{skill.name}</small>
            </div>
          ))}
        </div>
      </div>
    );
  };