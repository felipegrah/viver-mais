import Head from 'next/head'
import { site, servicos, duvidas } from '../data/site'

const titulo = `${site.nome} | Pilates com fisioterapeutas em Palhoça/SC`
const imagemOg = `${site.url}/images/interior/novo/1.jpeg`

const negocio = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HealthClub'],
  '@id': `${site.url}/#estudio`,
  name: site.nome,
  description: site.descricao,
  url: site.url,
  telephone: '+5548988268600',
  image: imagemOg,
  logo: `${site.url}/images/logo-viver-mais.png`,
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.endereco.rua,
    addressLocality: site.endereco.cidade,
    addressRegion: site.endereco.estado,
    postalCode: site.endereco.cep,
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.endereco.lat,
    longitude: site.endereco.lng,
  },
  openingHours: site.horarios.schema,
  sameAs: [site.redes.instagram, site.redes.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Modalidades de Pilates',
    itemListElement: servicos.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.nome, description: s.texto },
    })),
  },
}

const perguntas = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: duvidas.map((d) => ({
    '@type': 'Question',
    name: d.p,
    acceptedAnswer: { '@type': 'Answer', text: d.r },
  })),
}

export default function Seo() {
  return (
    <Head>
      <title>{titulo}</title>
      <meta name="description" content={site.descricao} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3D9BA5" />
      <link rel="canonical" href={site.url} />
      <meta
        name="keywords"
        content="pilates palhoça, pilates aririu, estúdio de pilates, neopilates, pilates para gestantes, pilates kids, fisioterapia palhoça"
      />
      <meta name="author" content={site.nome} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={site.nome} />
      <meta property="og:title" content={titulo} />
      <meta property="og:description" content={site.descricao} />
      <meta property="og:url" content={site.url} />
      <meta property="og:image" content={imagemOg} />
      <meta property="og:image:alt" content={`Ambiente do ${site.nome}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titulo} />
      <meta name="twitter:description" content={site.descricao} />
      <meta name="twitter:image" content={imagemOg} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/logo-viver-mais.png" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(perguntas) }}
      />
    </Head>
  )
}
