<?php
$info = $_REQUEST['info'];
$category = $_REQUEST['category'];
$username = $_REQUEST['username'];
$amount = (int)$_REQUEST['amount'];
include('../api/phpApi.php');
$api = new api($db);
$plan_id = last_item(json_decode($api->get_plan_ids()));
$api->new_transaction([
    'username'=>$username,
    'category'=>$category,
    'amount'=>$amount,
    'info'=>$info,
    'plan_id'=>$plan_id
])
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>payment Result</title>
    <script src="../common/common.js"></script>
    <script src="codes.js"></script>
    <link rel="stylesheet" href="../common/common.css">
    <link rel="stylesheet" href="../common/lib/bootstrap.min.css">
    <script src="../common/lib/componise.js"></script>
    <link rel="stylesheet" href="../common/components/header/header.css">
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <div class="mainBackground"></div>
    <script>
        componise.renderComponent({
            componentName:"myheader",
            personIconSrc:"../common/bootstrap-icons/person-check-fill-white.svg"
        })
    </script>
    <div id="payment-success" class="content-container">
        <div class="row justify-content-center d-flex mt-3">
            <div class="col-8">
            <h1 class="text-success" dir="rtl" style="text-align:center;">پرداخت شما با موفقیت انجام شد</h1> 
            </div>
        </div>
        <div class="row justify-content-center d-flex mt-1">
            <div class="col-10">
                <h5 class="text-secondary" dir="rtl" style="text-align:center;">اطلاعات پرداخت شما به شرح زیر است :</h5>
            </div>
        </div>
        <div class="row mx-2 mt-4" dir="rtl">
            <div class="col-4">
                <h4 class="text-secondary" dir="rtl">نام کاربری:</h4>
            </div>
            <div class="col">
                <h2 class="text-warning" dir="rtl" id="username"><?php echo $username ?></h2>
            </div>
        </div>
        <div class="row mx-2" dir="rtl">
            <div class="col-4">
                <h4 class="text-secondary" dir="rtl">مبلغ:</h4>
            </div>
            <div class="col">
                <h2 class="text-warning" dir="rtl" id="amount"><?php echo $amount ?></h2>
            </div>
        </div>
        <div class="row mx-2" dir="rtl">
            <div class="col-4">
                <h4 class="text-secondary" dir="rtl">شماره طرح: </h4>
            </div>
            <div class="col">
                <h2 class="text-warning" dir="rtl" id="info"><?php echo $plan_id ?></h2>
            </div>
        </div>
        <div class="row mx-2" dir="rtl">
            <div class="col-4">
                <h4 class="text-secondary" dir="rtl">برای:</h4>
            </div>
            <div class="col">
                <h2 class="text-warning" dir="rtl" id="category"><?php echo $category=="mouj"? 'طرح موج':'موسسه آنسه الشهدا' ?></h2>
            </div>
        </div>
        <div class="row m-3" dir="rtl">
            <div class="col-4 d-grid p-1">
                <a class="btn btn-outline-danger btn-sm" href="../support">گزارش خطا</a>
            </div>
            <div class="col d-grid p-1">
                <a class="btn btn-success" href="../home">بازگشت به صفحه اصلی</a>
            </div>
        </div>
</body>    
</html>