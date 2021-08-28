<!DOCTYPE html>


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>payment gateway</title>
    <link rel="stylesheet" href="../common/lib/bootstrap.min.css">
    <script src="./codes.js"></script>
<script src="../common/svgs.js"></script>


    <button class="btn btn-success" id="pay_button">pay</button>
    <script>
    window.onload = function(){
        document.getElementById('pay_button').onclick = function(){
            <?php
                $amount = $_REQUEST['amount'];
                $username = $_REQUEST["username"];
                $category = $_REQUEST['category'];
                $info = $_REQUEST['info'];
                $plan_id = (int)$_REQUEST['plan_id'];
                $url_to_redirect = "../paymentSuccess/index.php?amount=$amount&username=$username&category=$category&info=$info&plan_id=$plan_id";
            ?>
            window.location.replace(<?php echo "'$url_to_redirect'" ?>);
        }
    }
    </script>

