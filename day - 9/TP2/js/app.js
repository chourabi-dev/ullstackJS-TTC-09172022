var imageHolderElement = document.getElementById('image-holder');

var images = [
    'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg',
    'https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045__340.png',
    'https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png'
];

var step = 0;


// init
imageHolderElement.setAttribute('src',images[0])


function next(){
    step++;

    if (step == images.length) {
        step =0;
    }

    imageHolderElement.setAttribute('src',images[step])
}

function previous(){
    step--;
    if (step < 0) {
        step = ( images.length -1 )
    }
    imageHolderElement.setAttribute('src',images[step])
}