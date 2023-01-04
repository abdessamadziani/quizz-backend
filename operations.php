<?php

use LDAP\Result;

include "database.php";


class Operations extends DataProvider
{

    function getQuestions()
    {
       
        $DB=new DataProvider();
        $con=$DB->connect();
        $query="SELECT * FROM questions";
        $stmt=$con->query($query);
        $stmt->execute();
        $result=$stmt->fetchAll(PDO::FETCH_ASSOC);
        // for($i=0;$i<10 ;$i++)
        // {
        //      echo $result[$i]["question"] ."<br>";

        // }
        // echo "<pre>";
        // echo json_encode($result);
        // echo "</pre>";

       
    }

    
    function getPropositions()
    {
       
        $con=$this->connect();
        $query="SELECT * FROM suggestions";
        $stmt=$con->query($query);
        $stmt->execute();
        $result=$stmt->fetchAll(PDO::FETCH_ASSOC);
        for($i=0;$i<40 ;$i++)
        {
            //echo $result[$i]["id"]. $result[$i]["suggestion"].$result[$i]["correct"]."<br>" ;
            if($result[$i]["correct"]==1)
            {
                $arr[]=$result[$i]["id"].$result[$i]["suggestion"].$result[$i]["id_question"];
            }

        }


        foreach($arr as $val)
        {
           //echo $val ."<br>";
            echo "<pre>";
            echo json_encode($val);
            echo "</pre>";
        }

       
    }



 


    function getAll()
    {
       
        $DB=new DataProvider();
        $con=$DB->connect();
        $query="select DISTINCT q.question as title,
        (select s.suggestion from suggestions as s where s.answers like 'answer_1' AND s.id_question like q.id ) as answer_1,
        (select s.suggestion from suggestions as s where s.answers like 'answer_2' AND s.id_question like q.id ) as answer_2,
        (select s.suggestion from suggestions as s where s.answers like 'answer_3' AND s.id_question like q.id ) as answer_3,
        (select s.suggestion from suggestions as s where s.answers like 'answer_4' AND s.id_question like q.id ) as answer_4
        from suggestions as s, questions q";
        $stmt=$con->query($query);
        $stmt->execute();
        $result=$stmt->fetchAll(PDO::FETCH_ASSOC);
        // for($i=0;$i<40 ;$i++)
        // {
        //     echo $result[$i]["id"]. $result[$i]["suggestion"] ."<br>";

        // }
     //echo "<pre>";
        echo json_encode($result);
     //echo "</pre>";
       
    }

 

}


$op=new Operations;
$op->getAll();

 //echo "<br>";

// $op->getPropositions();

































?>