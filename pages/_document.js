import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR" className="scroll-smooth">
      <Head>
        {/* Sem JavaScript o conteúdo animado precisa aparecer mesmo assim */}
        <noscript>
          <style>{`[class*="opacity-0"]{opacity:1!important}`}</style>
        </noscript>
      </Head>
      <body className="bg-areia-50 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
