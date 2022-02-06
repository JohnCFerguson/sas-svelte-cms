<script context="module">
    export const load = async({page, fetch}) => {
        try {
            const url = `/team/team.json`
            const res = await fetch(url)
            const data = await res.json()

            if (data) {
                return {
                    props: {
                        teammates: data.teammates
                    }
                }
            }
        } catch (err) {
            return {
                status: 500,
                error: new Error(`Could not load url`)
            }
        }
    }
</script>

<script> 
    export let teammates
    export let w
    import SanityImage from '$lib/SanityImage.svelte'
    import {
        Card,
        CardTitle,
        CardSubtitle,
        CardActions,
        Button,
        Icon,
        Divider,
        MaterialApp 
    } from 'svelte-materialify';
    import { slide } from 'svelte/transition';
    import { mdiChevronDown } from '@mdi/js';

    let active = false;
    function toggle() {
        active = !active;
    }
</script>

<div class="team">
    <h1>Meet the Team</h1>
    <hr />
    <MaterialApp>
        {#each teammates as teammate}
            <div class="d-flex justify-center mt-4 mb-4" bind:clientWidth={w}>
                <Card maxWidth={600}>
                    <SanityImage image={teammate.image} maxWidth={w}/>
                    <CardTitle>{teammate.name}</CardTitle>
                    <CardSubtitle>{teammate.jobtitle}</CardSubtitle>
                    <CardActions>
                        <Button text>Bio</Button>
                        <Button text fab size="small" class="ml-auto" on:click={toggle}>
                            <Icon path={mdiChevronDown} rotate={active ? 180 : 0} />
                        </Button>
                    </CardActions>
                    {#if active}
                    <div transition:slide>
                        <Divider />
                        <div class="pl-4 pr-4 pt-2 pb-2">
                            Maddie grew up in Elko, NV where her passion for the beauty industry flourished at a very young age. Maddie always knew this was where she was suppose to be. After graduating from the Aveda Institute Provo where her love for all things hair, makeup, and Aveda grew strong she couldn’t have imagined doing anything else. 
                            As a current Aveda cutting coach and certified Aveda color educator, Maddie has a niche for education and loves sharing her passion for the industry with others. Maddie truly lives by the Aveda belief statement “learning never ends” and devotes as much to her education as she can. Whether it’s through her experience in participation at New York Fashion Week or NAHA she loves staying inspired through editorial work and learning new techniques to ignite her craft. 
                            Maddie takes so much pride in providing an exceptional service and an experience where her guests feel like they can always be themselves and always feel their best when they leave. 
                        </div>
                    </div>
                    {/if}
                </Card>
            </div>
        {/each}
    </MaterialApp>
</div>

<style>
    h1 {
        font-family: 'StayClassyDuoSerif';
        font-size: 3em;
    }
    .team {
        text-align: center;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px#000;
        margin-top: 40px;
        padding: 5px;
    }
</style>