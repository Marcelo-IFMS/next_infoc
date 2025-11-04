import { Card, Col } from "react-bootstrap";

export default function Cards(noticia){
    return <>
        <Col key={noticia._id}>
            <Card>
                <Card.Header className="text-center fw-bold"><a href={`/noticias/${noticia._id}`}> {noticia.titulonoticia}</a></Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize">
                        <a href={`/noticias/tipo/${noticia.tiponoticia}`}>
                        {noticia.tiponoticia}
                        </a>
                    </Card.Title>
                    <Card.Text>{noticia.conteudonoticia}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{new Date(noticia.datahoracadastro).toLocaleString("pt-BR")}</Card.Footer>
            </Card>
        </Col>
    </>
}