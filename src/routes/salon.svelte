<script>
  import Gallery from '$lib/LightboxSlider.svelte'
  let images = [
    {
      image: '/images/aveda_wall.jpg',
      alt: 'Image Alt 1'
    },
    {
      image: '/images/coffee_pot.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/cutting_area_2.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/cutting_room.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/front_desk.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/full_aveda_wall.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/hair_wash.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/light_sign.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/pictures.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/sitting_area_back.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/sitting_area_front.jpg',
      alt: 'Image Alt 2'
    },
    {
      image: '/images/sitting_chair.jpg',
      alt: 'Image Alt 2'
    }
  ]
</script>

<div class="main-content">
  <h1>The Salon</h1>
  <p>
    Welcome to Sand and Sagebrush, an Aveda salon located right in the heart of downtown Elko
    Nevada. At Sand and Sagebrush our mission is to always provide our guests with a one of a kind
    service. Through thoughtful care, kindness, and attention to detail our goal is ensure an
    experience and environment where confidence and self love are abundant.
  </p>
  <hr />
  <Gallery {images} />
</div>

<style>
  div {
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px#000;
    margin-top: 40px;
    padding: 5px;
  }
  h1 {
    font-family: 'StayClassyDuoSerif';
    font-size: 3em;
    text-align: center;
  }
  p {
    font-family: 'StayClassyDuoSerif';
  }
</style>
