window.onload = function() {

    var map;

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(-22.928316,-51.7173605),
            scrolwhell:false,
            zoom:12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById('map'),mapProp)
    }


    function addMarker(lat,long,icon,content) {
        var latLng = {'lat':lat,'long':long}

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        infoWindow.open(map,marker)
    }


    initialize();
    addMarker(-22.928316,-51.7173602)

    /*
    function animal() {
        this.nome = 'cachorro'
        this.peso = '24kg'

        var outravariavel = 'teste'
    }

    var meuanimal = new animal()
    console.log(meuanimal.nome)
    */
}