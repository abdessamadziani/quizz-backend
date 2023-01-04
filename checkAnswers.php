<?php

include "database.php";


    $con=new DataProvider();

    $cnx=$con->connect();
    $query="SELECT * FROM suggestions";
    $stmt=$cnx->query($query);
    $stmt->execute();
    $result=$stmt->fetchAll(PDO::FETCH_ASSOC);
    for($i=0;$i<40 ;$i++)
    {
        //echo $result[$i]["id"]. $result[$i]["suggestion"].$result[$i]["correct"]."<br>" ;
        if($result[$i]["correct"]==1)
        {
            $arr[]=$result[$i]["suggestion"];
        }
      

    }


    $array =json_decode($_POST['array']);
    $d = count($array);
    // echo $d;
    // $nb_answers=json_decode($_POST['nb_answers']);




$s = 0;
    for ($i=0; $i <$d ; $i++) { 
       for ($j=0; $j < 10; $j++) { 
        # code...
        if ($array[$i] == $arr[$j]) {
            # code...

            $s++;
            
        }
     

       }
    }
    echo $s;


   







