import React from 'react';
import { Grid } from '../src/components/foundation/layout/Grid';
import Capa from '../src/components/commons/Capa';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Menu from '../src/components/commons/Menu';
import Card from '../src/components/commons/Card';
import SectionTitle from '../src/components/commons/SectionTitle';
import Footer from '../src/components/commons/Footer';

export default function Home() {
  const hightlights = [
    {
      date: '2020',
      title: 'Galerias Municipais',
      info: 'Web Design / Front End / Wordpress',
      img: '/images/galerias-municipais.jpg',
    },
    {
      date: '2020',
      title: 'Galeria Zé dos Bois',
      info: 'Web Design / Front End / Wordpress',
      img: '/images/ze-dos-bois.jpg',
    },
  ];

  const projects = [
    {
      date: '2020',
      title: 'Rialto6',
      info: 'Web Design / Front End / Wordpress',
      img: '/images/rialto6.jpg',
    },
    {
      date: '2020',
      title: 'Doclisboa',
      info: 'Web Design / Front End / Wordpress',
      img: '/images/doclisboa.jpg',
    },
    {
      date: '2020',
      title: 'Air 351',
      info: 'Web Design / Front End / Wordpress',
      img: '/images/air351.jpg',
    },
  ];

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
            {hightlights.map((item) => (
              <Grid.Col
                key={item.title}
                value={{
                  xs: 12,
                  md: 6,
                }}
              >
                <Card
                  date={item.date}
                  title={item.title}
                  info={item.info}
                  image={item.img}
                />
              </Grid.Col>
            ))}

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
            {projects.map((item) => (
              <Grid.Col
                key={item.title}
                value={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Card
                  date={item.date}
                  title={item.title}
                  info={item.info}
                  image={item.img}
                />
              </Grid.Col>
            ))}
          </Grid.Row>
        </Grid.Container>
      </WrapperProjetos>
      <Footer />
    </>
  );
}
