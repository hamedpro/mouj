<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>payment Result</title>
    <script src="../../common/common.js"></script>
    <script src="../api.js"></script>
    <script src="codes.js"></script>
    <link rel="stylesheet" href="../../common/common.css">
    <link rel="stylesheet" href="../../common/lib/bootstrap.min.css">
    
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <div class="mainBackground"></div>
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
                <h2 class="text-warning" dir="rtl" id="username"><?php echo $_REQUEST['username'] ?></h2>
            </div>
        </div>
        <div class="row mx-2" dir="rtl">
            <div class="col-4">
                <h4 class="text-secondary" dir="rtl">مبلغ:</h4>
            </div>
            <div class="col">
                <h2 class="text-warning" dir="rtl" id="amount"><?php echo $_REQUEST['amount'] ?></h2>
            </div>
        </div>
        <div class="row mx-2" dir="rtl">
            <div class="col-4">
                <h4 class="text-secondary" dir="rtl">کد تراکنش:</h4>
            </div>
            <div class="col">
                <h2 class="text-warning" dir="rtl" id="info"><?php echo $_REQUEST['info'] ?></h2>
            </div>
        </div>
        <div class="row mx-2" dir="rtl">
            <div class="col-4">
                <h4 class="text-secondary" dir="rtl">برای:</h4>
            </div>
            <div class="col">
                <h2 class="text-warning" dir="rtl" id="category"><?php echo $_REQUEST['category']</h2>
            </div>
        </div>
        <div class="row m-3" dir="rtl">
            <div class="col-4 d-grid p-1">
                <a class="btn btn-outline-danger btn-sm" href="../../support/index.html">گزارش خطا</a>
            </div>
            <div class="col d-grid p-1">
                <a class="btn btn-success" href="../../home/index.html">بازگشت به صفحه اصلی</a>
            </div>
        </div>
</body>    
</html>