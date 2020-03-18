function initMap() {
    var map;
    function initMap() {
        // The location of oostende
        var oostende = {lat: 51.2154, lng: 2.9287};
        // The map, centered at oostende
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 11, center: oostende});
        // The marker, positioned at oostende
        var marker = new google.maps.Marker({position: oostende, map: map});
        // The location of oostende
        var vdab = {lat: 51.2258, lng: 2.9194};
        // The marker, positioned at vdab
        var marker1 = new google.maps.Marker({position: vdab, map: map});
        // The location of brugge
        var brugge = {lat: 51.2093, lng: 3.2247};
        // The marker, positioned at brugge
        var marker2 = new google.maps.Marker({position: brugge, map: map});
        // The location of veurne
        var veurne = {lat: 51.0732, lng: 2.6680};
        // The marker, positioned at veurne
        var marker3 = new google.maps.Marker({position: veurne, map: map});
        // The location of gistel
        var gistel = {lat: 51.1563, lng: 2.9676};
        // The marker, positioned at gistel
        var marker4 = new google.maps.Marker({position: gistel, map: map});
    }
}