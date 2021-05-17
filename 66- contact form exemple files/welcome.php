<html>
    <head>
        <style>
            body{background-color: <?php echo $_POST["color"];?>;}
        </style>
    </head>
<body>

Welcome <?php echo $_POST["name"]; ?><br/>
Your email address is: <?php echo $_POST["email"]; ?><br/>
your password is : <?php echo $_POST["password"];?><br/>
your age is : <?php echo $_POST["age"];?><br/>
your date of birth is : <?php echo $_POST["dateOfBirth"];?><br/>
your phone is : <?php echo $_POST["phone"];?><br/>
your favorite food is : <?php
if(!empty($_POST['food'])) {
    foreach($_POST['food'] as $check) {
            echo $check." ";}
}
?><br/>
you are a : <?php echo $_POST["gander"];?><br/>
the volume level is : <?php echo $_POST["volume"];?><br/>
</body>
</html>