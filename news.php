<!doctype html>
<html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
	  <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Все новости</title> 
      <link rel="stylesheet" href="styles/style.css" type="text/css">
    </head>
    <body>
        <div class="content">
        <?php
         // Параметры для подключения
           $db_host = "localhost"; 
           $db_user = "u1870530_test"; // Логин БД
           $db_password = "u1870530_test@"; // Пароль БД
           $db_base = 'u1870530_test'; // Имя БД
           $db_table = "news"; // Имя Таблицы БД
         // Подключение к базе данных
           $db = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password);
        // Устанавливаем корректную кодировку
           $db->exec("set names utf8");
        
        // Подготавливаем SQL-запрос
           $query_answer = $db->prepare("SELECT *FROM $db_table ORDER BY date DESC");
  
        // Выполняем запрос с данными
            $query_answer->execute();
		
            while ($row = $query_answer->fetch(PDO::FETCH_LAZY)) {
               echo '<article><h3>'.$row->name.'</h3><section>'.$row->content.'</section><time>'.$row->date.'</time></article>';
            }
		      
        ?>
        </section>
    </body>

</html>