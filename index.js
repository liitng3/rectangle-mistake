// $(function(){
//     var $width=$('#width'),
//         $height=$('#height'),
//         $btnCal=$('#calculate'),
//         $perimater=$('#perimater'),
//         $area=$('#area');

//     $btnCal.click(function(){
//         console.log($width.val())
//         var w=Number($width.val()),
//             h=Number($height.val());

//         var p=2*(w+h),
//             a=w*h;

//         $perimater.val(p);
//         $area.val(a);
//     })
// })

$(function(){
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimater=$('#perimater'),
        $area=$('#area');

    $btnCal.click(function(){
        var w=Number($width.val());
        var h=Number($height.val());
        var wlen;
        var hlen;
        var a;
        var p;
        try {
            wlen =w.toString().split(".")[1].length;
        } catch (e) {
            wlen = 0;
        }
        try {
            hlen =h.toString().split(".")[1].length;
        } catch (e) {
            hlen = 0;
        }
        differ = Math.abs(wlen - hlen); 
        max = Math.pow(10, Math.max(wlen, hlen)); 
        if (differ > 0) { 
            var multiple = Math.pow(10, differ);
            if (wlen > hlen) {     
                w = Number(w.toString().replace(".", "")); 
                h = Number(h.toString().replace(".", "")) * multiple;
            } else {
                w = Number(w.toString().replace(".", "")) * multiple;
                h = Number(h.toString().replace(".", ""));
            }
            console.log(w,h)
            a=(w*h)/multiple/Math.pow(10,wlen)/Math.pow(10,hlen);
            console.log(a)
        } else {
            w = Number(w.toString().replace(".", ""));
            h = Number(h.toString().replace(".", ""));
            a=(w*h)/max/max;
        }
        
        p=2*((w + h) / max);
        

        $perimater.val(p);
        $area.val(a);
    })
})







