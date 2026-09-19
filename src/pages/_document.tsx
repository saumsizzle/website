import { Html, Head, Main, NextScript } from 'next/document'

const noFlashScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme-mode');
    var mode = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var root = document.documentElement;
    root.setAttribute('data-theme', mode);
    root.classList.add(mode);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
