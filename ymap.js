ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [40.19, 44.49],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
}