  h1 = new Image(); h1.src='images/hk1.jpg';
  h2 = new Image(); h2.src='images/hk2.png';
  h3 = new Image(); h3.src='images/hk3.jpg';
  h4 = new Image(); h4.src='images/hk4.jpg';


  s1 = new Image(); s1.src='images/sg1.jpg';
  s2 = new Image(); s2.src='images/sg2.jpg';
  s3 = new Image(); s3.src='images/sg3.jpg';
  s4 = new Image(); s4.src='images/sg4.jpg';


  v1 = new Image(); v1.src='images/vn1.jpg';
  v2 = new Image(); v2.src='images/vn2.jpg';
  v3 = new Image(); v3.src='images/vn3.jpg';
  v4 = new Image(); v4.src='images/vn4.jpg';


function changePix(){

  var x =document.getElementById('f1').s1.value;

  if ( x == 'Hong Kong'){
    document.getElementById('thumb1').innerHTML="<img src='images/hk1.jpg' onmouseover='document.bp.src=h1.src' width='150' height='100'>";
    document.getElementById('thumb2').innerHTML="<img src='images/hk2.png' onmouseover='document.bp.src=h2.src' width='150' height='100'>";
    document.getElementById('thumb3').innerHTML="<img src='images/hk3.jpg' onmouseover='document.bp.src=h3.src' width='150' height='100'>";
    document.getElementById('thumb4').innerHTML="<img src='images/hk4.jpg' onmouseover='document.bp.src=h4.src' width='150' height='100'>";
  }

  if (x == 'Singapore'){
    document.getElementById('thumb1').innerHTML="<img src='images/sg1.jpg' onmouseover='document.bp.src=s1.src' width='150' height='100'>";
    document.getElementById('thumb2').innerHTML="<img src='images/sg2.jpg' onmouseover='document.bp.src=s2.src' width='150' height='100'>";
    document.getElementById('thumb3').innerHTML="<img src='images/sg3.jpg' onmouseover='document.bp.src=s3.src' width='150' height='100'>";
    document.getElementById('thumb4').innerHTML="<img src='images/sg4.jpg' onmouseover='document.bp.src=s4.src' width='150' height='100'>";
  }

  if (x == 'Vietnam'){
    document.getElementById('thumb1').innerHTML="<img src='images/vn1.jpg' onmouseover='document.bp.src=v1.src' width='150' height='100'>";
    document.getElementById('thumb2').innerHTML="<img src='images/vn2.jpg' onmouseover='document.bp.src=v2.src' width='150' height='100'>";
    document.getElementById('thumb3').innerHTML="<img src='images/vn3.jpg' onmouseover='document.bp.src=v3.src' width='150' height='100'>";
    document.getElementById('thumb4').innerHTML="<img src='images/vn4.jpg' onmouseover='document.bp.src=v4.src' width='150' height='100'>";
  }

}
