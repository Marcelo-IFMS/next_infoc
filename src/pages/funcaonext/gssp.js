import { Container, Table } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
export async function getServerSideProps() {
    return { props: { repo: { var1: "Next", var2: "Com React" } } }
}
export default function Gssp({ repo }) {
    return (
        <>
            <Container>
                <h1>{repo.var1}</h1>
                <h1>{repo.var2}</h1>
            </Container>
            <Container>
                <Table striped bordered hover>
                    <thead className="text-center">
                        <tr>
                            <td>id</td>
                            <td>Título</td>
                            <td>Contéudo</td>
                            <td>Tipo da Notícia</td>
                            <td>d/h</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(noticias) ?
                            noticias.map(abobrinha =>
                                <tr>
                                    <td>{abobrinha._id}</td>
                                    <td>{abobrinha.titulonoticia}</td>
                                    <td>{abobrinha.conteudonoticia}</td>
                                    <td>{abobrinha.tiponoticia}</td>
                                    <td>{abobrinha.datahoracadastro}</td>
                                </tr>
                            ) : <tr>
                                <td colSpan={5}> Carregando...</td>
                            </tr>}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>Info 5 C</td>
                        </tr>
                    </tfoot>

                </Table>
            </Container>
        </>
    )
}