import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type ProjectCardProps = {
    title: string;
    description: string;
    date: string;
    company: string;
    skills: string[];
}

export const ProjectCard = ({ title, description, date, company, skills }: ProjectCardProps) => {
    return (
        <Card className='border-0 card-hover bg-transparent text-light'>
            <Row className='m-1'>
                <Col className='text-start' md={8}>
                    <Card.Title className='hover-underline-animation'>{title}</Card.Title>
                    <Card.Subtitle className="my-1 text-secondary">{company}</Card.Subtitle>
                </Col>
                <Col className='text-end m-1'>
                    <Card.Subtitle>{date}</Card.Subtitle>
                </Col>
            </Row>
            <Card.Body className='text-start'>
                <Card.Text>
                    {description}
                    <br />
                    {skills.map((skill, index) => (
                        <Button key={index} className="me-2 mt-2 skill-button border-0 rounded-4 p-2" size="sm" disabled>
                            {skill}
                        </Button>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}