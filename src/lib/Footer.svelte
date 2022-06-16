<script>
  const metadata = {
    title: 'Sand & Sagebrush Salon and Spa',
    contact: {
      phoneDisplay: '1 (775) 777-1539',
      phoneNumber: '17757771539',
      email: 'maddie@sandandsagebrush.com',
      address: '461 Idaho St. Elko, NV 89801'
    },
    development: {
      company: 'Unfergettable Designs, LLC',
      devEmail: 'john.ferguson@unfergettabledesigns.com'
    }
  }
</script>

<footer>
  <hr />
  <span>
    ©{new Date().getFullYear()}
    {metadata.title}{' '}
    <a href={`mailto:${metadata.contact.email}`}>{metadata.contact.email}</a> –
    <a href={`tel:+${metadata.contact.phoneNumber}`}>{metadata.contact.phoneDisplay}</a>
    <br />
    {metadata.contact.address}
    <hr />
    <caption translate="no">
      Built by:
      <br />
      <a href="https://www.jferguson.info">
        <img
          class="unfergettable-logo"
          src="/logos/UnFergettableDesignsLogo-ReSized.png"
          alt="UnFergettable Designs L.L.C."
        />
      </a>
      <br />
      <a href={`mailto:${metadata.development.devEmail}`}>{metadata.development.devEmail}</a>
    </caption>
  </span>
</footer>

<style>
  footer {
    font-family: 'StayClassyDuoSerif';
    text-align: center;
    margin-top: 5vh;
    padding-bottom: 5vh;
    align-items: center;
    justify-content: center;
    gap: 1em;
    position: static;
  }
  .unfergettable-logo {
    max-width: 10em;
  }
</style>
