import { Col, Container, Row } from "react-bootstrap"
import Cards from "../components/cards"

export default function Gsspcomponentcard({ produtos }) {
    return (
        <>
            <Container>
                <Row xs={1} md={3} className="g-4 pt-2">
                    {produtos.map(noticia =>
                        <Col key={noticia._id}>
                            <Cards idnoticia={noticia._id}
                                titulonoticia={noticia.titulonoticia}
                                tiponoticia={noticia.tiponoticia}
                                conteudonoticia={noticia.conteudonoticia}
                                noticiatipo={noticia.noticiatipo}
                                datahoracadastro={noticia.datahoracadastro} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/noticias/apinoticias')
    const repo = await res.json()
    return { props: { produtos: repo } }
}
