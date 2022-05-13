import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Städte und Nationen',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Finde dich mit anderen Spielern in Städten zusammen und schafft gemeinsam etwas großes.
        Städte können Teil von Nationen werden, welche dann Krieg gegen andere Nationen erklären können.
      </>
    ),
  },
  {
    title: 'Voicechat',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Für ein besseres Spielerlebnis wirst du auf dem TBU-SMP über den Voicechat kommunizieren. Du wirst dich mit Spielern die sich in deiner Nähe befinden unterhalten können.
        Ab auch Sprachräume wie auf Discord werden dir zur Verfügung stehen.
      </>
    ),
  },
  {
    title: 'Wirtschaft',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Die Wirtschaft auf dem TBU-SMP wird von den Spieler aufrechterhalten. Jeder kann Items und Dienstleistungen anbieten und verkaufen.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
