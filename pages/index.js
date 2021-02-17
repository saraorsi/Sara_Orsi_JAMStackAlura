import styled from 'styled-components'
import { Grid } from '../src/components/foundation/layout/Grid'
import Capa from '../src/components/commons/Capa'
import WrapperProjetos from '../src/components/commons/WrapperProjetos'
import Menu from '../src/components/commons/Menu'
import Card from '../src/components/commons/Card'
import SectionTitle from '../src/components/commons/SectionTitle'
import Footer from '../src/components/commons/Footer'

export default function Home() {

  const hightlights = [
    {
      title: '2020',
      date: 'Galerias Municipais',
      info: 'Web Design / Front End / Wordpress',
      img: 'https://2020.criatech.pt/imgs/program/05_Sara_Orsi1080.jpg'
    },
    {
      title: '2020',
      date: 'Galeria Zé dos Bois',
      info: 'Web Design / Front End / Wordpress',
      img: 'https://2020.criatech.pt/imgs/program/05_Sara_Orsi1080.jpg'
    }
  ]

  return (
    <>
      <Capa />
      <Menu />
      <WrapperProjetos>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col>
              <SectionTitle>Hightlights</SectionTitle>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            {hightlights.map((item, i) => {
              return(
              <Grid.Col
                key={i}
                value={{
                  xs: 12,
                  md: 6
                }}
              >
                <Card
                  date={item.date}
                  title={item.title}
                  info={item.info}
                  image={item.img}
                />
              </Grid.Col>
              )
            })}

          </Grid.Row>
        </Grid.Container>
      </WrapperProjetos>
      <WrapperProjetos>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col>
              <SectionTitle>Latest Projects</SectionTitle>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col
              value={{
                xs: 12,
                md: 4
              }}
            >
              <Card
                date={'2020'}
                title={'Galerias Municipais'}
                info={'Web Design / Front End / Wordpress'}
              />
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 12,
                md: 4
              }}
            >
              <Card
                date={'2020'}
                title={'Zé dos Bois'}
                info={'Web Design / Front End / Wordpress'}
              />
            </Grid.Col>
            <Grid.Col
              value={{
                xs: 12,
                md: 4
              }}
            >
              <Card
                date={'2020'}
                title={'Zé dos Bois'}
                info={'Web Design / Front End / Wordpress'}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </WrapperProjetos>
      <Footer />
    </>
  )
}
