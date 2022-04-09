<script>
    export let w
    import {
        Card,
        MaterialApp
    } from 'svelte-materialify';
</script>

<div class="book">
    <MaterialApp>
        <div class="d-flex justify-center mt-4 mb-4" bind:clientWidth={w}>
            <Card style="width: 100%; height: 30em">
                <iframe title="Book Appointment" style="width: 100%; height: 100%" src="https://online-booking.salonbiz.com/olb/!page.widget_start?wbid=c6265t202106221207p9pb865B43e7kP5hA28ck&theme=5533" />
            </Card>
        </div>
    </MaterialApp>
</div>


<style>
    .book {
        text-align: center;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px#000;
        margin-top: 40px;
        padding: 5px;
    }
</style>
