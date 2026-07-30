import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get the Status of a Minecraft Server',
    Svg: require('@site/static/img/clock.svg').default,
    description: (
      <>
        Beacon allows you to either get the status of a Minecraft server on demand or with a message that updates every few minutes to get the latest information.
      </>
    ),
  },
  {
    title: 'Store a List of Hosts',
    Svg: require('@site/static/img/list.svg').default,
    description: (
      <>
        Do you play a lot of different servers? Each server has its own list of servers that can be added to, like a favourites list.
      </>
    ),
  },
  {
    title: 'Self Hostable',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Want a bit more customisation? Want a custom name for your bot? Beacon is fully open source on GitHub, meaning you can self host it if you wish.
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
