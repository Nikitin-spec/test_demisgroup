<!doctype html>
<html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
	  <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Новости</title> 
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
           $query_answer = $db->prepare("SELECT *FROM $db_table ORDER BY date DESC LIMIT 3");
  
        // Выполняем запрос с данными
            $query_answer->execute();
		
            while ($row = $query_answer->fetch(PDO::FETCH_LAZY)) {
			   $offer = explode('.', $row->content);	
               echo '<article><h3>'.$row->name.'</h3><section>'.$offer[0].'.</section><time>'.$row->date.'</time></article>';
            }
		      
        ?>
		<nav>
		<a href="/news.php">Все новости</a>
		<a href="/form_feedback.php">Обратная связь</a>
		</nav>
        </div>
    </body>

</html>