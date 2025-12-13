<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MCA E-Books</title>

<style>
body{
  margin:0;
  font-family:Arial, sans-serif;
  background:#f2f2f2;
}
.container{
  max-width:1200px;
  margin:auto;
  padding:30px;
}
h2{
  text-align:center;
  margin-bottom:30px;
}
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
  gap:20px;
}
.card{
  background:#fff;
  border-radius:12px;
  box-shadow:0 4px 12px rgba(0,0,0,0.1);
  padding:20px;
  text-align:center;
}
.card h3{
  font-size:18px;
  margin-bottom:15px;
}
.read-btn{
  display:inline-block;
  padding:10px 18px;
  background:#000;
  color:#fff;
  text-decoration:none;
  border-radius:8px;
}
.read-btn:hover{
  background:#333;
}
iframe{
  width:100%;
  height:500px;
  border:none;
  margin-top:15px;
}
</style>

</head>
<body oncontextmenu="return false">

<div class="container">
  <h2>MCA – Read Online E-Books</h2>

  <div class="grid">
    <?php
      $folder = "pdf/mca/";
      $files = scandir($folder);

      foreach ($files as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === "pdf") {
          $name = ucwords(str_replace("_", " ", basename($file, ".pdf")));
          echo "
          <div class='card'>
            <h3>$name</h3>
            <iframe 
              src='$folder$file#toolbar=0&navpanes=0&scrollbar=0'>
            </iframe>
          </div>
          ";
        }
      }
    ?>
  </div>

</div>

</body>
</html>
