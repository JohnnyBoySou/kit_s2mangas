import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Componentes Prontos para React Native',
    Svg: require('@site/static/img/undraw_react_native.svg').default,
    description: (
      <>
        O <strong>@s2mangas/native</strong> fornece componentes de UI reutilizáveis como <code>Button</code>, <code>Switch</code>, <code>Input</code> e <code>Loader</code>, prontos para usar em qualquer aplicação React Native.
      </>
    ),
  },
  {
    title: 'Tema Consistente',
    Svg: require('@site/static/img/undraw_theme.svg').default,
    description: (
      <>
        O <strong>@s2mangas/core</strong> fornece cores, espaçamentos, tamanhos e outras variáveis de estilo, garantindo consistência visual em todos os componentes e telas do seu app.
      </>
    ),
  },
  {
    title: 'Produtividade e Flexibilidade',
    Svg: require('@site/static/img/undraw_productivity.svg').default,
    description: (
      <>
        Com o S2Mangás Kit, você economiza tempo e mantém a qualidade do projeto, usando apenas os pacotes que precisa, de forma modular e fácil de personalizar.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
