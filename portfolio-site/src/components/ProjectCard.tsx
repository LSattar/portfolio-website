import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

type ProjectCardProps = {
    title: string;
    description:string;
}

export const ProjectCard = ({title, description}: ProjectCardProps) => {
    return(
        <Card>
            <Card.Header><Card.Title>{title}</Card.Title></Card.Header>
            <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Button>More Details Here</Button>
            </Card.Body>
        </Card>
    )
}