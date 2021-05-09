<?php
include "actions.php";

$saved_transaction_id  = get_last_transaction_id();
echo $saved_transaction_id;
echo "
    <script>window.location.assign('../index.html#/payment-success/$saved_transaction_id')</script>
";