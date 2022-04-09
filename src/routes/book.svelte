<script>
  export let w
  import {Card, MaterialApp} from 'svelte-materialify'
</script>

<div class="book">
  <MaterialApp>
    <div class="d-flex justify-center mt-4 mb-4" bind:clientWidth={w}>
      <Card style="width: 100%; height: 30em">
        <iframe
          class="book-appt-mobile"
          title="Book Appointment"
          style="width: 100%; height: 100%"
          src="https://online-booking.salonbiz.com/olb/!page.widget_start?wbid=c6265t202106221207p9pb865B43e7kP5hA28ck&theme=5533&p_mobile=y"
        />
        <iframe
          class="book-appt-wide"
          title="Book Appointment"
          style="width: 100%; height: 100%"
          src="https://online-booking.salonbiz.com/olb/!page.widget_start?wbid=c6265t202106221207p9pb865B43e7kP5hA28ck&theme=5533"
        />
      </Card>
    </div>
  </MaterialApp>
</div>

<style>
  .book {
    text-align: center;
    border-radius: 1em;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1);
    margin-top: 4em;
    padding: 1em;
  }

  @media only screen and (max-width: 767px) {
    .book-appt-wide {
      display: none;
    }
  }
  @media only screen and (min-width: 767px) {
    .book-appt-mobile {
      display: none;
    }
  }
</style>
