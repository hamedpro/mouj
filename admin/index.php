<?php
$username = $_REQUEST["username"];
echo "
    <script>
    username = '$username'
    </script>
"

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin dashboard</title>
    <link rel="stylesheet" href="../common/common.css">
    <link rel="stylesheet" href="../common/lib/bootstrap.min.css">
    <script src="../common/common.js"></script>
    <script src="codes.js"></script>
    <link href="styles.css" rel="stylesheet">
    <link rel="stylesheet" href="../common/components/header/header.css">
    <script src="../common/lib/componise.js"></script>
</head>
<body>
    <div class="mainBackground"></div>
    <script>
        componise.renderComponent({
            componentName:"myheader",
            personIconSrc:"../common/bootstrap-icons/person-check-fill-white.svg"
        })
    </script>
    <div class="profile">
        <div class="profileImage"></div>
        <h1 class="text-primary bg-light" id="username">loading username ...</h1>
        <div class="text-secondary" id="info">loading info...</div>
        
    </div>
    <div class="horizontalItems">
        <div class="item" id="load_plans_button">plans</div>
        <div class="item" id="load_transactions_button">transactions</div>
        <div class="item" id="load_users_button">users</div>
        <div class="item" id="load_support_messages_button">support_messages</div>
        <div class="item" id="load_settings_button">settings</div>
    </div>
    <div class="row d-flex justify-content-center mt-4">
        <div class="col-6">
            <h1 class="text-light rtl-center" id="dataContainer-title">در حال بارگزاری ...</h1>
        </div>
    </div>
    
    <div class="row d-flex justify-content-center">
        <div class="col-10">
            <h5 class="text-secondary rtl-center" id="dataContainer-info">در حال بارگزاری ...</h5>
        </div>
    </div>
    <div class="row justify-content-center d-flex">
        <hr class="bg-light w-75">
    </div>
    <div id="dataContainer">
        
    </div>
       
</body>
</html>