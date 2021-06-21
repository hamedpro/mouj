<?php
$username = $_REQUEST['username'];
echo "
    <script>
        username = '$username'
    </script>
";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>support form</title>
    <link href="styles.css" rel="stylesheet">
    <script src="../common/lib/componise.js"></script>
    <link rel="stylesheet" href="../common/lib/bootstrap.min.css">
    <link rel="stylesheet" href="../common/common.css">
    <link rel="stylesheet" href="../common/components/header/header.css">
    <script src="codes.js"></script>
</head>
<body>
    <div class="mainBackground"></div>
    <script>
        componise.renderComponent({
            componentName:"myheader"
        })
    </script>
    <div class="row justify-content-center d-flex mt-3">
        <div class="col-6">
            <h1 class="text-light rtl-center">ورود به حساب کاربری</h1>
        </div>
    </div>  
    <div class="row justify-content-center d-flex mt-1">
        <div class="col-10">
            <h5 class="text-secondary rtl-center">شما در حال سعی برای ورود به پنل مدیریت کاربری با نام کاربری <script>document.write(username)</script> هستید.</h5>
        </div>
    </div>  
    
    <div class="row d-flex justify-content-center mt-1">
        <hr class="bg-light w-75">
    </div>  
    <div class="buttons_row">
        <button id="button_1">1</button>
        <button id="button_2">2</button>
        <button id="button_3">3</button>
    </div>
    <div class="buttons_row">
        <button id="button_4">4</button>
        <button id="button_5">5</button>
        <button id="button_6">6</button>
    </div>
    <div class="buttons_row">
        <button id="button_7">7</button>
        <button id="button_8">8</button>
        <button id="button_9">9</button>
    </div>
    <div class="buttons_row">
        <button style="opacity:0">*</button>
        <button id="button_0">0</button>
        <button style="opacity:0">*</button>
    </div>
    
    
</body>
</html>