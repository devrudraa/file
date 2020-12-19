// common variables
var iBytesUploaded = 0;
var iBytesTotal = 0;
var iPreviousBytesLoaded = 0;
var iMaxFilesize = 10000000; // 10MB
var oTimer = 0;
var sResultFileSize = '';

function fileSelected() {

    // get selected file element
    var oFile = document.getElementById('file').files[0];

    // filter for image files
    var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    if (! rFilter.test(oFile.type)) {
        document.getElementById('error').style.display = 'block';
        return;
    }

    // little test for filesize
    if (oFile.size > iMaxFilesize) {
        let fileSize = filesize(oFile.size);
        alert(`Please select Image less than 10MB your Image size is ${fileSize}MB`);
        return;
    }

    function filesize(bytes){
        let kb = bytes / 1000;
        let mb = kb / 1000;
        return mb.toFixed(2);

    }
    // get preview element
    var oImage = document.getElementById('userimg');

    // prepare HTML5 FileReader
    var oReader = new FileReader();
        oReader.onload = function(e){
        // e.target.result contains the DataURL which we will use as a source of the image
        oImage.src = e.target.result;
    };

    // read selected file as DataURL
    oReader.readAsDataURL(oFile);
}