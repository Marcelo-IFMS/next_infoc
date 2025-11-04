import { Container, Row } from "react-bootstrap";
import Cards from "../components/cards"
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/noticias/` + context.query._id);
    const repo = await res.json(res);
    return { props: { noticias: repo } }
}

export default function Cardcomponent({ noticias }) {
    return <>
        <Container>
            <Row xs={1} md={3} className="pt-2 g-4">
                {
                    <Cards idnoticia={noticias._id}
                        titulonoticia={noticias.titulonoticia}
                        conteudonoticia={noticias.conteudonoticia}
                        tiponoticia={noticias.tiponoticia}
                        datahoracadastro={noticias.datahoracadastro}
                    />
                }
            </Row>
        </Container>
    </>
}