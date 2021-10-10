const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src={'https://www.googletagmanager.com/gtag/js?id=G-MRZB81NR6H'}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MRZB81NR6H', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

export default GoogleAnalytics
