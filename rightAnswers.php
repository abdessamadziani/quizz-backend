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
    // for($i=0;$i<10; $i++)
    // {
    //     echo $arr[$i] ;

    // }
echo json_encode($arr);

