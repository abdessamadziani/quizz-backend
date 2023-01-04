<?php


class DataProvider
{
    protected $username="root";
    protected $password="";


        public function connect()
        {
            try {
                $dbh = new PDO('mysql:host=localhost;dbname=quizz',$this->username,$this->password);
              
                // $req=$dbh->query('SELECT id, suggestion  from suggestions where correct=1');
                // $stmt=$req->fetchAll(PDO::FETCH_OBJ);
                // foreach($stmt as $arr)
                // {
                //     foreach($arr as $data)
                //     {
                //     echo $data.'<br>';
                //     }
                // }
                //$dbh = null;


                // function getPropositions()
                // {
                   
                //     $DB=new DataProvider();
                //     $con=$DB->connect();
                //     $query="SELECT * FROM suggestions";
                //     $stmt=$con->query($query);
                //     $stmt->execute();
                //     $result=$stmt->fetchAll(PDO::FETCH_ASSOC);
                //     for($i=0;$i<40 ;$i++)
                //     {
                //         //echo $result[$i]["id"]. $result[$i]["suggestion"].$result[$i]["correct"]."<br>" ;
                //         if($result[$i]["correct"]==1)
                //         {
                //             $arr[]=$result[$i]["suggestion"];
                //         }
            
                //     }
            
            
                //     echo "<br>". "the right questions are :"."<br>";
                //     foreach($arr as $val)
                //     {
                //        // echo $val ."<br>";
                //         //echo "<pre>";
                //         echo json_encode($val);
                //         //echo "</pre>";
                //     }
            
                   
                // }
            } catch (PDOException $e) {
                print "Erreur !: " . $e->getMessage() . "<br/>";
                die();
            }

            return $dbh;
        }



        

}
// $o=new DataProvider();
// echo $o->getPropositions();



         



?>