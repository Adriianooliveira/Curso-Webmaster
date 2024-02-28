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

    function addMarker(lat,long,icon,content,click) {
        var latLng = {'lat':lat,'lng':long};

        var marker =  new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,10)
        });

        if(click == true) {
        google.maps.event.addListener(marker,'click',function() {
            infoWindow.open(map,marker);
        });
        infoWindow.open(map,marker)
        }  else {
            infoWindow.open(map,marker)
        }
    }


    initialize();

    var conteudo = '<p style="color: black; font-size: 14px; border: 0; padding: 5px;  border-bottom: 1px solid black;">Meu endereço</p>'
    addMarker(-22.928316,-51.71736051,'',conteudo, true)

    setTimeout(function() {
        map.panTo({'lat':-22.906847, 'lng':-43.172897});
        map.setZoom(8)
    },4000)


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