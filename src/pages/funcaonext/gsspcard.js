import { Container, Card, Row, Col, } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
export async function getServerSideProps() {
    return { props: { repo: { var1: "Next", var2: "Com React" } } }
}
export default function Gssp({ repo }) {
    return (<>
        <Container>
            <Row xs={1} md={3} className="pt-2 g-4">
                {Array.isArray(noticias) ?
                    noticias.map(abobrinha =>  //{ abobrinha.idnoticia }
                        <Col key={abobrinha._id}>
                            <Card>
                                <Card.Header className="text-center fw-bold"> {abobrinha.titulonoticia}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-capitalize">{abobrinha.tiponoticia}</Card.Title>
                                    <Card.Text>{abobrinha.conteudonoticia}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">{new Date(abobrinha.datahoracadastro).toLocaleString("pt-BR")}</Card.Footer>
                            </Card>
                        </Col>
                    ) : <div className="text-center">
                        <h1>Carregando...</h1>
                    </div>}
            </Row>
        </Container>
    </>
    )
}